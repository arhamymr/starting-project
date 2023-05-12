import { Button, Heading, Box } from "@chakra-ui/react";
import MainLayout from "layouts/main";

export default function Login() {
  return (
    <MainLayout>
      <Box mb={100}>
        <Heading> Login to your users</Heading>
        <Button>Login</Button>
      </Box>
    </MainLayout>
  );
}
