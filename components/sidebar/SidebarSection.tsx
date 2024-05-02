import { WithChildren } from "@/types";
import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactElement } from "react";

interface SidebarSectionProps extends WithChildren, FlexProps {
  icon?: ReactElement;
  isActive?: boolean;
  isLink?: boolean;
}

const SidebarSection: FC<SidebarSectionProps> = ({
  icon,
  isActive,
  isLink,
  children,
  ...props
}) => {
  const fontColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Flex
      fontSize="sm"
      fontWeight="semibold"
      color={isActive ? "green.500" : fontColor}
      sx={{
        ".link-box:hover &": { color: isLink ? "green.500" : fontColor },
      }}
      alignItems="center"
      {...props}
    >
      <Flex
        w="full"
        maxW="6"
        h="6"
        bg={useColorModeValue("green.500", "green.700")}
        borderRadius="md"
        justifyContent="center"
        alignItems="center"
        mr="2"
      >
        {icon}
      </Flex>
      {children}
    </Flex>
  );
};

export default SidebarSection;
