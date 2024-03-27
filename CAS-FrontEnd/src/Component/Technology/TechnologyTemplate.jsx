/* eslint-disable react/prop-types */

import styled from "styled-components";
import React from "react";

export default function TechnologyTemplate({ Technology }) {
  
  return (
    <Technology_Template>
      {Technology ? (
        <>
          <h1 className="Tech-Heading">{Technology.Technology_name}</h1>

          <h2 className="Tech-subHeading">{Technology.Heading}</h2>

          <h5 className="Tech-Desc">{Technology.Technology_Description}</h5>

          {Technology.Technology_Process &&
            Technology.Technology_Process.map((process, i) => (
              <p className="Tech-Process" key={i}>{process}</p>
            ))}

          <h5 className="Tech-Desc">{Technology.Description}</h5>

          {Technology.Technology_Advantages && (
            <>
              {Technology.Technology_Advantages.map((Adv, index) => (
                <div key={index}>
                  <h3 className="Tech-AdvName">{Adv.Advantage_Name}</h3>
                  <ul className="Tech-list">
                    {Adv.Advantage_list.map((list, i) => (
                      <li className="Adv-Desc"key={i}>{list}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
{Technology.Machine_brands&&(
  <div className="Machine-Brand"> 
  <h2>Machine brands we drive</h2>
  <div className="listofbrands">
 { Technology.Machine_brands.map((brand,i)=><span className="brand" key={i}>{brand}</span>)}
 </div>
  </div>
)}
        </>
      ) : (
        "No Data Found"
      )}
    </Technology_Template>
  );
}
const Technology_Template = styled.main`
margin:10px;
.Tech-Heading{
margin-top:120px;
text-align:center;
color:var(--primary);
font-weight:900;
border-bottom:2px solid var(--accent);

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
      color:var(--primary);
      font-weight:900;
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
        text-align:center;
        height:auto;
        letter-spacing: 1px;
        font-weight: bolder;
        cursor: pointer;
      }
    }
  }
`;
