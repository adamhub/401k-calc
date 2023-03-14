// import React from "react";
// import NumberFormat from "react-number-format";
// import TextField from "@material-ui/core/TextField";

// const InputComponent = (props) => {
//   const { inputRef, onChange, ...other } = props;

//   const NumberFormatCustom = (props) => {
//     // eslint-disable-next-line react/jsx-props-no-spreading
//     return (
//       <NumberFormat
//         {...other}
//         getInputRef={inputRef}
//         onValueChange={(values) => {
//           onChange({
//             target: {
//               name: props.name,
//               value: values.value,
//             },
//           });
//         }}
//         thousandSeparator
//         isNumericString
//       />
//     );
//   };

//   return (
//     <TextField
//       value={value}
//       onChange={handleInputChange}
//       margin="dense"
//       fullWidth
//       name="numberformat"
//       //   id="formatted-numberformat-input"
//       InputProps={{
//         inputComponent: NumberFormatCustom,
//         step: 50000,
//         min: 0,
//         max: 10000000,
//       }}
//     />
//   );
// };

// export default InputComponent;
