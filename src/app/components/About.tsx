import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const education = [
  {
    degree: "Ensino superior completo em Análise e Desenvolvimento de Sistemas",
  },
  {
    degree: "Pós-graduação em Análise de Sistemas",
  },
  {
    degree: "Certificação Design Thinking Empresarial (IBM)",
  },
];

const experience = [
  "Design UI/UX",
  "Layouts para Landing Pages, sites e aplicativos",
  "Desenvolvimento de páginas web",
  "Criativos para mídia online e redes sociais",
  "Edição de imagens",
  "Front End Developer",
];

const skills = [
  "FIGMA",
  "Adobe Photoshop",
  "HTML",
  "JavaScript",
  "CSS",
  "UI/UX design",
  "Design responsivo",
  "Design System",
  "Design Thinking",
];

export function About() {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-center">Sobre Mim</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Olá! Meu nome é Simone Teles, sou uma designer apaixonada por criar experiências digitais que fazem a diferença. 
            Trabalho transformando ideias complexas em interfaces intuitivas e visualmente atraentes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl">Formação</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4">
                  <p className="text-gray-700 leading-relaxed">{item.degree}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Briefcase className="text-green-600" size={24} />
              </div>
              <h3 className="text-2xl">Experiência</h3>
            </div>
            <ul className="space-y-3">
              {experience.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Award className="text-purple-600" size={24} />
              </div>
              <h3 className="text-2xl">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}