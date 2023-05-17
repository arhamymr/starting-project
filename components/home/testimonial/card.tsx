import { Text, Box, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Quote = () => (
  <svg
    width="59"
    height="39"
    viewBox="0 0 59 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.877 0.413086H20.877V-0.963921L19.5675 -0.537837L19.877 0.413086ZM19.877 3.41602L20.3402 4.30224L20.877 4.02167V3.41602H19.877ZM8.59766 21.9463L9.43883 21.4055L9.41601 21.37L9.39028 21.3366L8.59766 21.9463ZM12.7725 22.459L13.0757 23.4119L13.0951 23.4057L13.1142 23.3988L12.7725 22.459ZM20.9023 24.1436L20.1837 24.839L20.1951 24.8508L20.2069 24.8622L20.9023 24.1436ZM20.4629 35.6426L21.1395 36.3789L21.1448 36.374L21.1501 36.369L20.4629 35.6426ZM5.74121 9.78809L4.94892 9.17793L4.9479 9.17927L5.74121 9.78809ZM54.8135 0.632812H55.8135V-0.701822L54.5326 -0.326925L54.8135 0.632812ZM54.8135 3.41602L55.3115 4.2832L55.8135 3.99492V3.41602H54.8135ZM56.0586 24.0703L55.3515 24.7774L55.3633 24.7892L55.3754 24.8006L56.0586 24.0703ZM55.4727 35.5693L54.7943 34.8345L54.7849 34.8434L55.4727 35.5693ZM40.8975 9.6416L41.6863 10.2562L41.6897 10.2518L40.8975 9.6416ZM18.877 0.413086V3.41602H20.877V0.413086H18.877ZM19.4137 2.52979C15.0541 4.80865 11.8335 7.23527 9.85228 9.84218L11.4446 11.0523C13.1743 8.77644 16.106 6.51557 20.3402 4.30224L19.4137 2.52979ZM9.85228 9.84218C7.87366 12.4456 6.86523 15.3167 6.86523 18.4307H8.86523C8.86523 15.7829 9.71228 13.3317 11.4446 11.0523L9.85228 9.84218ZM6.86523 18.4307C6.86523 19.3272 6.92879 20.1205 7.06936 20.7953C7.20826 21.462 7.4349 22.0748 7.80503 22.556L9.39028 21.3366C9.27214 21.183 9.13256 20.8925 9.02732 20.3874C8.92375 19.8902 8.86523 19.2431 8.86523 18.4307H6.86523ZM7.75648 22.487C8.32156 23.3661 9.13849 23.9717 10.209 23.9717V21.9717C10.0099 21.9717 9.75266 21.8937 9.43883 21.4055L7.75648 22.487ZM10.209 23.9717C10.997 23.9717 11.9669 23.7647 13.0757 23.4119L12.4693 21.5061C11.4295 21.8369 10.6905 21.9717 10.209 21.9717V23.9717ZM13.1142 23.3988C14.1101 23.0366 14.9689 22.873 15.7021 22.873V20.873C14.6776 20.873 13.5833 21.1001 12.4307 21.5192L13.1142 23.3988ZM15.7021 22.873C17.4178 22.873 18.8963 23.5086 20.1837 24.839L21.6209 23.4481C19.9787 21.7511 17.9904 20.873 15.7021 20.873V22.873ZM20.2069 24.8622C21.5216 26.1344 22.1729 27.6798 22.1729 29.5635H24.1729C24.1729 27.1502 23.3104 25.0824 21.5978 23.425L20.2069 24.8622ZM22.1729 29.5635C22.1729 31.6141 21.3963 33.3831 19.7757 34.9161L21.1501 36.369C23.1428 34.4841 24.1729 32.2003 24.1729 29.5635H22.1729ZM19.7863 34.9063C18.1823 36.3802 16.1853 37.1328 13.7246 37.1328V39.1328C16.635 39.1328 19.1302 38.2253 21.1395 36.3789L19.7863 34.9063ZM13.7246 37.1328C10.7815 37.1328 8.07935 35.8726 5.5942 33.2033L4.13041 34.5662C6.91869 37.561 10.1248 39.1328 13.7246 39.1328V37.1328ZM5.5942 33.2033C3.14301 30.5706 1.90723 27.3287 1.90723 23.4111H-0.0927734C-0.0927734 27.7943 1.30816 31.5349 4.13041 34.5662L5.5942 33.2033ZM1.90723 23.4111C1.90723 18.7674 3.43393 14.4371 6.53452 10.3969L4.9479 9.17927C1.60318 13.5375 -0.0927734 18.2893 -0.0927734 23.4111H1.90723ZM6.5335 10.3982C9.65853 6.34035 14.1854 3.3167 20.1864 1.36401L19.5675 -0.537837C13.2638 1.51337 8.36686 4.73972 4.94893 9.17794L6.5335 10.3982ZM53.8135 0.632812V3.41602H55.8135V0.632812H53.8135ZM54.3155 2.54883C49.3648 5.39179 45.9488 8.0221 44.2514 10.4621L45.8932 11.6043C47.3208 9.55212 50.3989 7.1043 55.3115 4.2832L54.3155 2.54883ZM44.2514 10.4621C42.5599 12.8936 41.7285 15.7345 41.7285 18.9434H43.7285C43.7285 16.0975 44.4596 13.665 45.8932 11.6043L44.2514 10.4621ZM41.7285 18.9434C41.7285 20.4143 42.0129 21.7019 42.7479 22.6374L44.3205 21.4017C43.9813 20.97 43.7285 20.2068 43.7285 18.9434H41.7285ZM42.7479 22.6374C43.3799 23.4417 44.1998 24.0449 45.2188 24.0449V22.0449C45.0658 22.0449 44.7627 21.9645 44.3205 21.4017L42.7479 22.6374ZM45.2188 24.0449C45.9428 24.0449 46.8889 23.7946 47.9775 23.3988L47.294 21.5192C46.2341 21.9046 45.5689 22.0449 45.2188 22.0449V24.0449ZM47.9775 23.3988C48.9492 23.0454 49.908 22.873 50.8584 22.873V20.873C49.6603 20.873 48.4707 21.0913 47.294 21.5192L47.9775 23.3988ZM50.8584 22.873C52.585 22.873 54.0669 23.4928 55.3515 24.7774L56.7657 23.3632C55.1206 21.7181 53.1357 20.873 50.8584 20.873V22.873ZM55.3754 24.8006C56.684 26.0247 57.3291 27.5169 57.3291 29.3438H59.3291C59.3291 26.9714 58.4605 24.9479 56.7418 23.34L55.3754 24.8006ZM57.3291 29.3438C57.3291 31.4323 56.5127 33.2484 54.7944 34.8345L56.1509 36.3041C58.2412 34.3746 59.3291 32.0404 59.3291 29.3438H57.3291ZM54.7849 34.8434C53.129 36.4122 51.086 37.2061 48.5879 37.2061V39.2061C51.5585 39.2061 54.1054 38.2421 56.1604 36.2953L54.7849 34.8434ZM48.5879 37.2061C45.693 37.2061 43.04 35.9698 40.6044 33.3503L39.1397 34.7122C41.8799 37.6591 45.0374 39.2061 48.5879 39.2061V37.2061ZM40.6044 33.3503C38.2051 30.7699 36.9902 27.5539 36.9902 23.6309H34.9902C34.9902 28.0086 36.3633 31.7262 39.1397 34.7122L40.6044 33.3503ZM36.9902 23.6309C36.9902 18.7356 38.546 14.287 41.6863 10.2562L40.1086 9.02703C36.7059 13.3946 34.9902 18.2722 34.9902 23.6309H36.9902ZM41.6897 10.2518C44.8114 6.19825 49.2566 3.30117 55.0944 1.59255L54.5326 -0.326925C48.3587 1.48008 43.5265 4.58886 40.1052 9.03145L41.6897 10.2518Z"
      fill="white"
    />
  </svg>
);

export default function TestimonialCard({ data }) {
  return (
    <Center
      p={"10px 45px"}
      maxW={"531px"}
      minH={"218px"}
      rounded={"15px"}
      bg={data.bg}
      color={"white"}
      m={"0 25px"}
    >
      <Flex gap={"30px"} align={"center"}>
        <Box position={"relative"}>
          <Box top={-5} left={-5} position={"absolute"}>
            <Quote />
          </Box>

          <Image
            quality={100}
            src={data.image}
            width={129}
            height={129}
            alt={data.name}
            style={{
              minWidth: 129,
            }}
          />
        </Box>
        <Box>
          <Text mb={"10px"} fontSize={"15px"}>
            {data.text}
          </Text>
          <Text>{data.name}</Text>
        </Box>
      </Flex>
    </Center>
  );
}
