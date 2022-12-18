import React, {Component} from 'react';
import Svg, {G, Polygon, Polyline} from 'react-native-svg';

const Star = ({size, fillColor}) => {
  return (
    <Svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 53.867 53.867"
      style="enable-background:new 0 0 53.867 53.867;"
      width={size}
      height={size}>
      <Polygon
        style="fill:#EFCE4A;"
        points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
        10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
        fill={fillColor}
      />
    </Svg>
  );
};

export default Star;
