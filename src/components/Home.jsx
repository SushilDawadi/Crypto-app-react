import React from "react";
import { Box, Image } from "@chakra-ui/react";
import backgroundImage from "../assets/back.jpg";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} h={"85vh"} w={"full"}>
      <motion.div
        style={{ height: "80vh" }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full "}
          objectFit={"cover"}
          src={backgroundImage}
        />
      </motion.div>
    </Box>
  );
};

export default Home;
