// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, { useState } from "react";
import { curveCatmullRom } from "d3-shape";

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";
import { useMediaQuery, useTheme } from "@mui/material";

export default function LineGraphic(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [y1, sety1] = useState(9);
  const [y2, sety2] = useState(23);
  const [y3, sety3] = useState(43);

  setInterval(function () {
    sety1(Math.random() * 30);
    sety2(Math.random() * 30);
    sety3(Math.random() * 30);
  }, 5000);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <XYPlot
        style={{ fill: "none", stroke: theme.palette.secondary.main }}
        width={matches ? 200 : 300}
        height={matches ? 200 : 300}
      >
        <HorizontalGridLines style={{ stroke: theme.palette.secondary.main }} />
        <VerticalGridLines style={{ stroke: theme.palette.secondary.main }} />
        <XAxis
          title="Market Cap"
          style={{
            line: { stroke: theme.palette.secondary.main },
            ticks: { stroke: theme.palette.secondary.main },
            text: {
              stroke: "none",
              fill: theme.palette.secondary.main,
              fontWeight: 600,
            },
          }}
        />
        <YAxis title="Price" />
        <LineSeries
          className="first-series"
          animation={{ stiffness: 180, damping: 60 }}
          data={[
            { x: 1, y: y1 },
            { x: 2, y: y2 },
            { x: 3, y: 5 },
            { x: 4, y: y2 },
          ]}
          style={{
            strokeLinejoin: "round",
            strokeWidth: 4,
          }}
        />
        <LineSeries
          className="second-series"
          data={null}
          animation={{ stiffness: 70, damping: 20 }}
        />
        <LineSeries
          className="third-series"
          animation={{ stiffness: 70, damping: 20 }}
          curve={"curveMonotoneX"}
          data={[
            { x: 1, y: y1 },
            { x: 2, y: 4 },
            { x: 3, y: y3 },
            { x: 4, y: 15 },
          ]}
          strokeDasharray="7, 3"
        />
        <LineSeries
          className="fourth-series"
          curve={curveCatmullRom.alpha(0.5)}
          data={[
            { x: 1, y: 7 },
            { x: 2, y: y2 },
            { x: 3, y: 9 },
            { x: 4, y: y3 },
          ]}
        />
      </XYPlot>
      <div style={{ display: "flex", padding: "2rem" }}>
        <span
          style={{ fontFamily: "monospace", fontWeight: 700, fontSize: "18px" }}
        >
          ETHEREUM
        </span>
        <img
          height={100}
          width={100}
          src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"
        />
      </div>
    </div>
  );
}
