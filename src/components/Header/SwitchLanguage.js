import { TextField, MenuItem, FormControlLabel, Select } from "@mui/material"
// import DarkMode from './DarkMode'
import { useSite } from "../../context"

export default function SwitchLanguage() {
    const { language, dispatch } = useSite()

    const switchLanguage = () => {
        dispatch({
            type:"TOGGLE_LANGUAGE"
        })
    }
  return (
    <>
      <Select
        value={language}
        defaultValue={language}
        onChange={switchLanguage}
        sx={{
          border:"none",
          borderRadius: "15px",
          backgroundColor: "#fff",
          color: "black",
          width: "85px",
          height: "35px",
        }}
      >
        <MenuItem value="tr">Tr</MenuItem>
        <MenuItem value="eng">Eng</MenuItem>
      </Select>
      {/* <FormControlLabel
        sx={{ marginLeft: "2rem" }}
        control={<DarkMode sx={{ m: 1 }} defaultChecked />}
      /> */}
    </>
  );
}
