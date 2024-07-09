import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Nav from "../Nav";

const list = ["Gt", "Li", "Tw", "In", "Tw"];
function Hero() {
  return (
    <Box
      h="100vh"
      bg="rgba(30, 115, 190, 0.01)"
      boxShadow="0 10px 40px rgba(9, 15, 21, 0.60)"
      px={10}
    >
      <Nav />
      <Flex h="100vh" alignItems="flex-end"
    //    border="1px solid red"
       >
        <Box h="500px" w="400px" 
        // border="1px solid red"
        //  pl={7}
         >
          {/* 1 */}
          <Flex direction="column" gap={4}>
            {list.map((item) => (
              <Box>{item}</Box>
            ))}
          </Flex>

          {/* 2 */}
          <Flex direction="column" gap={4} mt="80px" w="300px">
            <Button colorScheme="gray">Open to jobs/opportunites</Button>
            <Heading as="h3" size="md">
              SUPER PARALLAX THEME{" "}
            </Heading>
            <Text fontSize="sm" w="300px">
              Salvia vape blue bottle bespoke wolf celiac quinoa cloud bread
              letterpress hammock photo booth. Palo santo vexillologist venmo
              shaman pitchfork tote bag.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Hero;
