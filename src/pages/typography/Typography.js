import React from 'react';
import { Row, Col, Table } from 'reactstrap';
import Widget from '../../components/Widget';
import s from './Typography.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../actions/getAPI';
import StationItem from '../stationlists/StationItem';

class Typography extends React.Component {
  componentDidMount() {
    const { APIActions } = this.props;
    APIActions.getStations();
  }

  render() {
    const { stations, error, loading } = this.props;

    return (
      <div className={s.root}>
        <h1 className="page-title">
          <span className="fw-semi-bold">Favorites</span> Parking Lot{' '}
          <span className="fw-semi-bold">List</span>
          <small className={s.small}> 즐겨찾는 주차장 목록을 확인합니다.</small>
        </h1>
        <Row>
          <Col>
            <Widget
              title={
                <h5>
                  제주대학교 내 주차장 목록
                  <span className="fw-semi-bold"></span>
                </h5>
              }
              bodyClass={s.mainTableWidget}
            >
              <Table striped>
                <thead>
                  <tr className="fs-sm">
                    <th className="hidden-sm-down">#</th>
                    <th>Picture</th>
                    <th>Name</th>
                    <th className="hidden-sm-down">Location</th>
                    <th className="hidden-sm-down">Number of parking spaces</th>
                    <th className="hidden-sm-down">Favorite</th>
                    <th className="hidden-sm-down">
                      Check the number of vacancy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {stations.map((station) =>
                    // station.favorite === '등록'
                    station.id === 1 ? (
                      <StationItem
                        key={station.id}
                        {...station}
                        // onClick={console.log(station.id)}
                      ></StationItem>
                    ) : (
                      ''
                    )
                  )}
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    stations: state.apis.data,
    loading: state.apis.pending,
    error: state.apis.error,
  }),
  (dispatch) => ({
    APIActions: bindActionCreators(apiActions, dispatch),
  })
)(Typography);
