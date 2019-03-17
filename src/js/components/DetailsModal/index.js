import React from "react";
import { Modal, Button, Loader } from "semantic-ui-react";

const DetailsModal = ({ data, showModal, closeModal }) => (
    <Modal open={showModal} onClose={closeModal}>
        <Modal.Header>{data ? `${data.id} ${data.name}` : "Details"}</Modal.Header>
        <Modal.Content>
            <p>{data ? data.details : null}</p>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={closeModal} labelPosition="right">
                Ok
            </Button>
        </Modal.Actions>
    </Modal>
);

export default DetailsModal;
