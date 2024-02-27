/* eslint-disable react/prop-types */

import styled from "styled-components";
import React from "react";

export default function TechnologyTemplate({ Technology }) {
  return (
    <Technology_Template>
      {Technology ? (
        <>
          <h1>{Technology.Technology_name}</h1>

          <h2>{Technology.Heading}</h2>

          <h5>{Technology.Technology_Description}</h5>

          {Technology.Technology_Process &&
            Technology.Technology_Process.map((process, i) => (
              <p key={i}>{process}</p>
            ))}

          <h5>{Technology.Description}</h5>

          {Technology.Technology_Advantages && (
            <>
              {Technology.Technology_Advantages.map((Adv, index) => (
                <div key={index}>
                  <h3>{Adv.Advantage_Name}</h3>
                  <ul>
                    {Adv.Advantage_list.map((list, i) => (
                      <li key={i}>{list}</li>
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
h1,h2,h3,h4,h5{
  text-align:center;
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
`;
