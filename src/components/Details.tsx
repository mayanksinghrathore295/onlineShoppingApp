import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { productData } from '../Context';
import { useParams } from 'react-router-dom';

const Details = () => {
  const navigate=useNavigate();
  const [product,setProduct]=useContext(productData);
    const { id } = useParams(); // using parameters for dynamic routing
    const [products,setProducts]=useState(null)
    
    // const fetchData = async () => {
    //     try {
    //       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    //       const data = await response.json(); 
    //     setProducts(data);
    //       }
         
         
    //      catch (error) {
    //       console.log(error.message);
    //     }
    //   };
      useEffect(()=>{
        // fetchData();
        if(!products){
          setProducts(product.filter((p: { id: string | undefined; })=>p.id==id)[0]);
          
        }
      },[])
      const productDeleteHandler=(id)=>{
        const filteredProduct=product.filter((p)=>p.id!==id)
        setProduct(filteredProduct);
        localStorage.setItem("products",JSON.stringify(filteredProduct));
        navigate("/")
      }
  return products?(
    <div className='w-[70%] h-full  m-auto p-[10%] flex justify-between items-center '>
    <img className='w-[40%] h-[80%] object-contain' src={`${products.image}`}/>
    <div className='content w-[50%]'>
        <h1 className='text-4xl'>{products.title}</h1>
        <h3 className='text-zinc-400 my-5'>{products.category}</h3>
        <h2 className='mb-3 text-red-300'>${products.price}</h2>
        <p className='mb-[5%]'>{products.description}</p>
        <Link to ={`/edit/${products.id}`}className=" mr-5 py-2 px-2 rounded-md border-blue text-blue-300 border-2 "> Edit</Link>
        <button onClick={()=>productDeleteHandler(products.id)} className="py-2 px-2 rounded-md border-red text-red-300 border-2 mr-5 "> Delete</button>
    </div>
    </div>
  ):"loading"
}

export default Details