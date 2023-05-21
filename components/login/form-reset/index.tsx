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
import Password from "components/custom-input/password";

import useReset from "./hooks/useReset";

// icon
import { UserIcon } from "icons/user";
const FormSchema = Yup.object().shape({
  password: Yup.string().required("Perlu memasukkan password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password tidak sama")
    .required("Perlu memasukkan ulang password"),
});

const FormLogin = () => {
  const { handleReset } = useReset();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: FormSchema,
    onSubmit: async (values) => {
      window.alert(JSON.stringify(values));
      handleReset(values);
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

      <Password
        formik={formik}
        name={"password"}
        label={"Masukkan Password"}
        placeholder={"Masukkan Password"}
      />
      <Password
        formik={formik}
        name={"confirmPassword"}
        label={"Masukkan Ulang Password"}
        placeholder={"Masukkan Password"}
      />

      <Button type={"submit"} w={"full"} mb={"17px"}>
        Reset Password
      </Button>
    </form>
  );
};

export default FormLogin;
