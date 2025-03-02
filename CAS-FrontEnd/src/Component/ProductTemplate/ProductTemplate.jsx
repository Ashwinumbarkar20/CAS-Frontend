/* eslint-disable react/prop-types */
import React from "react";

import styled from "styled-components";
import { IoMdDownload } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import ReactPlayer from "react-player";
import { IoMdArrowRoundBack } from "react-icons/io";
import {useNavigate} from "react-router-dom"

export default function ProductTemplate({ product,logo }) {
  const navigate = useNavigate();
  const GoBack=()=>{
  
    navigate(-1);

  }
  return (
    <ProductSection>
    <button className="goback"onClick={GoBack}><IoMdArrowRoundBack/>Go Back</button>
      <div className="Hero-img">
        <img className="heroimg" src={product.imgurl} alt="Hero-Almacam" />
      </div>
      <h1 className="Heading-Name">{product.Product_Name}</h1>
      <h3 className="Heading-Desc heading">{product.Heading}</h3>

      <ul className="Product_Description">
        {product.Product_Description &&
          product.Product_Description.map((desc, i) => {
            return <li key={i}>{desc}</li>;
          })}
      </ul>

      <div className="Product-img">
        <img src={logo} alt="Product-img" />
      </div>
     
          <ul className="List-Charcterstic">
            {product.About_Product &&
              product.About_Product.map((desc, i) => {
                return (
                  <React.Fragment key={i}>
                    <li className key={i}>{desc}</li>
                  </React.Fragment>
                );
              })}
          </ul>
   


{product.VideoUrl && (
          <div className="Video">
            <ReactPlayer controls url={product.VideoUrl} />
          </div>
        )}

      {(product.Machine_Brands) && (
        <div className="Machine-Brand">
          <h2 className="heading">Machine brands we drive</h2>
          <div className="listofbrands">
            {product.Machine_Brands
              && product.Machine_Brands.map((Tech, i) => {
                  return (
                    <span className="brand" key={i}>
                      {Tech}
                    </span>
                  );
                })}
          </div>
        </div>
       
      )}

      {product.get && (
        <div className="Get-Product">
          <h2 className="heading">{`Get ${product.Product_Name}`}</h2>
          <p className="get">{product.get}</p>
          <p className="get">
            <a
              href="https://almacam.com/software/almacam-pass/"
              target="_blank"
            >
              Explore More
            </a>
          </p>
        </div>
      )}

      {product.Documents && (
        <div className="Document-Media">
              <div className="Docs">

            <div className="Document">
              <h3>Documents</h3>
              <ul>
                {(product.Documents || product.Documents.length!==0) &&
                  product.Documents.map((doc, i) => {
                    return (
                      <li key={i}>
                        <a
                          href={doc.url}
                          download
                          style={{textDecoration:"none",color:"inherit",fontSize:"15px"}}
                        ><IoMdDownload style={{fontSize:"24px"}}/>{doc.name}</a>
                      </li>
                    );
                  })}
              </ul>
            </div>

            <div className="media">
              <h3>Explore More</h3>
              <ul>
                {product.Video_links &&
                  product.Video_links.map((doc) => {
                    return (
                      <li key={doc.title}><FaYoutube style={{fontSize:"24px", color:"red"}}/>
                        <a href={doc.url} target="_blank">
                          {` ${doc.title}`}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>

          </div>
        </div>
      )}
    </ProductSection>
  );
}
const ProductSection = styled.section`
  margin-top: 95px;
  width: 100vw;

.goback{
  border:None;
  position:fixed;
  z-index:1000;
  padding:5px 10px;
  border-radius:5px;
  top:100px;
  left:20px;
  background-color:#006072;
 color:white;
 font-weight:bold;

}
  .Document-Media {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .Docs {
      margin: 20px;
      display: flex;
     
      flex-wrap:wrap;
      flex-direction: column;
      h3 {
        font-weight: bolder;
      margin: 20px;
      text-align:center;
      background-image: linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #6bbbae);
      -webkit-background-clip:text;
      color:transparent;
      }
      ul {
        list-style: none;
        li {
        
          padding: 0px;
        margin:20px;
        font-weight:bold;
          color:#00896F;
        a{
          text-decoration:none;
          color:inherit;
          font-weight:bold;
          color:#00896F;
        }
        }
      }
    }
  }
  .Machine-Brand {
    display: flex;
    margin: 20px 100px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    h2 {
     font-weight: bolder;
      margin: 20px;
    }
    .listofbrands {
      margin: 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      .brand {
        padding: 8px;
        text-align: center;
        height: auto;
        background-image: linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #6bbbae);
        color: white;
        margin: 10px;
        border-radius: 10px;
        letter-spacing: 1px;
        font-weight: bolder;
        border:none;
        cursor: pointer;
      }
    }
  }
  .Get-Product {
    margin: 20px 100px;
    h2 {
      font-weight: bolder;
      margin: 20px;
      text-align:center;
         }
    p {
            
      font-weight: 500;
    }
    .get {
      text-align: center;
      

      a {
        border: 1px solid var(--primary);
         background-image:linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #50a4b6);
        padding: 10px;
        border-radius: 10px;
        font-weight: bolder;
        color:white;

        text-decoration: none;
        &:visited {
          color: white;
        }
      }
    }
  }
  .Product-img {
    width: 30%;
    margin: 10px 100px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  
  .Product_Description {
    list-style: none;
    text-align:justify;
    margin: 20px 100px;
     padding: 0px;
     list-style-type: square; 
    li {
      font-weight: 500;
      text-align: justify;
      line-height: 30px;
    }
    li::marker{
      color:#6BBBAE;
      font-size:25px;
    }
    
  }
 
  .Heading-Desc {
    margin: 10px 100px;
     font-weight: 500;
  }
  .Hero-img {
    
    margin: 10px auto;
    width: 100%;
    height: 550px;
    /* filter:blur(1px); */
    .heroimg {
      
      margin: 2px auto;
      height: 100%;
      width: 100%;
      
      filter: brightness(0.9);
    }
  }
 
    .List-Charcterstic{
    margin:20px 100px;
    list-style-type:square;
    li{
      line-height:35px;
    }
    li::marker{
      color:#6BBBAE;
      font-size:25px;
    }
    }

    .Video {
      display:flex;
      justify-content:center;
      align-items:center;
margin-top:25px;
      
    }
  
  .Heading-Name {
    margin: 10px 100px;
      background-image:linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #50a4b6);
      -webkit-background-clip: text;
      color: transparent;
     font-weight:900;
  }
  .Product-Charcterstic {
    margin: 10px 100px;
   
  }

  @media only screen and (max-width: 768px) {
    .Desc,.Heading-Name,.Heading-Desc,.Product_Description,.Product-img,.Product-Details,.List-Charcterstic,.Machine-Brand,.Get-Product {
     
        margin: 20px;
        text-align:justify;
    }
    .Hero-img {
      height: 225px;
    }
    }

    .heading{
      background-image: linear-gradient(to right, #006072, #1e7682, #378d92, #50a4a0, #6bbbae);
      -webkit-background-clip: text;
      color: transparent;
     font-weight:900;
     
}
`;


