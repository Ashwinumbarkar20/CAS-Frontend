import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ProductsData from "../../../Data/Products.json";
import ProductTemplate from "../../../Component/ProductTemplate/ProductTemplate";
import logoAlmacamCombi from "../../../assets/logo-almacam-combi.png";
import logoAlmacamCut from "../../../assets/logo-almacam-cut.png";
import logoAlmacamPunch from "../../../assets/logo-almacam-punch.png";
import logoAlmacamRouting from "../../../assets/logo-almacam-routing.png";
import logoAlmacamSpaceCut from "../../../assets/logo-almacam-SpaceCut.png";
import logoAlmacamTube from "../../../assets/logo-almacam-tube.png";
import logoAlmacamWeld from "../../../assets/logo-almacam-weld.png";
import logoNestCut from "../../../assets/nestcut.png";
import logoAlmaQuote from "../../../assets/logo-almaquote.png";
export default function ProductPage() {
  const { Productname } = useParams();
  console.log(Productname);
  const [product, setProduct] = useState([]);
  
  const getProduct = (Product) => {
    const productData = ProductsData.find(
      (p) => p["Product_Name"] === Product
    );
    setProduct(productData); // Ensure it defaults to an empty object if no match
  };
 
  const getLogo = (Productname) => {
    let logo = null;
    switch (Productname) {
      case "Almacam Combi":
        logo = logoAlmacamCombi;
        break;
      case "Almacam Cut":
        logo = logoAlmacamCut;
        break;
      case "Almacam Punch":
        logo = logoAlmacamPunch;
        break;
      case "Almacam Routing":
        logo = logoAlmacamRouting;
        break;
      case "Almacam SPACECUT":
        logo = logoAlmacamSpaceCut;
        break;
      case "Almacam TUBE":
        logo = logoAlmacamTube;
        break;
      case "AlmaCAM WELD":
        logo = logoAlmacamWeld;
        break;
      case "Nest&Cut":
        logo = logoNestCut;
        break;
      case "AlmaQUOTE":
        logo = logoAlmaQuote;
        break;
      default:
        return null;
    }
    return logo; // Return the logo
  };

  useEffect(() => {
    getProduct(Productname);
  }, [Productname]);

  useEffect(() => {
    const logo = getLogo(Productname);
    if (logo) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        logo: logo, 
      }));
    }
  }, [Productname]); 

  return <>

     <ProductTemplate product={product} logo={product.logo}/>
  </>;
}
