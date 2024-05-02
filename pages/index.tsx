import { DefaultLayout } from "@/layouts";
import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import { Teams } from "@/components/teams";
import { Footer } from "@/components/footer";

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Teams mt="6" />
      <Section
        mt="12"
        title="TrabalhoAvulso.com.br"
        subtitle="Faça parte você também"
        text="Seja um trabalhador ou uma empresa ou uma entidade sindical."
      />
			<Footer />
    </DefaultLayout>
  );
};

export default Home;
