import React from "react";
import AddReceipt from "./AddReceipt";
//modal imports
import { Button, Modal } from "semantic-ui-react";

const ModalAddReceipt = () => {
  return (
    <Modal
      trigger={<Button className="formModalButton">+</Button>}
      centered={false}
    >
      <Modal.Header>Add Your Receipt Info</Modal.Header>
      <Modal.Content>
        <AddReceipt />
      </Modal.Content>
    </Modal>
  );
};

export default ModalAddReceipt;
