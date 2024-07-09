import { Box } from "@chakra-ui/react";

function SectionAbout() {
  return (
    <Box
      minH="80vh"
      boxShadow="0 10px 40px rgba(9, 15, 21, 0.60)"
      p="40px"
      //  border="5px solid blue"
    >
      {/* ============== 1 */}
      <Box
        h="400px"
        w="60%"
        bg="rgba(9, 15, 21, .3)"
        boxShadow="0 0 30px rgba(9, 15, 21, .7)"
        border="1px solid rgba(255, 255, 255, .04)"
        mb="40px"
        padding="45px"
        borderRadius="10px"
      ></Box>

       {/* ============== 2 */}
       <Box
        h="400px"
        w="60%"
        bg="rgba(26, 178, 135, 0.08)"
        boxShadow="0 0 30px rgba(9, 15, 21, .7)"
        border="1px solid rgba(255, 255, 255, .04)"
        mb="40px"
        padding="45px"
        borderRadius="10px"
      >
        <Box></Box>
      </Box>


       {/* ============== 3 */}
       <Box
        h="400px"
        w="60%"
        bg="rgba(130, 36, 227, 0.04)"
        boxShadow="0 0 30px rgba(9, 15, 21, .7)"
        border="1px solid rgba(255, 255, 255, .04)"
        mb="40px"
        padding="45px"
        borderRadius="10px"
      ></Box>


       {/* ============== 4 */}
       <Box
        h="400px"
        w="60%"
        bg="rgba(96, 71, 10, 0.05)"
        boxShadow="0 0 30px rgba(9, 15, 21, .7)"
        border="1px solid rgba(255, 255, 255, .04)"
        mb="40px"
        padding="45px"
        borderRadius="10px"
      ></Box>


       {/* ============== 5 */}
       <Box
        h="400px"
        w="60%"
        bg="rgba(25, 168, 163, 0.08)"
        boxShadow="0 0 30px rgba(9, 15, 21, .7)"
        border="1px solid rgba(255, 255, 255, .04)"
        mb="40px"
        padding="45px"
        borderRadius="10px"
      ></Box>
    </Box>
  );
}

export default SectionAbout;
