import React from "react";
import { Row, Col, Button } from "reactstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uuid from "uuid/v4";
import Widget from "../../components/Widget";
import s from "./Notifications.module.scss";

class Notifications extends React.Component {
  state = {
    options: {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    },
  };

  componentDidMount() {
    toast.success("Thanks for checking out Messenger!", {
      position: "bottom-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  }

  toggleLocation = (location) => {
    this.setState((prevState) => ({
      options: {
        ...prevState.options,
        position: location,
      },
    }));
  };


  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
          Messages - <span className="fw-semi-bold">Notifications</span>
        </h1>

        <Widget title={<h6> Messenger </h6>} close collapse settings>
          <Row>
            <Col lg="4" xs="12">
              <h5 className="m-t-1">Layout options</h5>
              <p>
                There are few position options available for notifications. You
                can click any of them to change notifications position:
              </p>
              <div className="location-selector">
                <div
                  className="bit top left"
                  onClick={() => {
                    this.toggleLocation("top-left");
                  }}
                />
                <div
                  className="bit top right"
                  onClick={() => {
                    this.toggleLocation("top-right");
                  }}
                />
                <div
                  className="bit top"
                  onClick={() => {
                    this.toggleLocation("top-center");
                  }}
                />
                <div
                  className="bit bottom left"
                  onClick={() => {
                    this.toggleLocation("bottom-left");
                  }}
                />
                <div
                  className="bit bottom right"
                  onClick={() => {
                    this.toggleLocation("bottom-right");
                  }}
                />
                <div
                  className="bit bottom"
                  onClick={() => {
                    this.toggleLocation("bottom-center");
                  }}
                />
              </div>
            </Col>
          </Row>
        </Widget>
      </div>
    );
  }
}

export default Notifications;
