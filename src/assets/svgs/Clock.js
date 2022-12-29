import React, {Component} from 'react';
import Svg, {Path, Polygon, G} from 'react-native-svg';

const ClockIcon = ({fillColor, size}) => {
  return (
    <Svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 300.988 300.988"
      style="enable-background:new 0 0 300.988 300.988;"
      width={size}
      height={size}>
      <G>
        <G>
          <Path
            d="M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493
                S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001
                s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z"
            fill={fillColor}
          />
          <Polygon
            points="142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883 		"
            fill={fillColor}
          />
        </G>
      </G>
    </Svg>
  );
};

export default ClockIcon;
