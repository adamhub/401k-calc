import React, { useRef, useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Slider,
  Typography,
  Input,
  Grid,
  Tooltip,
  TextField,
} from "@material-ui/core";
import ValueLabelComponent from "./valueLabelComponent";
import NumberFormat from "react-number-format";
import { useCookies } from "react-cookie";
// import InputComponent from "../components/InputComponent";

// function NumberFormatCustom(props) {
//   const { inputRef, onChange, ...other } = props;

//   return (
//     <NumberFormat
//       {...other}
//       getInputRef={inputRef}
//       onValueChange={(values) => {
//         onChange({
//           target: {
//             name: props.name,
//             value: values.value,
//           },
//         });
//       }}
//       thousandSeparator
//       isNumericString
//     />
//   );
// }

function NumberFormatCustom(props) {
  return <NumberFormat {...props} thousandSeparator isNumericString />;
}

function SalarySlider(props) {
  const [value, setValue] = React.useState(
    Number(useCookies()[0].annualSalary || 100000)
  );

  const anuallyInputRef = useRef();

  const addCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");

  const handleInputChange = (event) => {
    let newValue = removeNonNumeric(event.target.value);

    if (newValue > 1000000) newValue = 1000000;
    if (newValue < 0) newValue = 0;

    setValue(event.target.value === "" ? "" : newValue);

    props.slide(newValue);
  };

  const handleInputChangeHour = (event) => {
    let newValue = removeNonNumeric(event.target.value) * 40 * 52;

    if (newValue > 1000000) newValue = 1000000;
    if (newValue < 0) newValue = 0;

    setValue(event.target.value === "" ? "" : newValue);
    props.slide(newValue);
  };

  const handleInputChangeBiWeek = (event) => {
    let newValue = removeNonNumeric(event.target.value) * 40 * 2;

    if (newValue > 1000000) newValue = 1000000;
    if (newValue < 0) newValue = 0;

    setValue(event.target.value === "" ? "" : newValue);
    props.slide(newValue);
  };

  //   const NumberFormatCustom = (props) => {
  //     const { inputRef, ...other } = props;

  //     return (
  //       <NumberFormat
  //         {...other}
  //         getInputRef={inputRef}
  //         // onValueChange={(values) => console.log(values)}
  //         thousandSeparator
  //         isNumericString
  //         // prefix="$"
  //       />
  //     );
  //   };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Typography gutterBottom>Annual salary</Typography>
          <div style={{ display: "flex" }}>
            <span style={{ marginTop: 8, marginBottom: 4 }}>$</span>
            {/* <TextField
              value={value}
              onChange={handleInputChange}
              margin="dense"
              fullWidth
              name="numberformat"
              id="formatted-numberformat-input"
              style={{ display: "flex" }}
              // InputProps={{
              //     inputComponent: NumberFormatCustom,
              //     tep: 1000,
              //     min: 1,
              //     max: 1000000
              // }}
            /> */}
            <TextField
              value={value}
              onChange={handleInputChange}
              margin="dense"
              fullWidth
              name="numberformat"
              //   id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumberFormatCustom,

                step: 50000,
                min: 0,
                max: 10000000,
              }}
            />

            {/* <NumberFormat
              value={value}
              onChange={handleInputChange}
              thousandSeparator={true}
              className="salary-input"
            /> */}
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography gutterBottom>Hourly salary</Typography>
          <div style={{ display: "flex" }}>
            <span style={{ marginTop: 8, marginBottom: 4 }}>$</span>
            {/* <TextField
              value={parseInt(value / 52 / 40)}
              onChange={handleInputChangeHour}
              margin="dense"
              fullWidth
              name="numberformat"
              id="formatted-numberformat-input"
              style={{ display: "flex" }}
              // InputProps={{
              //     inputComponent: NumberFormatCustom,
              //     tep: 1000,
              //     min: 1,
              //     max: 1000000
              // }}
            /> */}
            <TextField
              value={parseInt(value / 52 / 40)}
              onChange={handleInputChangeHour}
              margin="dense"
              fullWidth
              name="numberformat"
              //   id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumberFormatCustom,

                step: 50000,
                min: 0,
                max: 1000000,
              }}
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography gutterBottom>BiWeek salary</Typography>
          <div style={{ display: "flex" }}>
            <span style={{ marginTop: 8, marginBottom: 4 }}>$</span>
            {/* <TextField
              value={parseInt((value / 52) * 2)}
              onChange={handleInputChangeBiWeek}
              margin="dense"
              fullWidth
              name="numberformat"
              id="formatted-numberformat-input"
              style={{ display: "flex" }}
              // InputProps={{
              //     inputComponent: NumberFormatCustom,
              //     tep: 1000,
              //     min: 1,
              //     max: 1000000
              // }}
            /> */}

            <TextField
              value={parseInt((value / 52) * 2)}
              onChange={handleInputChangeBiWeek}
              margin="dense"
              fullWidth
              name="numberformat"
              id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumberFormatCustom,
                step: 1000,
                min: 0,
                max: 1000000,
              }}
            />
          </div>
        </Grid>
        {/* <Grid item xs={8}>
                        <Slider
                            defaultValue={5}
                            min={0}
                            max={6}
                            valueLabelFormat={(x) => x * 4}
                            onChange={handleSliderChange}
                            value={typeof value === 'number' ? value : 0}
                            scale={(x) => 10 ** x}
                            step={0.01}
                            marks={marks}
                            ValueLabelComponent={ValueLabelComponent}
                            valueLabelFormat={(x) => `$${Math.trunc(x/1000)}K`}
                        />
                    </Grid> */}
      </Grid>
    </div>
  );
}

export default SalarySlider;
