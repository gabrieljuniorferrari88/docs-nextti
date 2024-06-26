import { Heading } from "@/types";
import {
  Box,
  BoxProps,
  Button,
  chakra,
  Heading as ChakraHeading,
  Divider,
  Icon,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export interface TOCProps {
  headings: Heading[];
}

export const TOC: FC<TOCProps & BoxProps> = ({ headings, ...props }) => {
  const [activeHeading, setActiveHeading] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      headings.map((heading) => {
        const element = document.getElementById(heading.id);
        if (element && element.getBoundingClientRect().top < 84) {
          current = heading.id;
        }
        setActiveHeading(current);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  // console.log(headings)

  return (
    <>
      <Box
        as="nav"
        aria-label="TOC"
        display={{ base: "none", xl: "block" }}
        position="fixed"
        top="4rem"
        bottom="0"
        right="max(0px, calc(50% - 43.5rem))"
        w="full"
        maxW="18rem"
        overflowY="auto"
        pb="10"
        {...props}
      >
        <Box pt="10" pb="4" pr="10">
          <ChakraHeading
            fontSize="sm"
            fontWeight="bold"
            textTransform="uppercase"
            color="green.500"
            mb="4"
          >
            Conteúdo da página
          </ChakraHeading>
          <OrderedList listStyleType="none" spacing="2">
            {headings.map(({ id, text, level }) => (
              <ListItem
                key={id}
                title={text}
                position="relative"
                display="flex"
                alignItems="center"
                ml={level === "h3" ? "4" : "0"}
              >
                {
                  <chakra.a
                    href={`#${id}`}
                    fontSize="sm"
                    fontWeight={id === activeHeading ? "bold" : "normal"}
                    color={id === activeHeading ? "green.500" : "gray.500"}
                    _hover={{ textDecor: "none", color: "green.500" }}
                    _after={{
                      content: "''",
                      w: "1.5",
                      h: "1.5",
                      position: "absolute",
                      top: "50%",
                      left: "0",
                      transform: "translateY(-50%)",
                      borderRadius: "full",
                      bgColor: "green.500",
                      my: "0.4",
                      ml: "-4",
                      transition: "opacity 0.25s ease",
                      opacity: id === activeHeading ? "1" : "0",
                    }}
                  >
                    {text}
                  </chakra.a>
                }
              </ListItem>
            ))}
          </OrderedList>
        </Box>
        <Divider orientation="horizontal" mb="4" />
        <Button
          size="sm"
          variant="link"
          mx="1"
          onClick={() => window.scrollTo(0, 0)}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Icon as={RiArrowUpLine} mr="2" boxSize="5" />
          Voltar para o topo
        </Button>
      </Box>
    </>
  );
};
