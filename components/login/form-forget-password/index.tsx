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
import { useForgetPassword } from "./hooks/useForgetPassword";

const FormSchema = Yup.object().shape({
  reset: Yup.string().required(),
});

const FormResetPassword = () => {
  const { isLoading, handleForgetPassword } = useForgetPassword();

  const formik = useFormik({
    initialValues: {
      reset: "",
    },
    validationSchema: FormSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("reset", values.reset);
      try {
        await handleForgetPassword(formData);
      } catch (error) {
        window.alert("cause" + error.message);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl
        isInvalid={formik.touched.reset && Boolean(formik.errors.reset)}
        mb={"24px"}
      >
        <FormLabel>Nomor WhatsApp/Email</FormLabel>
        <Input
          name={"reset"}
          onBlur={formik.handleBlur}
          value={formik.values.reset}
          onChange={formik.handleChange}
          placeholder="Masukkan nomor WhatsApp atau Email"
        />
        {formik.touched.reset && formik.errors.reset && (
          <FormErrorMessage>{formik.errors.reset}</FormErrorMessage>
        )}
      </FormControl>
      <Button
        isDisabled={!formik.isValid || !formik.dirty}
        isLoading={isLoading}
        type={"submit"}
        w={"full"}
        mb={"12px"}
      >
        Reset Password
      </Button>
    </form>
  );
};

export default FormResetPassword;
