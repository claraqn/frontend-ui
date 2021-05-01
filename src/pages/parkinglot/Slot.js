import React, { Component } from 'react';
import s from './Parkinglot.module.scss';

class Slot extends Component {
  state = {
    isEmpty: this.props.isEmpty,
  };

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
          (this.state.isEmpty ? ` ${s.isEmpty}` : '')
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
