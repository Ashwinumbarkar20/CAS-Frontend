import React,{useEffect,useState} from 'react'
import styled from "styled-components";
import ProductsData from "../../../Products.json";
import ProductTemplate from "../../../Component/ProductTemplate/ProductTemplate";


export default function Almacamrouting() {
  const [product, setProduct] = useState([]);

  const getProduct = (Product) => {
    const Almacamcutproduct = ProductsData.find(
      (p) => p["Product_Name"] === Product
    );
    setProduct(Almacamcutproduct);
  };

  useEffect(() => {
    getProduct("Almacam Routing");
  }, []);
  
  return (
    <Almacam_Routing>
    <ProductTemplate product={product}/>
     
    </Almacam_Routing>
  );
}
const Almacam_Routing = styled.section`
 
`;
