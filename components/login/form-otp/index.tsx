import React from "react";
import { Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import CountDown from "../count-down";
import Password from "components/custom-input/password";

const FormSchema = Yup.object().shape({
  otp: Yup.string().required(),
});

const FormOtp = () => {
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: FormSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Password
        label={"Kode OTP"}
        placeholder="Masukkan 6 Digit Kode OTP"
        formik={formik}
        name={"otp"}
      />
      <Button type={"submit"} w={"full"} mb={"12px"}>
        Submit OTP
      </Button>
      <CountDown />
    </form>
  );
};

export default FormOtp;
