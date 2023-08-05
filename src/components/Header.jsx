import { Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Text
        display={["none", "block"]}
        fontSize={["xl", "3xl"]}
        lineHeight={"10"}
        textAlign={"center"}
        color={"whiteAlpha.900"}
        position={"absolute"}
        left={"4"}
        top={"5"}
      >
        The Crypto.
      </Text>
      <HStack
        p={5}
        boxShadow={"base"}
        background={"blackAlpha.900"}
        justifyContent={["center", "flex-end"]}
      >
        <Button variant={"unstyled"} color={"white"} px={3}>
          <Link to={"/"}>Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} px={3}>
          <Link to={"/coins"}>Coin</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} px={3}>
          <Link to={"/exchange"}>Exchange</Link>
        </Button>
      </HStack>
    </>
  );
};

export default Header;
