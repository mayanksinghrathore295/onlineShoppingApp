import React from 'react'
import { productData } from '../Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [products]=useContext(productData);
    let distinct_category=products&&products.reduce((acc,cv)=>[...acc,cv.category],[])// for getting only categories
   
   
    distinct_category = [...new Set(distinct_category)]; // Set unique elements ka collection
   
  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
    <a href="/create"  className="py-2 px-4 rounded-md border border-blue-500 text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300">
    Add new product</a>
    <hr className="w-[80%] my-3"/>
    <h1 className="text-2xl mb-3 w-[80%] font-bold">Category Filter</h1>
    <div className=" ">
      {distinct_category.map((item,index:number)=> <Link  key={index} 
      to={`/?category=${item}`}className=" flex  items-center mb-3">
   
           <span className="w-3 h-3 bg-blue-400 rounded-full inline-block mr-2"></span>
      {item}
     </Link>)}
     
      
    
    </div>
    
   
     </nav>
    
  )
}

export default Nav