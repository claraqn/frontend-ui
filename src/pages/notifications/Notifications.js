import React from 'react';
import Widget from '../../components/Widget';

import s from './Notifications.module.scss';

import howToUse from "../../assets/howToUse/main.PNG";

class Notifications extends React.Component {

  render() {
    return (
      <div>
        <h1 className="page-title">
          How to <span className="fw-semi-bold"> use</span> our Service
          <small className={s.small}> 서비스 사용법에 대한 설명입니다.</small>
        </h1>
        <Widget
          title={<h4>메인 화면 사이드바<small className="text-muted"> 원하는 서비스 선택</small></h4>}
          collapse close
        >
          <img className={s.MapContainer} src={howToUse} alt="..."
          />
        </Widget>
      </div>);
  }

}

export default Notifications;
