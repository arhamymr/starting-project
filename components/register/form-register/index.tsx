import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import useRegister from "./hooks/useRegister";
import ModalSuccess from "./modal";

const FormSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phoneNumber: Yup.number().required(),
});

const FormRegister = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { procedRegister } = useRegister();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: FormSchema,
    onSubmit: async (values) => {
      window.alert(JSON.stringify(values));
      procedRegister();
      onOpen();
    },
  });

  return (
    <Box>
      <ModalSuccess isOpen={isOpen} onClose={onClose} />
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          isInvalid={formik.touched.name && Boolean(formik.errors.name)}
          mb={"24px"}
        >
          <FormLabel>Nama Lengkap</FormLabel>
          <Input
            name={"name"}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Masukan nama lengkap sesuai KTP"
          />
          {formik.touched.name && formik.errors.name && (
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          )}
        </FormControl>

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
            placeholder="Masukan alamat email aktif"
          />
          {formik.touched.email && formik.errors.email && (
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isInvalid={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          mb={"24px"}
        >
          <FormLabel>Nomor WhatsApp</FormLabel>
          <Input
            name={"phoneNumber"}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            placeholder="Masukan nomor WhatsApp Aktif"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
          )}
        </FormControl>
        <Button type={"submit"} w={"full"} mb={"12px"}>
          Mulai
        </Button>
      </form>
    </Box>
  );
};

export default FormRegister;
