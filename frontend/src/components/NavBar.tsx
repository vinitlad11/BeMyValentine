import { Box } from "@chakra-ui/react";
import Logo from "../assets/Logo.gif";

const NavBar = () => {
  // const { toggleColorMode } = useColorMode();

  return (
    <Box w="100%" p={4} color="white" className="box">
      <img
        src={Logo}
        height={"100px"}
        width={"100px"}
        // onClick={toggleColorMode}
      />
      {/* <Button onClick={toggleColorMode}>Change Mode</Button> */}
    </Box>
  );
};

export default NavBar;
