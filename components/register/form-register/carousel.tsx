import React, { useState } from "react";
import { Box, Center, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Settings for the slider

export default function Carousel() {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    afterChange: (index) => {
      setCurrentIndex(index);
    },
    appendDots: (dots) => {
      return (
        <Center gap={"22px"} bottom={{ base: "10px", md: "100px" }}>
          {dots.map((item, index) => (
            <Box
              key={index}
              rounded={"full"}
              bg={
                item.props.className !== "slick-active" ? "white" : "brand.500"
              }
              w={item.props.className === "slick-active" ? "60px" : "10px"}
              h={"10px"}
            />
          ))}
        </Center>
      );
    },
  };

  const top = "50%";
  const side = "10px";

  // These are the images used in the slide
  const cards = [
    "/assets/banner-1.jpg",
    "/assets/banner-2.jpg",
    "/assets/banner-3.jpg",
  ];

  return (
    <Box
      position={"relative"}
      h={{ base: "300px", md: "100vh" }}
      width={{ base: "full", md: "calc(100vw / 2)" }}
      overflow={"hidden"}
    >
      {currentIndex !== 0 && (
        <IconButton
          aria-label="left-arrow"
          colorScheme="brand"
          borderRadius="15px"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          boxShadow={"inner"}
          onClick={() => slider?.slickPrev()}
        >
          <ChevronLeftIcon />
        </IconButton>
      )}
      {currentIndex !== cards.length - 1 && (
        <IconButton
          aria-label="right-arrow"
          colorScheme="brand"
          borderRadius="15px"
          position="absolute"
          right={side}
          boxShadow={"inner"}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <ChevronRightIcon />
        </IconButton>
      )}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            h={{ base: "300px", md: "100vh" }}
            bg={"brand.500"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={{ base: "cover", md: "cover" }}
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
