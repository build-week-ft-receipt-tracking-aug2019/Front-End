import React from "react";
import {Image, Item } from "semantic-ui-react";
import styled from "styled-components";

const StyledReceiptItem = styled.div`
  background-color: #e6e8e6;
  border: black 5px;
  display: flex;
`;
const Content = styled.div`
margin: 20px;
width: 40%;
display: flex;
`;

const ReceiptImage = styled.div`
width: 55%;

`;

export default function ReceiptCard() {
  return (
  
      <Item>
      <StyledReceiptItem>
          <Content>
        <Item.Content>
           <Item.Header as="a">Receipt Category</Item.Header>
           <Item.Meta>Receipt - Description</Item.Meta>
           <Item.Description>
           </Item.Description>
           <Item.Extra>Amount Details</Item.Extra>
        </Item.Content>
        </Content>

        <ReceiptImage>
         Image Here
        </ReceiptImage>
        </StyledReceiptItem>
      </Item>
   
    
  );
}
