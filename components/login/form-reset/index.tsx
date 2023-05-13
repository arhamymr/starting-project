import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  Flex,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import * as Yup from "yup";

import useLogin from "./hooks/useLogin";

// icon
import { UserIcon } from "icons/user";
const FormSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const FormLogin = () => {
  const { setShowPassword, showPassword } = useLogin();

  // useEffect(() => {
  //   getDialCodes();
  // }, []);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: FormSchema,
    onSubmit: async (values) => {
      window.alert(JSON.stringify(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex gap={4} mb={"24px"} align={"center"}>
        <Avatar size={"sm"} bg="brand.100" icon={<UserIcon />} />
        <Box>
          <Text fontWeight={600}>Muhammad Yusuf</Text>
          <Text fontSize={12} color={"gray.500"}>
            Owner Kioser Cell
          </Text>
        </Box>
      </Flex>
      <FormControl
        isInvalid={formik.touched.password && Boolean(formik.errors.password)}
        mb={"24px"}
      >
        <FormLabel>Masukkan Password</FormLabel>
        <InputGroup>
          <Input
            name={"password"}
            type={showPassword ? "text" : "password"}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Masukkan Password"
            isInvalid={Boolean(
              formik.touched.password && formik.errors.password
            )}
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

        {formik.touched.password && formik.errors.password && (
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl
        isInvalid={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        mb={"24px"}
      >
        <FormLabel>Masukkan Ulang Password</FormLabel>
        <InputGroup>
          <Input
            name={"confirmPassword"}
            type={showPassword ? "text" : "password"}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            placeholder="Masukkan Password"
            isInvalid={Boolean(
              formik.touched.confirmPassword && formik.errors.confirmPassword
            )}
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

        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
        )}
      </FormControl>

      <Button type={"submit"} w={"full"} mb={"17px"}>
        Reset Password
      </Button>
    </form>
  );
};

export default FormLogin;
