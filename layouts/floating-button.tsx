import { useState } from "react";
import Image from "next/image";
import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    width: 40,
  },
  hover: {
    width: 270,
  },
};
function FloatingButton() {
  const [hover, setHover] = useState(false);

  return (
    <Link href={"https://wa.me/6281354444604"} target="_blank">
      <Button
        as={motion.button}
        colorScheme="brand"
        position="fixed"
        bottom={4}
        right={4}
        aria-label="WhatsApp"
        rounded={"full"}
        fontSize={"12px"}
        variants={containerVariants}
        initial="initial"
        whileHover="hover"
        size={"lg"}
        overflow={"hidden"}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        rightIcon={
          <Image
            src="/assets/ic_whatsapp.png" // Replace with your actual icon image path
            alt="WhatsApp"
            width={26} // Adjust the width and height to match your icon's dimensions
            height={26}
            style={{ marginRight: !hover ? 8 : 0 }}
          />
        }
      >
        {hover && "Ada pertanyaan? Yuk hubungi kami!"}
      </Button>
    </Link>
  );
}

export default FloatingButton;
