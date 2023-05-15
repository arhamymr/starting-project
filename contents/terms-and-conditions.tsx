import TAC from "layouts/tac";
import Sidebar from "components/terms-and-conditons/sidebar";
import Content from "components/terms-and-conditons/content";

const Register = () => {
  return (
    <TAC
      title={"Syarat dan Ketentuan Serpul"}
      main={<Content />}
      sidebar={<Sidebar />}
    />
  );
};

export default Register;
