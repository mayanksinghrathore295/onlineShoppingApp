import { createContext, useState,useEffect } from "react"
import { Product } from "./ProductsType";

 export const productData=createContext();

const Context = (props) => {
    // const [products,setProducts]=useState(null);
    // const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products"))||null);
    // const [products, setProducts] = useState( []);
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);



  
        // const fetchData = async () => {
        //   try {
        //     const response = await fetch("https://fakestoreapi.com/products"); 
        //     if (!response.ok) {
        //       throw new Error('Network response was not ok');
        //     }
        //     const result = await response.json();
        //     setProducts(result);
            
        //   } catch (error) {
        //     console.log(error.message);
        //   } };
        //   useEffect(() => {
        //   fetchData();
        // }, []);
  return (
    <productData.Provider value={[products,setProducts]}>{props.children}</productData.Provider>
    
  )
}

export default Context