import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { useAppTranslation } from "../app/hooks";
import Plx from "react-plx";
import Tooltip from "../components/CustomTooltip";

const WorldTopPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useAppTranslation();

  return (
    <>
      <div style={{ height: "200vh" }}>
        <Plx
          parallaxData={[
            {
              start: -0,
              end: 900,
              properties: [
                {
                  startValue: 0.65,
                  endValue: 1.25,
                  property: "scale",
                },
              ],
            },
          ]}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
          }}
        >
          <img
            style={{ width: "100%", height: "120vh" }}
            src={require("../assets/images/map-306920_1280.webp")}
            alt="background"
          />
        </Plx>
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 200,
            paddingTop: "56%",
            height: "400vh",
            width: "100%",
          }}
        ></div>
      </div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            properties: [
              {
                startValue: -1.2,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "0vw",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            height: "100vh",
            position: "absolute",
            backgroundColor: "rgba(255, 0, 0, 0.20)",
          }}
        >
          <Tooltip
            width={40}
            height={120}
            type={1}
            margin={"15vh 0 0 0"}
            country="Africa"
            message={
              "hello there, here's info regarding some of the most famous crypto values out there"
            }
          />
         
            <Tooltip
            width={45}
            height={160}
            type={2}
            margin={"52vh 0 0 55vh"}
            country="Chicago"
            message={
              "hello t1ere, here's info regarding some of the most famous crypto values out there"
            }
          />
          <Tooltip
            width={160}
            height={150}
            type={1}
            margin={"20vh 0 0 70vh"}
            country="Russia"
            message={
              "hello there, here's info regarding some of the most famous crypto values out there"
            }
          />
          <Tooltip
            width={150}
            type={3}
            height={50}
            margin={"70vh 10vh 0 100vh"}
            country="Poland"
            message={
              "hello there, here's info regarding some of the most famous crypto values out there"
            }
          />
          <Tooltip
            width={180}
            type={3}
            height={40}
            margin={"55vh 0 0 140vh"}
            country={"Avustralia"}
            message={
              "hello there, here's info regarding some of the most famous crypto values out there"
            }
          />
          <Tooltip
            width={90}
            type={2}
            height={150}
            margin={"20vh 0 0 150vh"}
            country={"Danimarka"}
            message={
              "regarding some of the most famous crypto values out there"
            }
          />
        </div>
      </Plx>
      <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      ></div>
    </>
  );
};
export default WorldTopPage;
