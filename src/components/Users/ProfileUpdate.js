import { Grid, Paper, Button } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const countries = [
  {
    value: "Turkey",
    label: "Turkey",
  },
  {
    value: "England",
    label: "England",
  },
  {
    value: "Germany",
    label: "Germany",
  },
  {
    value: "Japan",
    label: "japan",
  },
];

const ProfileUpdate = () => {
  const [values, setValues] = React.useState({
    textmask: "(100) 000-0000",
    numberformat: "1320",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const [country, setCountry] = React.useState("Turkey");

  const handleChange1 = (event) => {
    setCountry(event.target.value);
  };
  const [value, setValue] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  return (
    <div style={{ marginBottom: "10rem", marginTop: "10rem" }}>
      <Paper sx={{ width: "50%", margin: "auto", border:"2px solid #283991" , borderRadius:"2rem"}}>
        
        <Grid
          container
          spacing={4}
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
            <Grid item>
            <h1 style={{color: "black"}}>Profile Update</h1>
            </Grid>

          <Grid item>
            <TextField
              id="filled-basic"
              label="First Name"
              variant="standard"
              sx={{ width:"15rem"}}
            />
          </Grid>
          <Grid item>
            <TextField id="filled-basic" label="Last Name" variant="standard" sx={{ width:"15rem"}}/>
          </Grid>
          <Grid item>
            <TextField id="filled-basic" label="E-mail" variant="standard"  sx={{ width:"15rem"}}/>
          </Grid>
          <Grid item>
            <TextField id="filled-basic" label="User Name" variant="standard" sx={{ width:"15rem"}} />
          </Grid>
          <Grid
            item
            sx={{
              "& > :not(style)": {
                m: 1,
              },
            }}
          >
            <FormControl variant="standard"  sx={{ width:"15rem"}}>
              <InputLabel htmlFor="formatted-text-mask-input">
                Phone number
              </InputLabel>
              <Input
                value={values.textmask}
                onChange={handleChange}
                name="textmask"
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              id="standard-select-currency-native"
              select
              label="Select Country"
              sx={{ width:"15rem"}}
              value={country}
              onChange={handleChange1}
              SelectProps={{
                native: true,
              }}
              variant="standard"
            >
              {countries.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <FormControl variant="standard"  sx={{ width:"15rem"}}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input type="password" />
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{ marginBottom: "1rem", marginTop:"1rem"}}>
              Update
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProfileUpdate;
