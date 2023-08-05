import React from "react";
import { Box, VStack, Avatar, Text, Stack } from "@chakra-ui/react";
import profile from "../assets/sss.jpg";
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text fontSize={"sm"} letterSpacing={"widest"}>
            We are the best crypto trading app , we provide our guidance at a
            resonable price.
          </Text>
        </VStack>
        <VStack>
          <Avatar src={profile} boxSize={"28"} mt={["4", "0"]} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
