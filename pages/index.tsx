import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Teams } from "@/components/teams";
import { DefaultLayout } from "@/layouts";

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Teams mt="6" />
      <Section
        mt="12"
        title="www.nexttisistemas.com.br"
        subtitle="Conheça a Nextti"
        text="Desenvolvimento de softwares sob demandas"
      />
      <Footer />
    </DefaultLayout>
  );
};

export default Home;
