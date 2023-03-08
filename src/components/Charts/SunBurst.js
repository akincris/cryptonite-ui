import { Button, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Sunburst } from "react-vis";
import { useAppTranslation } from "../../app/hooks";

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
  const { t } = useAppTranslation();
  const colors = [
    theme.palette.primary.main,
    theme.palette.primary.light,
    theme.palette.secondary.main,
    theme.palette.secondary.light,
  ];
  useEffect(() => {
    setTimeout(() => {
      setData(updateData());
    }, 4500);
  }, [data]);

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="animated-sunburst-example-wrapper">
      <Sunburst
        animation={{ damping: 100, stiffness: 100 }}
        data={data}
        colorType={"category"}
        colorRange={colors}
        style={{ stroke: "#fff" }}
        sx={{
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
        height={matches ? 200 : 310}
        width={matches ? 220 : 330}
      />
    </div>
  );
};
export default AnimatedSunburst;
