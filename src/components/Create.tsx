import React, { useState,useContext } from 'react'
import { productData } from '../Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {
     const navigate=useNavigate()
    const [products,setProducts]=useContext(productData);
    const [title,setTitle]=useState("")
    const [image,setImage]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")
    const addProductHandler=(e)=>{
        e.preventDefault(e)// to prevent refreshing of page
        if (title.trim().length<5||image.trim().length<5||price.trim().length<1||category.trim().length<5||description.trim().length<5){
            alert("Fill all the fields correctly")
            return
           }
           const product = {
            id: nanoid(),
            title,
            image,
            category,
            price,
            description
          };
              
  setProducts([...products,product]);
  console.log(products)
  localStorage.setItem("products",JSON.stringify([...products,product]));
  toast.success("Product Created successfully")
  navigate("/");
    }
  return (
   <form className='p-[5%] w-screen h-screen flex flex-col items-center' onSubmit={addProductHandler}>
    <h1 className='text-3xl w-1/2 mb-5'>Add New Product</h1>
    <input type="url" placeholder='image-link' className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
     onChange={(e)=>setImage(e.target.value)} value={image}/>
    <input type="text" placeholder='Title' className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
     onChange={(e)=>setTitle(e.target.value)} value={title}/>
     <div className='w-1/2 flex justify-between'>
    <input type="text" placeholder='Category' className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
     onChange={(e)=>setCategory(e.target.value)} value={category}/>
    <input type="number" placeholder='Price' className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
     onChange={(e)=>setPrice(e.target.value)} value={price}/>
    </div>
    <textarea className='text-1xl bg-zinc-100 rounded p-3 w-[50%] mb-3' rows="10"  
    onChange={(e)=>setDescription(e.target.value)} value={description} placeholder='enter product description here'>

    </textarea>
    <button 
    className="py-2 px-4 rounded-md border border-blue-500 text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300">
    Add product
    </button>
    
    
   </form>
  )
}

export default Create