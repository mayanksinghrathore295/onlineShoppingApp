import React, { useEffect } from 'react'
import { useState,useContext, } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { productData } from '../Context';

const Edit = () => {
    const navigate=useNavigate()
     const {id} =useParams()// to get the id
    const [products,setProducts]=useContext(productData);
    const [product,setProduct]=useState({
        title:"",
        description:"",
        image:"",
        price:"",
        category:""

    })
    const changeHandler=(e)=>{
       
        setProduct({...product,[e.target.name]:e.target.value})
    }
   
    useEffect(()=>{
        setProduct(products.filter((p)=>p.id==id)[0])
       

    },[id]) 
    
    const addProductHandler=(e)=>{
        e.preventDefault(e)// to prevent refreshing of page
        if (product.title.trim().length<5||product.image.trim().length<5||product.price.length<1||product.category.trim().length<5||product.description.trim().length<5){
            alert("Fill all the fields correctly")
            return
           }
          const pi= products.findIndex((p)=>p.id==id)
        //   const copyData=[...products]
        //   copyData[pi]={...products[pi],product}
        //   setProducts(copyData);
        //   localStorage.setItem("products",JSON.stringify(copyData))
        //   navigate(-1)
        if (pi !== -1) {
            const copyData = [...products];
            copyData[pi] = { ...copyData[pi], ...product };
            setProducts(copyData);
            localStorage.setItem("products", JSON.stringify(copyData));
            navigate(-1);
          }
              
//   setProducts([...products,product]);
//   console.log(products)
//   localStorage.setItem("products",JSON.stringify([...products,product]));
//   navigate("/");
        }
 
  return (
    <form className='p-[5%] w-screen h-screen flex flex-col items-center' onSubmit={addProductHandler}>
    <h1 className='text-3xl w-1/2 mb-5'>Edit Product</h1>
    <input type="url" placeholder='image-link' className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
     onChange={changeHandler} 
     name="image"value={product&&product.image}/>
    <input type="text" placeholder='Title' className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
     onChange={changeHandler}  name="title"value={product&&product.title}/>
     <div className='w-1/2 flex justify-between'>
    <input type="text" placeholder='Category' className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
     onChange={changeHandler} name="category" value={product&&product.category}/>
    <input type="number" placeholder='Price' className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
     onChange={changeHandler} value={product&&product.price} name="price"/>
    </div>
    <textarea className='text-1xl bg-zinc-100 rounded p-3 w-[50%] mb-3' rows="10"  
    onChange={changeHandler} value={product&&product.description} name="description" placeholder='enter product description here'>

    </textarea>
    <button 
    className="py-2 px-4 rounded-md border border-blue-500 text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300">
    Edit product
    </button>
    
    
   </form>
  )
}

export default Edit;