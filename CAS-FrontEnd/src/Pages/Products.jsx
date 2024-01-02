import React, { useState } from 'react'
import styled from 'styled-components'
import Productd from '../Data/Products.json'
import ProductCard from '../Component/ProductCard'
export default function Products() {

  return (
    <Allproducts className='container mb-5'>
    <h1 className='text-center mt-5'>Our Products</h1>
    <div className='row mt-5 justify-content-center gap-5'>
    {
        Productd.map((Product)=> <ProductCard className="col col-xs-12 col-sm-12 col-md-6 col-lg-4" key={Product.Product_Name} Product={Product}></ProductCard>)
    }
    </div>
       </Allproducts>
  )
}
const Allproducts=styled.section`

`