import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const InputPhoneNumberGroup = ({
  placeholder,
  name,
  // value,
  // onChange,
  onBlur,
}) => {
  const [value, setvalue] = useState()
  const handleChange = (e) => setvalue(e)
  return (
    <PhoneInput
      country={"ng"}
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      placeholder={placeholder}
      countryCodeEditable={false}
      containerClass="phone"
      buttonStyle={{
        borderTopLeftRadius: ".5rem",
        borderBottomLeftRadius: ".5rem",
        background: "transparent",
        border: "none",
      }}
      inputStyle={{
        height: "inherit",
        border: "none",
        background: "transparent",
        width: "100%",
        borderTopRightRadius: ".5rem",
        borderBottomRightRadius: ".5rem",
      }}
    />
  );
};

export default InputPhoneNumberGroup;
