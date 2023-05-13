import React from "react";
import { Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

const FormSchema = Yup.object().shape({
  otp: Yup.string().required(),
});

const FormOtp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: FormSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl
        isInvalid={formik.touched.email && Boolean(formik.errors.email)}
        mb={"24px"}
      >
        <FormLabel>Nomor WhatsApp/Email</FormLabel>
        <Input
          name={"email"}
          type={"email"}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Masukkan nomor WhatsApp atau Email"
        />
        {formik.touched.email && formik.errors.email && (
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        )}
      </FormControl>
      <Button type={"submit"} w={"full"} mb={"12px"}>
        Kirim OTP
      </Button>
    </form>
  );
};

export default FormOtp;
