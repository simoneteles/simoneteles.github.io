import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import clinicaOdontologica from "figma:asset/9053ea1ee8ac6524116f11a486ad0c42269ebfea.png";
import homeKeyApp from "figma:asset/414a90ee527d3acbe5c557903975905c450eb6ad.png";
import anasCleaningServices from "figma:asset/b7f71f0db344c9a9ef22e44fb3e42ba8e6e25ce6.png";
import strangerThings from "figma:asset/93dd93e189edbd85eb0387a2eae7e025852e0bca.png";
import redesSociais from "figma:asset/cc0dbf53112dacafb33714a3409d33279032e93c.png";

const projects = [
  {
    title: "Landing Page - Clínica Ianara Pinho",
    overview:
      "Layout de landing page Ianara Pinho.",
    challenge:
      "Criar uma presença digital profissional que transmitisse confiança e modernidade, facilitando o agendamento de consultas e apresentando os serviços de forma clara.",
    solution:
      "Design limpo e acolhedor, layout responsivo com ênfase em CTAs estratégicos, apresentação visual dos tratamentos e formulários de contato otimizados.",
    colors: ["#39B2C3", "#FF9600", "##666C6C", "#FFFFFF"],
    tags: ["UI Design", "Web Design", "Landing Page"],
    bgColor: "bg-white",
    images: [
      clinicaOdontologica,
    ],
  },
  {
    title: "Layout App - HomeKey",
    overview:
      "Aplicativo mobile para compra e aluguel de imóveis.",
    challenge:
      "Desenvolver uma experiência intuitiva que simplificasse a busca por imóveis e tornasse o processo de locação e compra mais acessível e transparente.",
    solution:
      "Interface clean com navegação simplificada, filtros personalizáveis de busca, sistema de autenticação seguro e elementos visuais que transmitem confiança e modernidade.",
    colors: ["#FF5500", "#000000", "#506773", "#7C98A7", "#E7EEF0"],
    tags: ["UI Design", "Mobile App", "Real Estate"],
    bgColor: "bg-white",
    images: [
      homeKeyApp,
    ],
  },
  {
    title: "Estudo - Stranger Things<br />Layout e programação utilizando HTML, CSS, JavaScript e GSAP.",
    overview:
      "Landing page interativa inspirada na série Stranger Things da Netflix.",
    challenge:
      "Criar uma experiência imersiva que capturasse a atmosfera misteriosa e nostálgica da série, utilizando animações e elementos visuais impactantes.",
    solution:
      "Desenvolvimento de interface com animações utilizando GSAP, design dark com elementos interativos, implementação de parallax e transições suaves que remetem ao universo da série.",
    colors: ["#0C0102", "#630301", "#FFFFFF"],
    tags: ["Web Design", "Desenvolvimento Web", "GSAP", "HTML/CSS/JS"],
    bgColor: "bg-white",
    images: [
      strangerThings,
    ],
  },
  {
    title: "Redes Sociais",
    overview:
      "Conteúdo visual para Instagram Stories com foco em recrutamento internacional.",
    challenge:
      "Criar posts atrativos e informativos para campanhas de recrutamento no Instagram, comunicando oportunidades de trabalho no Canadá de forma clara e impactante.",
    solution:
      "Design de stories com identidade visual marcante, tipografia destacada, uso de elementos gráficos que reforçam a mensagem e CTAs diretos para engajamento.",
    tags: ["Social Media", "Instagram Stories", "Design Gráfico"],
    bgColor: "bg-white",
    images: [
      redesSociais,
    ],
  },
  {
    title: "Ana's Cleaning Services<br />Layout e Programação do site",
    overview:
      "Website completo para empresa internacional de serviços de limpeza.",
    challenge:
      "Desenvolver um site profissional para um cliente internacional que transmitisse confiabilidade e qualidade, facilitando o agendamento de serviços e destacando os diferenciais da empresa.",
    solution:
      "Design moderno com paleta de cores vibrantes, estrutura de informações clara, formulário de contato otimizado e apresentação visual dos serviços oferecidos.",
    colors: ["#43BDEC", "#9BC757", "#68696B", "#C4C4C4"],
    tags: ["UI Design", "Web Design", "Desenvolvimento Web"],
    bgColor: "bg-white",
    images: [
      anasCleaningServices,
    ],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl mb-6">Projetos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada projeto é uma história única de desafios superados e soluções criativas
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}