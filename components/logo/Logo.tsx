import LogoNextti from "@/public/static/images/logos/logo-nextti.svg";
import { Flex, Heading, HTMLChakraProps } from "@chakra-ui/react";
import Image from "next/dist/client/image";
import { FC } from "react";

const Logo: FC<HTMLChakraProps<"svg">> = (props) => {
  return (
    <Flex alignItems="center">
      {<Image src={LogoNextti} width={40} height={40} alt="Logo" />}
      <Heading
        ml="2"
        fontSize="md"
        color="green.500"
        display={{ base: "none", md: "block" }}
      >
        Nextti
      </Heading>
    </Flex>
  );
};

export default Logo;
