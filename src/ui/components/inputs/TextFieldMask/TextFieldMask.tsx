import React from "react";
import ImputMask from "react-input-mask";
import TextField from "ui/components/inputs/TextField/TextField";
import { OutlinedTextFieldProps } from "@material-ui/core";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({mask, value, onChange, ...props}) => {
  return (
      <ImputMask mask={mask} value={value} onChange={onChange}>
          {() => {
              return <TextField {...props}/>
          }}
      </ImputMask>
  );
};

export default TextFieldMask;
