/* eslint-disable react/prop-types */
import React from "react";

import styled from "styled-components";

import ReactPlayer from "react-player";
export default function ProductTemplate({ product }) {
  return (
    <ProductSection>
      <div className="Hero-img">
        <img className="heroimg" src={product.imgurl} alt="Hero-Almacam" />
      </div>
      <h1 className="Heading-Name">{product.Product_Name}</h1>
      <h3 className="Heading-Desc">{product.Heading}</h3>

      <ul className="Product_Description">
        {product.Product_Description &&
          product.Product_Description.map((desc, i) => {
            return <li key={i}>{desc}</li>;
          })}
      </ul>

      <div className="Product-img">
        <img src={product.Product_Hero_Image} alt="Product-img" />
      </div>
     
          <ul className="List-Charcterstic">
            {product.About_Product &&
              product.About_Product.map((desc, i) => {
                return (
                  <>
                    <li className key={i}>{desc}</li>
                  </>
                );
              })}
          </ul>
   


{product.VideoUrl && (
          <div className="Video">
            <ReactPlayer controls url={product.VideoUrl} />
          </div>
        )}

      {product.machine_brands && (
        <div className="Machine-Brand">
          <h2>Machine brands we drive</h2>
          <div className="listofbrands">
            {product.machine_brands
              ? product.machine_brands.map((Tech, i) => {
                  return (
                    <span className="brand" key={i}>
                      {Tech}
                    </span>
                  );
                })
              : "None"}
          </div>
        </div>
      )}

      {product.get && (
        <div className="Get-Product">
          <h2>{`Get ${product.Product_Name}`}</h2>
          <p>{product.get}</p>
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
          <h2>Documents & Media</h2>
          <div className="Docs">
            <div className="Document">
              <h3>Documents</h3>
              <ul>
                {product.Documents &&
                  product.Documents.map((doc, i) => {
                    return (
                      <li key={i}>
                        <a
                          href={`../../PDF/${doc}.pdf`}
                          download
                        >{`${doc}.pdf`}</a>
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
                        <a href={doc.url} target="_blank">
                          {doc.title}
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

  .Document-Media {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .Docs {
      margin: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      h3 {
        margin: 20px;
      }
      ul {
        list-style: none;
        li {
          padding: 0px;
          margin: 10px;
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
      text-align: center;
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
        padding: 10px;
        text-align: center;
        height: auto;
        background-color: var(--primary);
        color: white;
        border: 2px double var(--primary);
        margin: 10px;
        border-radius: 10px;
        letter-spacing: 1px;
        font-weight: bolder;
        cursor: pointer;
      }
    }
  }
  .Get-Product {
    margin: 20px 100px;
    h2 {
      text-align: center;
      font-weight: bolder;
     
    }
    p {
      
      text-align: justify;
      font-weight: 500;
    }
    .get {
      text-align: center;
      

      a {
        border: 1px solid var(--primary);
        background-color: var(--primary);
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
    li {
      font-weight: 500;
      text-align: justify;
      line-height: 30px;
    }
  }
 
  .Heading-Desc {
    margin: 10px 100px;
    text-align: justify;
    font-weight: 500;
  }
  .Hero-img {
    margin: 10px auto;
    width: 100%;
    height: 400px;
    .heroimg {
      margin: 2px auto;
      height: 100%;
      width: 100%;
      object-fit: cover;
      filter: brightness(0.9);
    }
  }
 
    .List-Charcterstic{
    margin:20px 100px;
    li{
      line-height:35px;
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
    color: var(--primary);
  }
  .Product-Charcterstic {
    margin: 10px 100px;
    text-align: justify;
  }

  @media only screen and (max-width: 768px) {
    .Desc,.Heading-Name,.Heading-Desc,.Product_Description,.Product-img,.Product-Details,.List-Charcterstic,.Machine-Brand,.Get-Product {
     
        margin: 20px;
    }
    }
`;
