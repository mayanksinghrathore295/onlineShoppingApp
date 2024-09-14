
import { Link, useLocation } from 'react-router-dom'
import Nav from './Nav'
import { productData } from '../Context'
import { useContext, useEffect, useState } from 'react'


const Home = () => {
    const [products]=useContext(productData);
    const {search}=useLocation() // search params se search query laaker dega
    const [filteredProduct,setProduct]=useState(null)
    
    const category =decodeURIComponent(search.split("=")[1]) //convert to string
    
    // const getProductData= async () => {
    //   try {
    //     const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    //     const data = await response.json(); 
    //     setProduct(data)
      
    //     }
       
    //    catch (error) {
    //     console.log(error.message);
    //   }
    // };
    useEffect(()=>{
      if (!filteredProduct||category=="undefined") setProduct(products) // if filterproduct is null
      if(category!="undefined") { //if only category has some data then only it should be called
    setProduct(products.filter((p)=>p.category==category));}
    },[category,products])
 

    
  return products?(
    <>
    <Nav/>
    <div className="w-[85%] p-10 pt-[5%] flex flex-wrap gap-5 overflow-x-hidden overflow-y-auto justify-center " >
        {filteredProduct&&filteredProduct.map((items,index)=> (
           <Link key={index} to={`/details/${items.id}`} 
           className="mr-3 mb-3 card p-5 border shadow rounded w-[20%] h-[40vh] flex justify-center items-center flex-col">
   <div style={{   backgroundImage: `url(${items.image})`}}
   className="w-full h-[70%] bg-cover bg-center bg-no-repeat object-contain bg-center hover:scale-110 object-contain mb-2">
  
   </div>
   
   <h1 className='h-[25%] text-xs '>{items.title} </h1>

   </Link>))}
  
 
  </div>
  </>) :"Loading"
}

export default Home
// 
// 
// 
// 