import { MenuItem, Select } from "@mui/material";
import i18next from "i18next";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { changeLng } from "../../reducers/session";
import { languages } from "../../translations/i18n";

const LanguageButton = () => {
  const dispatch = useAppDispatch();
  const [language, setLanguage] = useState(i18next.language);
  const handleChange = (lng) => {
    dispatch(changeLng(lng));
    setLanguage(lng);
  };
  return (
    <Select
      sx={{
        margin: "2px",
        maxHeight: "40px",
      }}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={language}
      onChange={(e) => handleChange(e.target.value)}
    >
      {languages.map((language, index) => {
        return (
          <MenuItem key={index} value={language}>
            {language}
          </MenuItem>
        );
      })}
    </Select>
  );
};
export default LanguageButton;
