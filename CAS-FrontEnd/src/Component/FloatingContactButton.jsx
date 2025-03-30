import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContactButton = styled.button`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: #2A5CAA;
  color: white;
  border: none;
  padding: 15px 10px;
  font-size: 16px;
  font-weight: bold;
  writing-mode: vertical-rl; /* Makes text vertical */
  text-orientation: mixed;
  cursor: pointer;
  border-radius: 10px 0 0 10px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    background:#0c45a0;
  }
`;

export default function FloatingContactButton() {
  const navigate = useNavigate();

  return (
    <ContactButton onClick={() => navigate("/Contactus")}>
      Contact Us
    </ContactButton>
  );
}
