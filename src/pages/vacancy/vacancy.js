import React from 'react';
import { Row, Col } from 'reactstrap';

import Widget from '../../components/Widget';
import s from './vacancy.module.scss';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../actions/getAPI';
import Slot from './Slot';
import {
  CONTAINER_WIDGET_HEIGHT,
  CONTAINER_WIDGET_WIDTH,
} from './ConstValues.js';

class Vacancy extends React.Component {
  componentDidMount() {
    const query = this.props.location.search.split('=');
    const stationID = query[1];

    const { APIActions } = this.props;
    APIActions.getStationData(stationID);
  }

  render() {
    const { stationData, error, loading } = this.props;

    const parkinglotname =
      stationData[0] === undefined ||
      stationData[0].parkinglotname === undefined
        ? ''
        : stationData[0].parkinglotname;
    const vacancynumber =
      stationData[0] === undefined || stationData[0].vacancynumber === undefined
        ? 0
        : stationData[0].vacancynumber;
    const stationColumnNumber =
      stationData[0] === undefined ||
      stationData[0].stationColumnNumber === undefined
        ? 0
        : stationData[0].stationColumnNumber;
    const stationRowNumber =
      stationData[0] === undefined ||
      stationData[0].stationRowNumber === undefined
        ? 0
        : stationData[0].stationRowNumber;
    const stationBG =
      stationData[0] === undefined || stationData[0].stationBG === undefined
        ? 0
        : stationData[0].stationBG;
    const slotdatas =
      stationData[0] === undefined || stationData[0].slots === undefined
        ? []
        : stationData[0].slots;

    const slotSizeY = CONTAINER_WIDGET_HEIGHT / stationRowNumber - 2;
    const slotSizeX = slotSizeY * 0.75 - 2;
    const paddingX = slotSizeX * 0.5;
    const paddingY = slotSizeY * 0.25;
    const ACTUAL_CONTAINER_WIDTH = CONTAINER_WIDGET_WIDTH - slotSizeX;
    const ACTUAL_CONTAINER_HEIGHT = CONTAINER_WIDGET_HEIGHT - slotSizeY * 0.75;

    return (
      <div className={s.root}>
        <h1 className="page-title">
          <span className="fw-semi-bold">{parkinglotname}</span>
          <span> 의 빈자리 개수 : </span>
          <span className="fw-semi-bold">{vacancynumber}</span>
          <span> 개</span>
        </h1>
        <Row>
          <Col>
            <Widget
              style={{
                backgroundImage: `url(${stationBG})`,
                width: `${CONTAINER_WIDGET_WIDTH}px`,
                height: `${CONTAINER_WIDGET_HEIGHT}px`,
              }}
              bodyClass={s.mainTableWidget}
            >
              {slotdatas.map((s) => (
                <Slot
                  key={`${s.slotID}${uuid()}${uuid()}`}
                  slotID={s.slotID}
                  camID={s.camID}
                  posX={
                    paddingX +
                    (ACTUAL_CONTAINER_WIDTH / stationColumnNumber) * s.posX
                  }
                  posY={
                    paddingY +
                    (ACTUAL_CONTAINER_HEIGHT / stationRowNumber) * s.posY
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

export default connect(
  (state) => ({
    stationData: state.apis.data,
    loading: state.apis.pending,
    error: state.apis.error,
  }),
  (dispatch) => ({
    APIActions: bindActionCreators(apiActions, dispatch),
  }),
)(Vacancy);
