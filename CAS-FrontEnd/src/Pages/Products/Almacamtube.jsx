import React,{useEffect,useState} from 'react'
import styled from "styled-components";
import ProductsData from "../../Products.json";
import ProductTemplate from "../../Component/ProductTemplate/ProductTemplate";

export default function Almacamtube() {
  const [product, setProduct] = useState([]);

  const getProduct = (Product) => {
    const Almacamcutproduct = ProductsData.find(
      (p) => p["Product_Name"] === Product
    );
    setProduct(Almacamcutproduct);
  };

  useEffect(() => {
    getProduct("Almacam TUBE");
  }, []);
  
  return (
    <Almacam_Tube>
    <ProductTemplate product={product}/>
     
    </Almacam_Tube>
  );
}
const Almacam_Tube = styled.section`
 
`;
