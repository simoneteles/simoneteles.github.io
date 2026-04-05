import { motion } from "motion/react";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

interface ProjectCardProps {
  title: string;
  client?: string;
  year?: string;
  overview: string;
  challenge: string;
  solution: string;
  results?: string[];
  targetAudience?: string[];
  colors?: string[];
  tags: string[];
  bgColor: string;
  images: string[];
  index: number;
}

export function ProjectCard({
  title,
  client,
  year,
  overview,
  challenge,
  solution,
  results,
  targetAudience,
  colors,
  tags,
  bgColor,
  images,
  index,
}: ProjectCardProps) {
  // Split title by <br /> for styling
  const titleParts = title.split("<br />");
  const hasSubtitle = titleParts.length > 1;

  return (
    <motion.div
      className={`${bgColor} rounded-3xl overflow-hidden border border-gray-300`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="max-w-6xl mx-auto p-8 md:p-16">
        {/* Header */}
        <div className="mb-12">
          {(year || client) && (
            <div className="flex items-center justify-between mb-4">
              {year && <span className="text-sm text-gray-500 uppercase tracking-wider">{year}</span>}
              {client && <span className="text-sm text-gray-500 uppercase tracking-wider">{client}</span>}
            </div>
          )}
          {hasSubtitle ? (
            <h3 className="text-4xl md:text-5xl mb-4 leading-none">
              {titleParts[0]}
              <br />
              <span className="text-2xl md:text-3xl text-gray-500">{titleParts[1]}</span>
            </h3>
          ) : (
            <h3 className="text-4xl md:text-5xl mb-4 leading-tight">{title}</h3>
          )}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              null
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/60 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="text-orange-500" size={20} />
              <h4 className="text-lg font-semibold">Desafio</h4>
            </div>
            <p className="text-gray-700">{challenge}</p>
          </div>

          <div className="bg-white/60 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="text-green-500" size={20} />
              <h4 className="text-lg font-semibold">Solução</h4>
            </div>
            <p className="text-gray-700">{solution}</p>
          </div>
        </div>

        {/* Target Audience */}
        {targetAudience && targetAudience.length > 0 && (
          <div className="mb-12 bg-white/60 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-blue-500" size={20} />
              <h4 className="text-lg font-semibold">Público-Alvo</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {targetAudience.map((audience, idx) => (
                <span key={idx} className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm">
                  {audience}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Colors */}
        {colors && colors.length > 0 && (
          <div className="mb-12 bg-white/60 rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-4">Paleta de Cores</h4>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {colors.map((color, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg shadow-md"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-[10px] sm:text-xs text-gray-600 font-mono break-all text-center max-w-[48px] sm:max-w-[56px] md:max-w-[64px]">{color}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Images */}
        <div className="space-y-6 mb-12">
          {images.map((image, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden">
              <img src={image} alt={`${title} - Screenshot ${idx + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>

        {/* Results */}
        {results && results.length > 0 && (
          <div className="bg-white/60 rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-4">Resultados</h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {results.map((result, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}