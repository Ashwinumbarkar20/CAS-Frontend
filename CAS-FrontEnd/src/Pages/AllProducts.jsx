
import styled from 'styled-components'
import { motion } from 'framer-motion';
import ProductsData from '../Data/Products.json'
import ProductCard from '../Component/ProductCard'
import { Link } from "react-router-dom";
export default function AllProducts() {

  return   (
    <Allproducts className='container mb-5'>
      <motion.h1 
        className='Productpage-heading m-5 text-center'
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        CAD/CAM Solutions For 2D,3D and Laser Cutting and Sheet Metal
      </motion.h1>
      
      <div className='row'>
        {ProductsData.map((Product, index) => (
          <motion.div 
            key={Product.Product_Name} 
            className='d-flex justify-content-center align-items-center col-12 col-sm-6 col-md-6 col-lg-4'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
          > 
            <Link to={Product.page_url} className='LinktoProduct'>
              <ProductCard 
                Product_Name={Product.Product_Name} 
                Product_image={Product.Product_Hero_Image}
                Product_Heading={Product.Heading} 
                page_url={Product.page_url}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </Allproducts>
  );
}
const Allproducts=styled.section`
margin-top:90px;
opacity: 1;
transition: opacity 0.5s ease-in-out;
.row{
display:flex;
justify-content:center;
align-items:center;
}
.Productpage-heading{
  background-image:linear-gradient(to right, #006072, #1e7682, #008B74, #50a4a0, #008B74);
      -webkit-background-clip: text;
      color: transparent;
     font-weight:900;
     
}
.LinktoProduct {
  text-decoration:none;
  color: inherit; 
}
`