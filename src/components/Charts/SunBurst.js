import { Button, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Sunburst } from "react-vis";

function randomLeaf() {
  return {
    size: Math.random() * 1000,
    color: Math.random(),
  };
}
function updateData() {
  const totalLeaves = Math.random() * 20;
  const leaves = [];
  for (let i = 0; i < totalLeaves; i++) {
    const leaf = randomLeaf();
    if (Math.random() > 0.8) {
      leaf.children = [...new Array(3)].map(() => randomLeaf());
    }
    leaves.push(leaf);
  }
  return {
    title: "",
    color: 1,
    children: leaves,
  };
}

const AnimatedSunburst = () => {
  const [data, setData] = useState(updateData());
  const theme = useTheme();
  const colors = [
    theme.palette.primary.main,
    theme.palette.primary.lighter,
    theme.palette.secondary.main,
    theme.palette.secondary.lighter,
  ];

  return (
    <div className="animated-sunburst-example-wrapper">
      <Button color="secondary" onClick={() => setData(updateData())} buttonContent={"UPDATE"}>
        Update Data
      </Button>
      <Sunburst
        animation={{ damping: 90, stiffness: 200 }}
        data={data}
        colorType={"category"}
        colorRange={colors}
        style={{ stroke: "#fff" }}
        height={300}
        width={350}
      />
    </div>
  );
};
export default AnimatedSunburst;
