import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import profileImage from "figma:asset/71705caf6780a66e9c672155e3e4a096136f73e9.png";

export function Hero() {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:from-black md:via-black/95 md:to-black/40 z-10" />
        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover object-[75%_center] md:object-center opacity-60"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-20">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-7xl md:text-9xl mb-8 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            UI/UX
            <br />
            <span className="text-transparent [-webkit-text-stroke:2px_white]">
              DESIGNER
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Criando experiências digitais memoráveis através de design centrado no usuário
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors text-lg text-center"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-colors text-lg text-center"
            >
              Entre em Contato
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-white opacity-50" size={32} />
      </motion.div>
    </section>
  );
}