import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import NextLink from "next/link";

import useLogin from "./hooks/useLogin";
import ModalButton from "./modal";
import Password from "components/custom-input/password";

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const FormLogin = () => {
  const { procedLogin } = useLogin();

  // useEffect(() => {
  //   getDialCodes();
  // }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember_me: false,
    },
    validationSchema: FormSchema,
    onSubmit: async (values) => {
      window.alert(JSON.stringify(values));
      procedLogin();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl
        isInvalid={formik.touched.email && Boolean(formik.errors.email)}
        mb={"24px"}
      >
        <FormLabel>Alamat Email</FormLabel>
        <Input
          name={"email"}
          type={"email"}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Masukkan Alamat Email"
        />
        {formik.touched.email && formik.errors.email && (
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        )}
      </FormControl>
      <Password
        formik={formik}
        name={"password"}
        label={"Password"}
        placeholder={"Masukkan Password"}
      />

      <Flex justify={"space-between"} mb={"24px"}>
        <Checkbox>Ingat Saya</Checkbox>
        <Link as={NextLink} href="/login/forget-password">
          Lupa Password ?
        </Link>
      </Flex>
      <ModalButton />
    </form>
  );
};

export default FormLogin;
