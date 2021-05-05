import React, { Component } from 'react';
import { Progress, Button } from 'reactstrap';
import LinksGroup from '../../components/Sidebar/LinksGroup/LinksGroup';
import s from './StationList.module.scss';
class StationItem extends Component {
  render() {
    const {
      id,
      thumbnail,
      name,
      locationDesc,
      latitude,
      longitude,
      overallSpaces,
      vacancy,
    } = this.props;

    return (
      <tr key={id}>
        <td>{id}</td>
        <td>
          <img className={s.image} src={thumbnail} alt="" height="50" />
        </td>
        <td>
          {name}
          {/* {label && (
          <div>
            <Badge color={label.colorClass}>
              {label.text}
            </Badge>
          </div>
        )} */}
        </td>
        <td>
          <p className="mb-0">
            <small>
              위치 :
              <span className="text-muted fw-semi-bold">
                &nbsp; {locationDesc}
              </span>
            </small>
          </p>
          <p>
            <small>
              지도로 위치 확인 :
              <span className="text-muted fw-semi-bold">
                {/* TODO:Fix */}
                &nbsp; {'지도보기'}
              </span>
            </small>
          </p>
        </td>
        <td>
          주차장 자리수 : 총 {/* 주차장 빈자리수 : 총  */}
          <span className="text-muted fw-semi-bold">{vacancy}</span> 개
        </td>
        {/* TODO:Fix */}
        <td className="text-muted">{'미등록'}</td>
        <td className="width-150">
          {/* TODO:Fix */}
          <Progress
            color={'primary'}
            value={(1 - vacancy / overallSpaces) * 100}
            className="progress-sm mb-xs"
          />
          <Button
            outline
            className={s.button}
            // href={`/app/vacancy?id=${id}`}
            // onClick={this.handleClick}
          >
            <LinksGroup
              link={`/app/vacancy?id=${id}`}
              // link={'/app/vacancy' + ' ' + row.description}
              header="주차장 빈자리 확인"
              className={s.link}
              //index={name}
            ></LinksGroup>
          </Button>
        </td>
      </tr>
    );
  }
}

export default StationItem;
