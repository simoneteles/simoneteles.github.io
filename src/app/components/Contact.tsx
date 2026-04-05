import { motion } from "motion/react";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl mb-6">Vamos Trabalhar Juntos?</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Estou sempre aberta a discutir novos projetos, ideias criativas ou oportunidades 
            para fazer parte da sua visão.
          </p>

          <motion.a
            href="mailto:simonebtfontenele@gmail.com"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl text-gray-800 hover:text-black transition-colors underline decoration-2 underline-offset-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Mail size={32} />
            simonebtfontenele@gmail.com
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}