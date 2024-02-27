/* eslint-disable react/prop-types */
import React from "react";

import styled from "styled-components";
import hero from "../../assets/Almacam_Banner.jpg";


import ReactPlayer from "react-player";
export default function ProductTemplate({ product }) {
  return (
    <ProductSection>
      <h1 className="Heading-Name">{product.Product_Name}</h1>

      <div className="Hero-img">
        <img className="heroimg" src="https://i.postimg.cc/Q8kR5FFB/Almacam-Banner.jpg" alt="Hero-Almacam" />
      </div>

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

      <div className="Product-Details">
        <div className="Product-Charcterstic">
          <ul>
            {product.About_Product &&
              product.About_Product.map((desc, i) => {
                return (
                  <>
                    <li key={i}>{desc}</li>
                  </>
                );
              })}
          </ul>
        </div>

        {product.VideoUrl && (<div className="Video">
          <ReactPlayer controls url={product.VideoUrl} />
        </div>)}

      </div>

      {product.machine_brands && (<div className="Machine-Brand">
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
      </div>)}

      {product.get && (<div className="Get-Product">
        <h2>{`Get ${product.Product_Name}`}</h2>
        <p>{product.get}</p>
        <p className="get">
          <a href="https://almacam.com/software/almacam-pass/" target="_blank">
            Explore More
          </a>
        </p>
      </div>)}

      {product.Documents &&(<div className="Document-Media">
        <h2>Documents & Media</h2>
        <div className="Docs">
          <div className="Document">
            <h3>Documents</h3>
            <ul>
              {product.Documents &&
                product.Documents.map((doc, i) => {
                  return <li key={i}>{doc}</li>;
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
      </div>)}
    </ProductSection>
  );
}
const ProductSection = styled.section`
  max-width: 1440px;
  margin: 2px auto;
  width: 100wh;

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
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    flex-direction: column;
    h2 {
      text-align: center;
      font-weight: bolder;
      margin: 20px;
    }
    .listofbrands {
      margin: 20px;
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
      justify-content:center;
      align-items:center;
      .brand {
        padding: 10px;
        background-color: var(--primary);
        color: white;
        border: 2px solid var(--primary);
        margin: 10px;
        border-radius: 10px;
        letter-spacing: 1px;
        font-weight: bolder;
        cursor: pointer;
      }
    }
  }
  .Get-Product {
    h2 {
      text-align: center;
      font-weight: bolder;
      margin: 20px;
    }
    p {
      margin: 20px;
      text-align: justify;
      font-weight: 500;
    }
    .get {
      text-align: center;
      margin: 20px;

      a {
        border: 1px solid var(--primary);
        background-color: var(--primary);
        padding: 10px;
        border-radius: 10px;
        font-weight: bolder;

        text-decoration: none;
        &:visited {
          color: white;
        }
      }
    }
  }
  .Product-img {
    width: 30%;
    margin: 20px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .Product_Description {
    list-style: none;
    margin: 5px auto;
    width: 80%;
    padding: 0px;
    li {
      font-weight: 500;

      text-align: justify;
      line-height: 30px;
      margin: 5px;
    }
  }
  .Heading-Desc {
    margin: 15px;
    text-align: center;
    font-weight: 500;
  }
  .Hero-img {
    margin: 2px auto;
    width: 100wh;

    .heroimg {
      margin: 2px auto;
      width: 100%;
      object-fit: cover;
      filter: brightness(0.4);
    }
  }
  .Product-Details {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    .Product-Charcterstic {
      padding: 10px;
      ul {
        li {
          padding: 2px;
          text-align: justify;
          margin-bottom: 15px;
          font-weight: 500;
        }
      }
    }
    .Video {
    }
  }
  .Heading-Name {
    margin: 10px;
    text-align: center;
  }
`;
