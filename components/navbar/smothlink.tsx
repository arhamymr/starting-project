import React, { useContext, useEffect, useRef } from "react";
import { Text } from "@chakra-ui/react";
import { NavbarContext } from "layouts/main";
function SmoothScrollLink({ targetId, label }) {
  const linkRef = useRef(null);
  const { setActiveNavItem } = useContext(NavbarContext);

  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    if (linkRef.current) {
      linkRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (linkRef.current) {
        linkRef.current.removeEventListener("click", handleClick);
      }
    };
  }, [targetId]);

  const handleClick = (target) => {
    setActiveNavItem(target);
  };
  return (
    <Text
      p={{ base: 0, md: 2 }}
      className={targetId}
      fontSize={"sm"}
      ref={linkRef}
      fontWeight={500}
      onClick={() => handleClick(targetId)}
      color={
        label === "Affiliate Program" || label === "Template"
          ? "gray.300"
          : "gray.500"
      }
      whiteSpace={"nowrap"}
      cursor={
        label === "Affiliate Program" || label === "Template"
          ? "not-allowed"
          : "pointer"
      }
      _hover={{
        textDecoration: "none",
        color:
          label === "Affiliate Program" || label === "Template"
            ? "gray.300"
            : "black",
      }}
    >
      {label}
    </Text>
  );
}

export default SmoothScrollLink;
