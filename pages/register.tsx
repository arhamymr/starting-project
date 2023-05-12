import { Button, Heading, Box } from "@chakra-ui/react";
import MainLayout from "layouts/main";
import Link from "next/link";

export default function Register() {
  return (
    <MainLayout>
      <Box mb={100}>
        <Heading> Register</Heading>
        <Button>Login</Button>
        <Link href={"/login"}>klik disini jika sudah melakukan registrasi</Link>
      </Box>
    </MainLayout>
  );
}
