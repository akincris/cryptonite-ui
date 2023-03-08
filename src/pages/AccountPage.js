import { useTheme } from "@mui/system";
import MainFeaturedPost from "../components/AccountPage/MainFeature";

const AccountPage = () => {
  const theme = useTheme();
  const account = {
    name: "Akin Cristina",
    location: "Moldova, Kishinev",
    link: "akin.cristina@linkedln.com",
  };

  return (
    <>
      <MainFeaturedPost
        accountData={account}
        avatarColor={theme.palette.primary.light}
        color={
          theme.palette.mode === "light"
            ? theme.palette.secondary.light
            : "#399228"
        }
      />
    </>
  );
};

export default AccountPage;
