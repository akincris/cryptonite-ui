import * as React from "react";
import { useAppTranslation } from "../app/hooks";
import { getLSValue } from "../app/localStorage";

export default function Tooltip(props) {
  const { t } = useAppTranslation();
  const { width, height, message, margin, country, type } = props;

  const tooltipType = () => {
    if (type === 1) {
      return (
        <div
          className="wTrans"
          style={{
            display: "flex",
            color: getLSValue("theme") === "light" ? "black" : "white",
            width: "fit-content",
            margin: margin,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: "180px",
              height: "20px",
              margin: "0 0 0 20px",
              fontWeight: 600,
              fontSize: "13px",
            }}
          >
            <span style={{ fontWeight: 700, textTransform: "uppercase" }}>
              {country}
            </span>{" "}
            <br />
            {message}
          </div>
          <div
            style={{
              width: `${width}px`,
              height: "2px",
              backgroundColor: "#d6d6cd",
            }}
          ></div>
          <div
            style={{
              height: `${height}px`,
              width: "2px",
              backgroundColor: "#d6d6cd",
            }}
          ></div>
        </div>
      );
    } else if (type === 2) {
      return (
        <div
          className="wTrans"
          style={{
            display: "flex",
            color: getLSValue("theme") === "light" ? "black" : "white",
            width: "fit-content",
            margin: margin,
            position: "absolute",
          }}
        >
          <div
            style={{
              height: `${height}px`,
              width: "2px",
              backgroundColor: "#d6d6cd",
            }}
          ></div>
          <div
            style={{
              width: `${width}px`,
              height: "2px",
              backgroundColor: "#d6d6cd",
            }}
          ></div>
          <div
            style={{
              width: "180px",
              height: "20px",
              margin: "0 0 0 20px",
              fontWeight: 600,
              fontSize: "13px",
            }}
          >
            <span style={{ fontWeight: 700, textTransform: "uppercase" }}>
              {country}
            </span>
            <br />
            {message}
          </div>
        </div>
      );
    } else
      return (
        <div
          className="wTrans"
          style={{
            display: "flex",
            color: getLSValue("theme") === "light" ? "black" : "white",
            width: "fit-content",
            margin: margin,
            position: "absolute",
          }}
        >
          <div
            style={{
              height: `${height}px`,
              width: "2px",
              backgroundColor: "#d6d6cd",
            }}
          ></div>
          <div
            style={{
              width: `${width}px`,
              height: "2px",
              backgroundColor: "#d6d6cd",
              marginTop: `${height - 2}px`,
            }}
          ></div>
          <div
            style={{
              width: "180px",
              height: "20px",
              margin: "0 0 0 20px",
              fontWeight: 600,
              fontSize: "13px",
            }}
          >
            <span style={{ fontWeight: 700, textTransform: "uppercase" }}>
              {country}
            </span>
            <br />
            {message}
          </div>
        </div>
      );
  };
  return tooltipType();
}
