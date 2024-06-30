import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import ProductsData from "../../Data/Products.json";
import ProductTemplate from "../../Component/ProductTemplate/ProductTemplate";
import spacecut from "../../assets/logo-almacam-SpaceCut.png"
export default function Almacamspacecut() {
  
  const [product, setProduct] = useState([]);

  const getProduct = (Product) => {
    const Almacamcutproduct = ProductsData.find(
      (p) => p["Product_Name"] === Product
    );
    setProduct(Almacamcutproduct);
  };

  useEffect(() => {
    getProduct("Almacam SPACECUT");
  }, []);
  
  return (
    <Almacam_SpaceCut>
    <ProductTemplate product={product} logo={spacecut}/>
     
    </Almacam_SpaceCut>
  );
}
const Almacam_SpaceCut = styled.section`
 
`;
