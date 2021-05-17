import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import s from './vacancy.module.scss';

class PhotoPopup extends Component {
  render() {
    return (
      <Modal {...this.props} className="modal-xl">
        <ModalHeader toggle={this.props.toggle} />
        <ModalBody>
          <Row>
            <Col md="12">
              <div className="d-flex justify-content-center">
                <img
                  src={this.props.currentPhoto}
                  alt="Parkinglot slot"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    );
  }
}
export default PhotoPopup;
