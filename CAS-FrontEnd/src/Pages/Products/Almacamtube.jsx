import React,{useEffect,useState} from 'react'
import styled from "styled-components";
import ProductsData from "../../Data/Products.json";
import ProductTemplate from "../../Component/ProductTemplate/ProductTemplate";
import AlmaTube from "../../assets/logo-almacam-tube.png"
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
    <ProductTemplate product={product} logo={AlmaTube}/>
     
    </Almacam_Tube>
  );
}
const Almacam_Tube = styled.section`
 
`;
