import React from "react";
import {Image, Item } from "semantic-ui-react";
import styled from "styled-components";

const StyledReceiptItem = styled.div`
  background-color: #e6e8e6;
  border-radius: 8px;
  margin: 5px;
  display: flex;
`;
const Content = styled.div`
margin: 20px;
width: 40%;
height: 150px;
background-color:#5bba6f
border-radius: 8px;
font-size: 1.5rem;
`;


const ReceiptImage = styled.div`
width: 55%;
margin: 20px;

`;



export default function ReceiptCard() {
  return (
  
      <Item>
      <StyledReceiptItem>
        <Content>
          <Item.Content>
              <Item.Header as="a">Category: recep.category</Item.Header>
              <Item.Meta>recep.merchant</Item.Meta>
              <Item.Description>Amount: recep.amount_spent</Item.Description>
              <Item.Extra> Date:recep.date</Item.Extra>
          </Item.Content>
        </Content>

            <ReceiptImage>
               Image Here(recep.image})
            </ReceiptImage>
     </StyledReceiptItem>
         <button>Edit</button>
         <button>Delete</button>
      </Item>
   
    
  );

}
