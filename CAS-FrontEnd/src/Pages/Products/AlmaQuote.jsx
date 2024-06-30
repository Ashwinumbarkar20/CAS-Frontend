import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import ProductsData from "../../Data/Products.json";
import ProductTemplate from "../../Component/ProductTemplate/ProductTemplate";
import Almaquote from "../../assets/logo-almaquote.png" 
export default function AlmaQuote() {

  const [product, setProduct] = useState([]);

  const getProduct = (Product) => {
    const Almacamcutproduct = ProductsData.find(
      (p) => p["Product_Name"] === Product
    );
    setProduct(Almacamcutproduct);
  };

  useEffect(() => {
    getProduct("AlmaQUOTE");
  }, []);
  
  return (
    <Almacam_Quote>
    <ProductTemplate product={product} logo={Almaquote}/>
     
    </Almacam_Quote>
  );
}
const Almacam_Quote = styled.section`
 
`;