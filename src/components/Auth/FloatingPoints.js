import React, { useEffect, useState } from "react";

import { XYPlot, MarkSeries } from "react-vis";

const FloatingPoints = (props) => {
  const [state, setState] = useState({
    data: generateData(),
    modeIndex: 0,
  });
  function generateData() {
    return [...new Array(10)].map((row) => ({
      x: Math.random() * 5,
      y: Math.random() * 10,
    }));
  }
  useEffect(() => {
    setTimeout(() => {
      setState({ ...state, data: generateData() });
    }, 4500);
  }, [state]);

  return (
    <>
      <div className="centered-and-flexed">
        <XYPlot width={props.width} height={props.height} >
          <MarkSeries
            color={props.color}
            animation={{ damping: 10, stiffness: 10 }}
            data={state.data}
          />
        </XYPlot>
      </div>
    </>
  );
};

export default FloatingPoints;
