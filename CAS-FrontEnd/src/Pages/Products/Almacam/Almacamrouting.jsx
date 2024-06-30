import React,{useEffect,useState} from 'react'
import styled from "styled-components";
import ProductsData from "../../../Data/Products.json";
import ProductTemplate from "../../../Component/ProductTemplate/ProductTemplate";
import AlmacamRouting from "../../../assets/logo-almacam-routing.png"

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
    <ProductTemplate product={product} logo={AlmacamRouting}/>
     
    </Almacam_Routing>
  );
}
const Almacam_Routing = styled.section`
 
`;
