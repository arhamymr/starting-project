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

const FormSchema = Yup.object().shape({
  name: Yup.string().required("Nama wajib di isi"),
  email: Yup.string().email().required("Email wajib di isi"),
  phone: Yup.string()
    .matches(/^\d+$/, "Format salah, gunakan 628XXX atau 08XXXXXX")
    .required("Nomor Whatsapp wajib di isi"),
});

const FormRegister = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { procedRegister } = useRegister();
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
        const data = await procedRegister(formData);
        localStorage.setItem("at", data.access_token);
        localStorage.setItem("customer_id", data?.account?.customer_id);
        if (!!data.invoice_id) {
          router.push("payment-fullfilment?invoice_id=" + data.invoice_id);
        }
        onOpen();
      } catch (error) {
        window.alert("Ops error :");
      }
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
          isInvalid={formik.touched.phone && Boolean(formik.errors.phone)}
          mb={"24px"}
        >
          <FormLabel>Nomor WhatsApp</FormLabel>
          <Input
            name={"phone"}
            type={"number"}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder="Masukan nomor WhatsApp Aktif"
          />
          {formik.touched.phone && formik.errors.phone && (
            <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
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
