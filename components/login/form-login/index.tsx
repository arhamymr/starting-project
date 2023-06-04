import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Checkbox,
  Button,
  Link,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import NextLink from "next/link";

import { useLogin } from "./hooks/useLogin";
import ModalLogin from "./modal";
import Password from "components/custom-input/password";
import { useRouter } from "next/router";

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const FormLogin = () => {
  const { isLoading, handleLogin, checkFirstTimeAccess } = useLogin();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember_me: false,
    },
    validationSchema: FormSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);

      try {
        const res = await handleLogin(formData);

        if (res.status) {
          if (checkFirstTimeAccess()) {
            onOpen();
          } else {
            router.push("/login?todashboard=yes");
          }
        }
      } catch (error) {
        window.alert("cause: " + error.message);
      }
    },
  });

  const {
    handleSubmit,
    dirty,
    errors,
    touched,
    handleBlur,
    values,
    handleChange,
    isValid,
  } = formik;

  return (
    <Box>
      <ModalLogin isOpen={isOpen} onClose={onClose} />
      <form onSubmit={handleSubmit}>
        <FormControl
          isInvalid={touched.email && Boolean(errors.email)}
          mb={"24px"}
        >
          <FormLabel>Alamat Email</FormLabel>
          <Input
            name={"email"}
            type={"email"}
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
            placeholder="Masukkan Alamat Email"
          />
          {touched.email && errors.email && (
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          )}
        </FormControl>
        <Password
          formik={formik}
          name={"password"}
          label={"Password"}
          placeholder={"Masukkan Password"}
        />

        <Flex justify={"space-between"} mb={"24px"}>
          <Checkbox colorScheme="brand">Ingat Saya</Checkbox>
          <Link as={NextLink} href="/login/forget-password">
            Lupa Password ?
          </Link>
        </Flex>
        <Button
          type={"submit"}
          w={"full"}
          isDisabled={!isValid || !dirty}
          isLoading={isLoading}
        >
          Masuk Sekarang
        </Button>
      </form>
    </Box>
  );
};

export default FormLogin;
