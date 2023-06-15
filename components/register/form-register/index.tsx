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
import { useRouter } from "next/router";
import { data } from "components/terms-and-conditons/data";
import { useToast } from "@chakra-ui/react";

const FormSchema = Yup.object().shape({
  name: Yup.string().required("Nama wajib di isi"),
  email: Yup.string().email().required("Email wajib di isi"),
  phone: Yup.number().required("Nomor Whatsapp wajib di isi"),
});

const FormRegister = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { procedRegister, loading } = useRegister();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: FormSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) =>
        formData.append(key, value)
      );
      try {
        const response = await procedRegister(formData);
        localStorage.setItem("at", response.data.access_token);
        onOpen();
      } catch (error) {
        if (error.data.code === 400) {
          return toast({
            description: error.data.message,
            status: "warning",
            duration: 9000,
            isClosable: true,
          });
        }
        return toast({
          description: error.data.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    },
  });

  function containsOnlyNumericCharacters(str) {
    return /^\d+$/.test(str);
  }
  const handlePhoneChange = (e) => {
    if (
      containsOnlyNumericCharacters(e.target.value) ||
      e.target.value === ""
    ) {
      formik.handleChange(e);
    }
  };

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
          isInvalid={formik.touched.phone && Boolean(formik.errors.phone)}
          mb={"24px"}
        >
          <FormLabel>Nomor WhatsApp</FormLabel>
          <Input
            name={"phone"}
            type={"tel"}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            onChange={handlePhoneChange}
            placeholder="Masukan nomor WhatsApp Aktif"
          />
          {formik.touched.phone && formik.errors.phone && (
            <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
          )}
        </FormControl>
        <Button isLoading={loading} type={"submit"} w={"full"} mb={"12px"}>
          Mulai
        </Button>
      </form>
    </Box>
  );
};

export default FormRegister;
