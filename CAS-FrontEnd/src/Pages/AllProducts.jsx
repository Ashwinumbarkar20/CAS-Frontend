
import styled from 'styled-components'

import ProductsData from '../Data/Products.json'
import ProductCard from '../Component/ProductCard'
console.log(ProductsData)
export default function AllProducts() {

  return (
    <Allproducts className='container mb-5'>
    <div className='row'>
    <h1 className='Productpage-heading m-5 text-center'>CAD/CAM Solutions For 2D,3D and Laser Cutting and Sheet Metal Working</h1>
  {
    ProductsData.map((Product)=> 
    <div  key={Product.Product_Name} className='d-flex justify-content-center align-items-center col-12 col-sm-6 col-md-6 col-lg-4' > 
    <ProductCard 
     
    Product_Name={Product.Product_Name} 
    Product_image={Product.Product_Hero_Image}
    Product_Heading={Product.Heading} 
    page_url={Product.page_url}
    />
    </div>
  )
  }
</div>
      </Allproducts>
  )
}
const Allproducts=styled.section`
margin-top:40px;

.row{
display:flex;
justify-content:center;
align-items:center;
}
.Productpage-heading{
  color:var(--Dark-bg);
}
`