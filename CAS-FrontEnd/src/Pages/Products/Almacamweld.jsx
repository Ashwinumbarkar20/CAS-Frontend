import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import ProductsData from "../../Products.json";
import ProductTemplate from "../../Component/ProductTemplate/ProductTemplate";
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
    <ProductTemplate product={product}/>
     
    </Almacam_Weld>
  );
}
const Almacam_Weld = styled.section`
 
`;