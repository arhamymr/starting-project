import React, { useEffect } from "react";
import { Link } from "@chakra-ui/react";
function SmoothScrollLink({ targetId, label }) {
  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    };

    const link = document.querySelector(`a[href="${targetId}"]`);
    link?.addEventListener("click", handleClick);

    return () => {
      link?.removeEventListener("click", handleClick);
    };
  }, [targetId]);

  return (
    <Link
      p={2}
      href={targetId}
      fontSize={"sm"}
      fontWeight={500}
      color={
        label === "Affiliate Program" || label === "Template"
          ? "gray.300"
          : "gray.500"
      }
      whiteSpace={"nowrap"}
      cursor={
        label === "Affiliate Program" || label === "Template"
          ? "not-allowed"
          : "cursor"
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
    </Link>
  );
}

export default SmoothScrollLink;
