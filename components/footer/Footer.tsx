import { Logo } from "@/components/logo";
import { siteConfig } from "@/config";
import {
  BoxProps,
  HStack,
  Image,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

const Footer: FC<BoxProps> = (props) => {
  const textColor = useColorModeValue("gray.500", "gray.300");

  return (
    <VStack
      as="footer"
      alignItems="start"
      spacing="5"
      borderTop="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      mt="12"
      py="8"
      {...props}
    >
      <Logo />
      {siteConfig.author && (
        <HStack fontSize="sm" fontWeight="medium" color={textColor} mt="4">
          <span>Copyright © {new Date().getFullYear()} Nextti.</span>
          <Image
            w="6"
            mx="auto"
            src="/static/images/logos/bandeira.svg"
            alt="Brand #1"
          />
          <span>
            by{" "}
            <Link href={`https://www.github.com/${siteConfig.author?.github}`}>
              {siteConfig.author?.name}
            </Link>
          </span>
        </HStack>
      )}
    </VStack>
  );
};

export default Footer;
