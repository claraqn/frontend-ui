import React from "react";
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
} from "reactstrap";

import Widget from "../../components/Widget";
import s from "./Typography.module.scss";

class Static extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
        {
          id: 1,
          picture: require("../../assets/tables/1.png"), // eslint-disable-line global-require
          description: "공대4호관 주차장",
          info: {
            type: "공대4호관 2층",
            dimensions: "지도보기",
          },
          label: {
            colorClass: "primary",
            text: "Accessible",
          },
          number: "54",
          favorite: "등록",
          progress: {
            percent: 60,
            colorClass: "warning",
          },
        },
        {
          id: 4,
          picture: require("../../assets/tables/4.png"), // eslint-disable-line global-require
          description: "체육관 주차장",
          info: {
            type: "체육관 뒤 1층",
            dimensions: "지도보기",
          },
          number: "45",
          favorite: "미등록",
          progress: {
            percent: 40,
            colorClass: "primary",
          },
        },
        {
          id: 5,
          picture: require("../../assets/tables/5.png"), // eslint-disable-line global-require
          description: "정보통신원 주차장",
          info: {
            type: "정보통신원 옆 1층",
            dimensions: "지도보기",
          },
          number: "17",
          favorite: "등록",
          progress: {
            percent: 66,
            colorClass: "warning",
          },
        },
      ],
    };

    
  }

  parseDate(date) {
    this.dateSet = date.toDateString().split(" ");

    return `${date.toLocaleString("en-us", { month: "long" })} ${
      this.dateSet[2]
    }, ${this.dateSet[3]}`;
  }

 

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
        <span className="fw-semi-bold">Favorites</span> Parking Lot <span className="fw-semi-bold">List</span>
          <small className={s.small}> 즐겨찾는 주차장 목록을 확인합니다.</small>
        </h1>
        <Row>
          <Col>
            <Widget
              title={
                <h5>
                  제주대학교 내 주차장 목록<span className="fw-semi-bold"></span>
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
                    <th className="hidden-sm-down">Check the number of vacancy</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableStyles.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>
                        <img
                          className="img-rounded"
                          src={row.picture}
                          alt=""
                          height="50"
                        />
                      </td>
                      <td>
                        {row.description}
                        {row.label && (
                          <div>
                            <Badge color={row.label.colorClass}>
                              {row.label.text}
                            </Badge>
                          </div>
                        )}
                      </td>
                      <td>
                        <p className="mb-0">
                          <small>
                            위치 :
                            <span className="text-muted fw-semi-bold">
                              &nbsp; {row.info.type}
                            </span>
                          </small>
                        </p>
                        <p>
                          <small>
                            지도로 위치 확인 :
                            <span className="text-muted fw-semi-bold">
                              &nbsp; {row.info.dimensions}
                            </span>
                          </small>
                        </p>
                      </td>
                      <td>주차장 자리수 : 총 <span className="text-muted fw-semi-bold">{row.number}</span> 개</td>
                      <td className="text-muted">{row.favorite}</td>
                      <td className="width-150">
                        <Progress
                          color={row.progress.colorClass}
                          value={row.progress.percent}
                          className="progress-sm mb-xs"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Static;
