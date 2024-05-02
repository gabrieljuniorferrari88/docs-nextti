import { WithChildren } from "@/types";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

export interface LinkProps extends WithChildren, ChakraLinkProps {
  href: string;
  isActive?: boolean;
}

export const Link: FC<LinkProps> = ({ href, isActive, children, ...props }) => {
  const fontColor = useColorModeValue("gray.600", "gray.400");

  return (
    <NextLink href={href} passHref>
      <ChakraLink
        color={isActive ? "green.500" : fontColor}
        _hover={{ textDecor: "none", color: "green.500" }}
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};
