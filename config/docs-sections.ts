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
    section: "Nextti eSocial",		
    routes: [
      { title: "eSocial: Introdução", path: "/docs/ne-introducao" },     
      { title: "eSocial: Como usar Nextti eSocial", path: "/docs/ne-nextti-esocial" },     
      { title: "Evento: S-1000", path: "/docs/ne-S1000" },
      { title: "S-", path: "/docs/cadastro-empresa" },  
      { title: "N.E: Trabalhador", path: "/docs/cadastro-trabalhador" },     
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
