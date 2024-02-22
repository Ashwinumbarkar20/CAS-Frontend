import React,{useEffect,useState} from 'react'
import styled from "styled-components";
import ProductsData from "../../../Products.json";
import ProductTemplate from "../../../Component/ProductTemplate/ProductTemplate";


export default function Almacampunch() {
  const [product, setProduct] = useState([]);

  const getProduct = (Product) => {
    const Almacamcutproduct = ProductsData.find(
      (p) => p["Product_Name"] === Product
    );
    setProduct(Almacamcutproduct);
  };

  useEffect(() => {
    getProduct("Almacam Punch");
  }, []);
  
  return (
    <Almacam_Punch>
    <ProductTemplate product={product}/>
     
    </Almacam_Punch>
  );
}
const Almacam_Punch = styled.section`
 
`;
