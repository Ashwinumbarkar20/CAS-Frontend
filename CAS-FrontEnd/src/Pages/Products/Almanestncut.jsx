import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import ProductsData from "../../Data/Products.json";
import ProductTemplate from "../../Component/ProductTemplate/ProductTemplate";
import AlmaNestandCut from "../../assets/nestcut.png" 

export default function Almanestncut() {
  const [product, setProduct] = useState([]);

  const getProduct = (Product) => {
    const Almacamcutproduct = ProductsData.find(
      (p) => p["Product_Name"] === Product
    );
    setProduct(Almacamcutproduct);
  };

  useEffect(() => {
    getProduct("Nest&Cut");
  }, []);
  
  return (
    <Almacam_Weld>
    <ProductTemplate product={product} logo={AlmaNestandCut}/>
     
    </Almacam_Weld>
  );
}
const Almacam_Weld = styled.section`
 
`;