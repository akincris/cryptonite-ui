import { Outlet } from "react-router";

const Base = () => {
  return (
    <>
      <p>base layout</p>
      <Outlet />
    </>
  );
};
export default Base;
