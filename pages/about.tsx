import { DocsLayout } from "@/layouts";
import { Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <DocsLayout title="About">
      <Heading as="h1">Sobre</Heading>
      <Text mt="6">
			O trabalhadovulso.com.br e o manual é um portal desenvolvido por nossa empresa chamada SYNG. 
			Privamos por uma tecnologia de ponta em nossos projetos, disponibilizando aos nossos clientes controle, agilidade e confiança.
      </Text>
    </DocsLayout>
  );
};

export default About;
