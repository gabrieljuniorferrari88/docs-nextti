import { Section } from "@/components/section";
import { TweetData } from "@/types";
import {
  Box,
  BoxProps,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import Marquee from "react-fast-marquee";
import Tweet from "./Tweet";

interface TweetsProps extends BoxProps {}

const tweets: TweetData[] = [
  {
    text: "Muitas empresas não fazem sucesso com o tempo. O que elas fazem de errado? Geralmente, elas esquecem o futuro.",
    author: {
      name: "Marcelo Duretti",
      bio: "Nextti CEO.",
      avatar:
        "https://www.nexttisistemas.com.br/GLAHom/Content/img/nextti/marceloduretti.jpg",
    },
    url: "https://www.instagram.com/marceloduretti/",
  },
  {
    text: "Apaixonado pelas melhores tecnologias web e mobile.",
    author: {
      name: "Gabriel Ferrari",
      bio: "Development Jr.",
      avatar: "https://github.com/gabrieljuniorferrari88.png",
    },
    url: "https://www.instagram.com/gabrieljr.ferrari/",
  },
];

const Tweets: FC<TweetsProps> = (props) => {
  const [r, g, b] = useColorModeValue([255, 255, 255], [26, 32, 43]);
  const gradientWidth = useBreakpointValue({ base: 100, md: 200 });

  return (
    <Box {...props}>
      <Section
        title="Nossa equipe"
        text="Em busca do crescimento constante e apoiando sempre nossos clientes."
      />
      <Box
        as={Marquee}
        gradientColor={[r, g, b]}
        gradientWidth={gradientWidth}
        speed={30}
        pauseOnHover
      >
        {tweets.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} mr="3" />
        ))}
      </Box>
    </Box>
  );
};

export default Tweets;
