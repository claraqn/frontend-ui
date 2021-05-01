import React, { Component } from 'react';

class StationItem extends Component {
  render() {
    const { id, name, latitude, longitude } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>
          <p className="mb-0">
            <small>
              위치 :
              <span className="text-muted fw-semi-bold">
                &nbsp; {latitude} , {longitude}
              </span>
            </small>
          </p>
        </td>
      </tr>
    );
  }
}

export default StationItem;
