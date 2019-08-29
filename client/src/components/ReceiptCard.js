import React, { useState, useEffect } from "react";
import { Item } from "semantic-ui-react";
import { Image } from 'cloudinary-react'
import styled from "styled-components";
import {deleteReceipt} from "../actions/deleteReceipt";

const StyledReceiptItem = styled.div`
  background-color: #e6e8e6;
  border-radius: 8px;
  margin: 8px;
  display: flex;
`;
const Content = styled.div`
margin: 20px;
width: 50%;
height: 150px;
background-color:#5bba6f
border-radius: 8px;
font-size: 1.5rem;
`;


const ReceiptImage = styled.div`
width: 55%;
margin: 20px;

`;



export default function ReceiptCard(props) {
  console.log(props);

  const [receipt, setReceipt] = useState({})
  console.log('receipt', receipt)


  useEffect(() => {
    setReceipt(props.data.filter(item => item.id.toString() === props.match.params.receiptID))
  }, [])

  return (

    <Item>
      {
        receipt.length &&
        <>
          <StyledReceiptItem>
            <Content>
              <Item.Content>
                <Item.Header as="a">Category: {receipt[0].category}</Item.Header>
                <Item.Meta>{receipt[0].merchant}</Item.Meta>
                <Item.Description>Amount: {receipt[0].amount_spent}</Item.Description>
                <Item.Extra> Date:{receipt[0].date}</Item.Extra>
              </Item.Content>
            </Content>

            <ReceiptImage>
              <Image cloudName={'argordon'} publicId={`${props.match.params.receiptID}`} />
            </ReceiptImage>

          </StyledReceiptItem>
          <button>Edit</button>
          <button>Delete</button>
        </>
      }
    </Item>


  )

}
