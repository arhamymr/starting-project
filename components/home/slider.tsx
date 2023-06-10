import React, { useRef } from "react";
import { Box, Center, Container } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
export default function SliderComp({ children, slide = 4 }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return (
        <Center gap={"22px"} bottom={"-50px"}>
          {dots.map((item, index) => (
            <Box
              key={index}
              rounded={"full"}
              bg={
                item.props.className !== "slick-active"
                  ? "brand.100"
                  : "brand.500"
              }
              w={"10px"}
              h={"10px"}
            />
          ))}
        </Center>
      );
    },
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Box>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      <Center gap={4} mt={20}>
        <Center
          onClick={goToPrevious}
          bg={"linear-gradient(180deg, #7276E7 0%, #4C50C8 100%)"}
          color={"white"}
          rounded={"lg"}
          cursor={"pointer"}
          p={2}
        >
          <ChevronLeftIcon />
        </Center>
        <Center
          onClick={goToNext}
          bg={"linear-gradient(180deg, #7276E7 0%, #4C50C8 100%)"}
          color={"white"}
          rounded={"lg"}
          cursor={"pointer"}
          p={2}
        >
          <ChevronRightIcon />
        </Center>
      </Center>
    </Box>
  );
}
