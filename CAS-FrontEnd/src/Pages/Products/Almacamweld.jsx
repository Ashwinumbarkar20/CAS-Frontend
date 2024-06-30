import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import ProductsData from "../../Data/Products.json";
import ProductTemplate from "../../Component/ProductTemplate/ProductTemplate";
import AlmaWeld from "../../assets/logo-almacam-weld.png" 

export default function Almacamweld() {
  const [product, setProduct] = useState([]);

  const getProduct = (Product) => {
    const Almacamcutproduct = ProductsData.find(
      (p) => p["Product_Name"] === Product
    );
    setProduct(Almacamcutproduct);
  };

  useEffect(() => {
    getProduct("AlmaCAM WELD");
  }, []);
  
  return (
    <Almacam_Weld>
    <ProductTemplate product={product} logo={AlmaWeld}/>
     
    </Almacam_Weld>
  );
}
const Almacam_Weld = styled.section`
 
`;