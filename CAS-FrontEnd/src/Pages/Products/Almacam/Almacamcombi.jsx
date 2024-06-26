import React,{useEffect,useState} from 'react'
import styled from "styled-components";
import ProductsData from "../../../Data/Products.json";
import ProductTemplate from "../../../Component/ProductTemplate/ProductTemplate";
import AlmacamCombi from "../../../assets/logo-almacam-combi.png"

export default function Almacamcombi() {
  const [product, setProduct] = useState([]);

  const getProduct = (Product) => {
    const Almacamcutproduct = ProductsData.find(
      (p) => p["Product_Name"] === Product
    );
    setProduct(Almacamcutproduct);
  };

  useEffect(() => {
    getProduct("Almacam Combi");
  }, []);
  
  return (
    <Almacam_Combi>
    <ProductTemplate product={product} logo={AlmacamCombi}/>
    </Almacam_Combi>
  );
}
const Almacam_Combi = styled.section`
 
`;