import React from 'react';
import { Row, Col } from 'reactstrap';

import Widget from '../../components/Widget';
import s from './vacancy.module.scss';
import uuid from 'uuid/v4';
import Slot from './Slot';
import {
  CONTAINER_WIDGET_HEIGHT,
  CONTAINER_WIDGET_WIDTH,
} from './ConstValues.js';

class Vacancy extends React.Component {
  constructor(props) {
    super(props);
    var query = props.location.search.split('=');
    this.state = {
      parkinglotname: '공대 4호관 주차장',
      vacancynumber: 4,
      id: query[1],
      stationColumnNumber: 6,
      stationRowNumber: 4,
      slotdatas: [
        {
          slotID: 1,
          camID: 1,
          posX: 0,
          posY: 0,
          isEmpty: true,
          slotType: 'vertical',
        },
        {
          slotID: 2,
          camID: 1,
          posX: 1,
          posY: 0,
          isEmpty: false,
          slotType: 'vertical',
        },
        {
          slotID: 3,
          camID: 1,
          posX: 5,
          posY: 3,
          isEmpty: false,
          slotType: 'vertical',
        },
        {
          slotID: 4,
          camID: 1,
          posX: 3,
          posY: 0,
          isEmpty: false,
          slotType: 'vertical',
        },
        {
          slotID: 5,
          camID: 2,
          posX: 5,
          posY: 0,
          isEmpty: true,
          slotType: 'vertical',
        },
        {
          slotID: 6,
          camID: 3,
          posX: 0,
          posY: 3,
          isEmpty: true,
          slotType: 'vertical',
        },
        {
          slotID: 7,
          camID: 3,
          posX: 1,
          posY: 3,
          isEmpty: false,
          slotType: 'vertical',
        },
        {
          slotID: 8,
          camID: 3,
          posX: 2,
          posY: 3,
          isEmpty: false,
          slotType: 'vertical',
        },
        {
          slotID: 9,
          camID: 3,
          posX: 3,
          posY: 3,
          isEmpty: true,
          slotType: 'vertical',
        },
        {
          slotID: 10,
          camID: 4,
          posX: 4,
          posY: 3,
          isEmpty: false,
          slotType: 'vertical',
        },
      ],
    };
  }

  render() {
    const slotSizeY = CONTAINER_WIDGET_HEIGHT / this.state.stationRowNumber - 2;
    const slotSizeX = slotSizeY * 0.75 - 2;
    const paddingX = slotSizeX / 2;
    const paddingY = slotSizeY / 3;
    const ACTUAL_CONTAINER_WIDTH = CONTAINER_WIDGET_WIDTH - slotSizeX;
    const ACTUAL_CONTAINER_HEIGHT = CONTAINER_WIDGET_HEIGHT - slotSizeY * 0.75;

    return (
      <div className={s.root}>
        <h1 className="page-title">
          <span className="fw-semi-bold">{this.state.parkinglotname}</span>
          <span> 의 빈자리 개수 : </span>
          <span className="fw-semi-bold">{this.state.vacancynumber}</span>
          <span> 개</span>
        </h1>
        <Row>
          <Col>
            <Widget bodyClass={s.mainTableWidget}>
              {this.state.slotdatas.map((s) => (
                <Slot
                  key={uuid()}
                  slotID={s.slotID}
                  camID={s.camID}
                  posX={
                    paddingX +
                    (ACTUAL_CONTAINER_WIDTH / this.state.stationColumnNumber) *
                      s.posX
                  }
                  posY={
                    paddingY +
                    (ACTUAL_CONTAINER_HEIGHT / this.state.stationRowNumber) *
                      s.posY
                  }
                  sizeX={slotSizeX}
                  sizeY={slotSizeY}
                  isEmpty={s.isEmpty}
                  slotType={s.slotType}
                />
              ))}
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Vacancy;
