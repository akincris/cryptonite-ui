import styled from "@emotion/styled";
import { useTheme } from "@mui/system";
import { Outlet } from "react-router";
import styles from "../../assets/layout.js";

const Base = () => {
  const theme = useTheme();
  const Container = styled.div((props) => styles(theme).wrapper);
  return (
    <Container>
      <p>base layout</p>
      <Outlet />
    </Container>
  );
};
export default Base;
