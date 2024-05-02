import { Route, Section } from "@/types";

export const docsSections: Section[] = [
	{
    section: "Primeiros Passos",
    routes: [
      { title: "Introdução", path: "/docs/introducao" },
      { title: "Dúvidas", path: "/docs/duvidas" },
      { title: "Contato", path: "/docs/contato" },
      { title: "MDX", path: "/docs/mdx" },
    ],
  },
	{
    section: "Cadastro e Acesso",		
    routes: [
      { title: "C.A: Introdução", path: "/docs/cadastro-introducao" },     
      { title: "C.A: Entidade Sindical", path: "/docs/cadastro-sindicato" },     
      { title: "C.A: Empresa", path: "/docs/cadastro-empresa" },     
      { title: "C.A: Trabalhador", path: "/docs/cadastro-trabalhador" },     
    ],
  },
	{
    section: "Solicitações de Serviços",
    routes: [
      { title: "S.S: Introdução", path: "/docs/escala-introducao" },     
      // { title: "C.A: Entidade Sindical", path: "/docs/cadastro-sindicato" },     
      // { title: "C.A: Empresa", path: "/docs/cadastro-empresa" },     
      // { title: "C.A: Trabalhador", path: "/docs/cadastro-trabalhador" },     
    ],
  },
];

export const allDocsRoutes: Route[] = docsSections.flatMap(
  (route) => route.routes
);