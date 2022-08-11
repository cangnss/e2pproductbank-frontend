import { TextField, MenuItem, FormControlLabel } from "@mui/material"
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
      <TextField
        id="outlined-select-currency"
        select
        size="small"
        value={language}
        defaultValue={language}
        onChange={switchLanguage}
        sx={{
          borderRadius: "15px",
          backgroundColor: "white",
          color: "black",
          width: "85px",
          height: "35px",
        }}
      >
        <MenuItem value="TR">TR</MenuItem>
        <MenuItem value="ENG">ENG</MenuItem>
      </TextField>
      {/* <FormControlLabel
        sx={{ marginLeft: "2rem" }}
        control={<DarkMode sx={{ m: 1 }} defaultChecked />}
      /> */}
    </>
  );
}
