import React from "react";
import { Item } from "semantic-ui-react";
import styled from "styled-components";

const StyledReceiptItem = styled.div`
  background-color: #e6e8e6;
`;

export default function ReceiptCard() {
  return (
    <StyledReceiptItem>
      <Item>
        <Item.Content>
          <Item.Header as="a">Receipt Category</Item.Header>
          <Item.Meta>Receipt - Description</Item.Meta>
          <Item.Description>
            {/* <Image src='/images/wireframe/short-paragraph.png' /> */}
          </Item.Description>
          <Item.Extra>Amount Details</Item.Extra>
        </Item.Content>

        <Item.Image size="tiny" src="/images/wireframe/image.png" />
      </Item>
    </StyledReceiptItem>
  );
}
