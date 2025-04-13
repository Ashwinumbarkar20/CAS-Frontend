/* eslint-disable react/prop-types */
import React from "react";

import styled from "styled-components";
import { IoMdDownload } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import ReactPlayer from "react-player";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function ProductTemplate({ product, logo }) {
  const navigate = useNavigate();
  const GoBack = () => {
    navigate(-1);
  };
  return (
    <ProductSection>
      <button className="goback" onClick={GoBack}>
        <IoMdArrowRoundBack />
        Go Back
      </button>
      <h6 className="Heading-Desc heading">{product.Heading}</h6>

      <div className="Hero-Heading">
        <div className="Hero-img">
          <img className="heroimg" src={product.imgurl} alt="Hero-Almacam" />
        </div>
        <div>
          <h1 className="Heading-Name">{product.Product_Name}</h1>
          <div className="Product-img">
            <img src={logo} alt="Product-img" />
          </div>
          <ul className="Product_Description">
            {product.Product_Description &&
              product.Product_Description.map((desc, i) => {
                return <li key={i}>{desc}</li>;
              })}
          </ul>
        </div>
      </div>
      {/* <div className="Hero-img">
        <img className="heroimg" src={product.imgurl} alt="Hero-Almacam" />
      </div> */}
      {/* <h1 className="Heading-Name">{product.Product_Name}</h1> */}

      <ul className="List-Charcterstic">
      <h3 style={{color:"var(--primary)"}}>Key-Points</h3>      
        {product.About_Product &&
          product.About_Product.map((desc, i) => {
            return (
              <React.Fragment key={i}>
                <li className key={i}>
                  {desc}
                </li>
              </React.Fragment>
            );
          })}
      </ul>

      {product.VideoUrl && (
        <div className="Video">
          <ReactPlayer controls url={product.VideoUrl} />
        </div>
      )}

      {product.Machine_Brands && (
        <div className="Machine-Brand">
          <h3 style={{color:"var(--primary",textAlign:"center",fontWeight:"bolder",marginTop:"10px"}}>Machine brands we drive</h3>
          <div className="listofbrands">
            {product.Machine_Brands &&
              product.Machine_Brands.map((Tech, i) => {
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
          <h3 style={{color:"var(--primary)",textAlign:"center",fontWeight:"bolder"}}>{`Get ${product.Product_Name}`}</h3>
          <p className="get">{product.get}</p>
          <button className="getbtn">
            <a

              href="https://almacam.com/software/almacam-pass/"
              target="_blank"
            >
              Explore More
            </a>
          </button>
        </div>
      )}

      {product.Documents && (
        <div className="Document-Media">
          <div className="Docs">
            <div className="Document">
              <h3>Documents</h3>
              <ul>
                {(product.Documents || product.Documents.length !== 0) &&
                  product.Documents.map((doc, i) => {
                    return (
                      <li key={i}>
                        <a
                          href={doc.url}
                          download
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            fontSize: "15px",
                          }}
                        >
                          <IoMdDownload style={{ fontSize: "24px" }} />
                          {doc.name}
                        </a>
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
                      <li key={doc.title}>
                        <FaYoutube style={{ fontSize: "24px", color: "red" }} />
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
  .Hero-Heading {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: start;
    margin-top: 2rem;
    padding: 1rem;
  }

  .goback {
    border: None;
    position: fixed;
    z-index: 1000;
    padding: 5px 10px;
    border-radius: 5px;
    top: 100px;
    left: 20px;
    background-color: var(--primary);
    color: white;
    font-weight: bold;
  }

  .Document-Media {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: flex;
    flex-direction: column;
    .Docs {
      width:100%;
      display: flex;
  justify-content:space-evenly; /* Two flexible columns */
  align-items:start;
  flex-wrap:wrap;
  margin-top: 2rem;
  padding: 1rem;
      h3 {
        font-weight: bolder;
        
        text-align: center;
       
        color: var(--primary);
      }
      ul {
        list-style: none;
        li {
          padding: 0px;
        padding:5px;
     
        font-weight:600;
          
          a {
            text-decoration: none;
            color: inherit;
       
          
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
        color: var(--primary);
        margin: 10px;
        border-bottom: 2px solid var(--primary);

        letter-spacing: 1px;
        font-weight: 600;

        cursor: pointer;
        transition: all 0.3s ease-in;
      }
      .brand:hover {
        color: #6bbbae;
      }
    }
  }

  .Get-Product {
    margin: 20px 100px;
    display:flex;
    flex-direction:column;
    
    gap:10px;
    h2 {
      font-weight: bolder;
   
      
      color:var(--primary)
    }
    p {
      font-weight: 500;
    }
    .get {
      text-align:justify;

     
    }
    .getbtn{
      text-align:center;
      border:none;
      cursor: pointer;
      background-color:var(--primary);
       padding: 10px;
       border-radius: 10px;
       font-weight: bolder;
       color: white;
      a {
       
     
        color: white;
       text-decoration: none;
       &:visited {
         color: white;
       }
     }
    }
  }

  .Product-img {
    width: 80%;
    margin: 10px 100px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .Product_Description {
    list-style: none;
    text-align: left;
    margin: 20px 100px;
    padding: 0px;
    list-style:none;
    li {
      font-weight: 500;
      text-align: left;
      line-height: 30px;
      margin-bottom:20px;
      
    }
    li::marker {
      color: var(--primary);
      font-size: 25px;
    }
  }

  .Heading-Desc {
    margin: 10px 100px;
    font-weight: 500;
  }

  .Hero-img {
    margin: 10px auto;
    width: 100%;
    height: 400px;
    /* filter:blur(1px); */
    .heroimg {
      margin: 2px auto;
      height: 100%;
      width: 100%;

      filter: brightness(0.9);
    }
  }

  .List-Charcterstic {
    
    margin: 20px 100px;
    list-style-type: square;
    text-align:left;
    li {
      //line-height: 35px;
      margin-bottom:10px;
      text-align:left;
    }
    li::marker {
      color: var(--primary);
      font-size: 25px;
    }
  }

  .Video {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px 0px;
  }

  .Heading-Name {
    margin: 10px 100px;
    text-align: center;
    color: var(--primary);
    font-weight: 900;
  }

  .Product-Charcterstic {
    margin: 10px 100px;
  }

  @media only screen and (max-width: 768px) {
    .Desc,
    .Heading-Name,
    .Heading-Desc,
    .Product_Description,
    .Product-img,
    .Product-Details,
    .List-Charcterstic,
    .Machine-Brand,
    .Get-Product {
      margin: 20px;
      text-align: justify;
    }
    .Hero-img {
      height: 225px;
    }
  }

  .heading {
    color: var(--primary);
    
  }
`;
