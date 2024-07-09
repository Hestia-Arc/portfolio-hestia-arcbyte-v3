import { Flex, Text } from "@chakra-ui/react";
import logo from "../assets/logo-cropped.png";

function Nav() {
  return (
    <Flex justifyContent="space-between" alignItems="center" h="120px" position="absolute" top="0" left="0" right="0" bg="rgba(0,0,0,0.1)" borderBottom="1px solid rgba(255,255,255,0.07)" px={10}>
      <img src={logo} alt="icon" style={{ height: "60px" }} />
      <Text>icons</Text>
    </Flex>
  ); 
}

export default Nav;
