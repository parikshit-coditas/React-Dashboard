// InfoCard.js
import React from 'react';
import './InfoCard.css';

const InfoCard = ({ data, colors, label3Color }) => {
  const circularViewColor = colors || '#3c15bd';

  return (
    <div className="info-card">
      <div className="circular-view" style={{ backgroundColor: circularViewColor }}>
        <span>Icon</span>
      </div>
      <div className="labels">
        <div className="label label1">{data[0]}</div>
        <div className="label label2">{data[1]}</div>
        <div className="label label3" style={{ '--label3-color': label3Color }}>{data[2]}</div>
      </div>
    </div>
  );
};

export default InfoCard;
