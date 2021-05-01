import React from 'react';
import {
  Row,
  Col,
  Table,
  Progress,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Badge,
} from 'reactstrap';

import Widget from '../../components/Widget';
import s from './vacancy.module.scss';

class Vacancy extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
          <span className="fw-semi-bold">Vacancy</span> Parking Lot{' '}
          <span className="fw-semi-bold"></span>
          <small className={s.small}> 빈자리 주차장 보기</small>
        </h1>
        <Row>
          <Col>
            <Widget
              title={
                <h5>
                  제주대학교 공대4호관 주차장
                  <span className="fw-semi-bold"></span>
                </h5>
              }
              bodyClass={s.mainTableWidget}
            >
              <Table striped>
                <thead>
                  <tr className="fs-sm">
                    <th className="hidden-sm-down">1</th>
                    <th>2</th>
                  </tr>
                </thead>
              </Table>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Vacancy;
