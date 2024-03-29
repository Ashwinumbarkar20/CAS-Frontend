import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductsData from "../../../Data/Products.json";
import ProductTemplate from "../../../Component/ProductTemplate/ProductTemplate";

export default function Almacamcut() {
  const [product, setProduct] = useState([]);

  const getProduct = (Product) => {
    const Almacamcutproduct = ProductsData.find(
      (p) => p["Product_Name"] === Product
    );
    setProduct(Almacamcutproduct);
  };

  useEffect(() => {
    getProduct("Almacam Cut");
  }, []);
  
  return (
    <Almacam_Cut>
    <ProductTemplate product={product}/>
     
    </Almacam_Cut>
  );
}
const Almacam_Cut = styled.section`
 
`;
