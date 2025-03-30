/* eslint-disable react/prop-types */

import styled from "styled-components";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import {useNavigate} from "react-router-dom"
export default function TechnologyTemplate({ Technology }) {
  const navigate = useNavigate();
  const GoBack=()=>{
  
    navigate(-1);

  }
  return (
    <Technology_Template>
    <button className="goback"onClick={GoBack}><IoMdArrowRoundBack/>Go Back</button>
      {Technology ? (
        <>
        <div className="Tech-img"><img src={Technology.imgurl} alt="Tech img" /></div>
          <h1 className="Tech-Heading">{Technology.Technology_name}</h1>
          <h2 className="Tech-subHeading">{Technology.Heading}</h2>
          <p className="Tech-Desc">{Technology.Technology_Description}</p>
<h2 className="Tech-subHeading">The Technological Process</h2>
          {Technology.Technology_Process &&
            Technology.Technology_Process.map((process, i) => (
              <p className="Tech-Process" key={i}>{process}</p>
            ))}

          <p className="Desc">{Technology.Description}</p>

          {Technology.Technology_Advantages && (
            <>
              {Technology.Technology_Advantages.map((Adv, index) => (
                <div key={index}>
                  <h3 className="Tech-AdvName">{Adv.Advantage_Name}</h3>
                  <ul className="Tech-list">
                    {Adv.Advantage_list.map((list, i) => (
                      <li className="Adv-Desc" key={i}>{list}</li>
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
font-weight:500;
margin-top:90px;
.Desc{
  margin:10px 100px ;
  text-align:justify;
}
.Tech-img{
  margin:0px auto;
  height:500px;
  width:100%;
  img{
    margin:0px auto;
  width:100%;
  height:500px;
  object-fit:cover;
  }
}
.Tech-Heading{
margin:10px 100px ;
color:var(--primary);
font-weight:900;

}
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
        padding: 8px;
        text-align: center;
        height: auto;
        color: var(--primary);
        margin: 10px;
        border-bottom:2px solid var(--primary);
        
        letter-spacing: 1px;
        font-weight:600;
      
        cursor: pointer;
        transition: all 0.3s ease-in
      }
      .brand:hover{
        color:#6bbbae
      }
    }
  }
  .Tech-subHeading{
    text-align:justify;
margin:20px 100px ;
  }
  .Tech-Desc{
    text-align:justify;
margin:20px 100px ;

  }
  .Tech-Process{
    text-align:justify;
    margin:20px 100px ;
  }
  .Tech-AdvName{
    text-align:justify;
    margin:20px 100px ;
    color:var(--primary);
  }
  .Tech-list{
    text-align:justify;
    margin:20px 100px ;
    list-style-type: square;
    .Adv-Desc::marker{
      
      color:#6BBBAE;
      font-size:25px;
      
    }
  }
  @media only screen and (max-width: 768px) {
    .Tech-Heading,.Tech-list,.Tech-AdvName,.Tech-Process,.Tech-Desc,.Tech-subHeading,.Desc{
        margin: 20px;
    }
}
`;
