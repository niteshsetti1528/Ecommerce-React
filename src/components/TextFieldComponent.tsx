import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

export interface TextInputFieldProps {
  label: string;
  isRequired?: boolean;
  name: string;
  type?: string;
  value: string;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldComponent: React.FC<{
  inputProps: TextInputFieldProps;
}> = ({ inputProps }) => {
  const {
    label,
    isRequired = true,
    type = "text",
    name,
    value,
    onChange,
  } = inputProps;
  return (
    <>
      <TextField
        fullWidth
        required={isRequired}
        id={name}
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        variant="standard"
        InputLabelProps={{
          style: {
            color: "grey",
            fontSize: "1rem",
          },
        }}
      />
    </>
  );
};

export default TextFieldComponent;
