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
    ],
  },
	{
    section: "FASE 01 - Tabelas Iniciais",
    routes: [
      { title: "Evento: S-1000", path: "/docs/f1-S1000" },
      { title: "Evento: S-1005", path: "/docs/f1-S1005" },
      { title: "Evento: S-1010", path: "/docs/f1-S1010" },
      { title: "Evento: S-1020", path: "/docs/f1-S1020" },
    ],
  },
  {
    section: "FASE 02 - Tabelas Iniciais",
    routes: [
      { title: "Evento: S-2300", path: "/docs/f2-S2300" },
      { title: "Evento: S-2230", path: "/docs/f2-S2230" },
      { title: "Evento: S-2399", path: "/docs/f2-S2399" },
    ],
  },
  {
    section: "FASE 03 - Folha de Pagamento",
    routes: [
      { title: "Evento: S-1200", path: "/docs/f3-S1200" },
      { title: "Evento: S-1210", path: "/docs/f3-S1210" },
      { title: "Relatório: S-1270", path: "/docs/f3-S1270" },
      { title: "Evento: S-1299", path: "/docs/f3-S1299" },
    ],
  },
  {
    section: "FASE 04 - Segurança do Trabalho",
    routes: [
      { title: "Evento: S-2210", path: "/docs/f4-S2210" },
      { title: "Evento: S-2220", path: "/docs/f4-S2220" },
      { title: "Evento: S-2240", path: "/docs/f4-S2240" },
    ],
  },
  
];

export const allDocsRoutes: Route[] = docsSections.flatMap(
  (route) => route.routes
);
