import React from "react";
import Copyright from "./Copyright";
import { Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      minH="300px"
      background="rgba(30, 115, 190, 0.03)"
    >
      <Box  padding="140px 0 100px 0">
      <Box
        h="50px"
        w="fit-content"
        bg="rgba(9, 15, 21, .3)"
        boxShadow="0 0 30px rgba(9, 15, 21, .7)"
        border="1px solid rgba(255, 255, 255, .04)"
        mb="40px"
        padding="15px"
        borderRadius="10px"
        fontSize="11px"
      color="rgba(255,255,255,.8)"
      fontWeight="bold"

      >Theme inspiration from <a href="https://themeforest.net/item/gamepress-wordpress-dark-style-blog-theme/37648534">GamePress</a></Box>
      </Box>

      {/* copyright */}
      <Copyright />
    </Box>
  );
}

export default Footer;
