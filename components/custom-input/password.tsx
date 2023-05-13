import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const InputPassword = ({ formik, name, label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl
      isInvalid={formik.touched[name] && Boolean(formik.errors[name])}
      mb={"24px"}
    >
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          name={name}
          type={showPassword ? "text" : "password"}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          placeholder={placeholder}
          isInvalid={Boolean(formik.touched[name] && formik.errors[name])}
          onChange={formik.handleChange}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {formik.touched[name] && formik.errors[name] && (
        <FormErrorMessage>{formik.errors[name]}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputPassword;
