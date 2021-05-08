import React, { Component } from 'react';
import s from './vacancy.module.scss';

class Slot extends Component {
  render() {
    return (
      <div
        className={
          `${s.slot}` +
          (this.props.slotType === 'horizontal'
            ? ` ${s.horizontal}`
            : this.props.slotType === 'vertical'
            ? ` ${s.vertical}`
            : this.props.slotType === 'leftTilt'
            ? ` ${s.leftTilt}`
            : this.props.slotType === 'rightTilt'
            ? ` ${s.rightTilt}`
            : '') +
          (this.props.isEmpty ? ` ${s.isEmpty}` : '')
        }
        style={{
          left: this.props.posX,
          top: this.props.posY,
          width: this.props.sizeX,
          height: this.props.sizeY,
        }}
      ></div>
    );
  }
}
export default Slot;
