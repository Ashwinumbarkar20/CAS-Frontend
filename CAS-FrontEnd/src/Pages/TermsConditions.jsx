import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin:40px auto;
 
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
 

  `;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #444;
  margin-top: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const List = styled.ul`
  margin-left: 20px;
`;

const ListItem = styled.li`
  font-size: 16px;
  color: #555;
  margin-bottom: 8px;
`;

const Email = styled.span`
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
`;

export default function TermsConditions() {
  return (
    <div style={{marginTop:"120px"}}>
    <Container>
      <Title>Copyright Notice</Title>
      <Text>© {new Date().getFullYear()} M/s. CADCAM Automation Systems. All rights reserved.</Text>
      <Text>
        The content, design, and images on this website are protected by
        copyright laws. Unauthorized use, reproduction, or distribution of any
        material without prior written consent is prohibited.
      </Text>

      <SubTitle>Terms and Conditions</SubTitle>
      <Text>By accessing this website, you agree to comply with the following terms:</Text>
      <List>
        <ListItem>The content is for informational purposes only and may change without notice.</ListItem>
        <ListItem>Unauthorized reproduction may result in legal actions.</ListItem>
        <ListItem>We are not responsible for third-party links or external website content.</ListItem>
        <ListItem>Your use of this website is subject to our privacy policy and legal disclaimers.</ListItem>
      </List>

      <SubTitle>Contact Us</SubTitle>
      <Text>
        If you have any questions, contact us at <Email>abhilash.nasre@cadcamsys.com</Email>.
      </Text>
    </Container>
    </div>
  );
}
