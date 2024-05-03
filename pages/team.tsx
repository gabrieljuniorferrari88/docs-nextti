import { Tweets } from "@/components/tweets";
import { DocsLayout } from "@/layouts";
import { Heading, Text } from "@chakra-ui/react";

const Team = () => {
  return (
    <DocsLayout title="Team">
      <Heading as="h1">Equipe</Heading>
      <Text mt="6">
        Nossa equipe totalmente focado em entregar a maior qualidade possível
        para nossos clientes e nosso suporte confiável e altamente qualificado.
      </Text>

      <Tweets mt="12" />
    </DocsLayout>
  );
};

export default Team;
