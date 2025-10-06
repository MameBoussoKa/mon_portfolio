import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import {
  Atom,
  FileText,
  Palette,
  Zap,
  Globe,
  Server,
  Route,
  Code,
  Database,
  Shield,
  FileJson,
  GitBranch,
  Container,
  Cloud,
  PenTool,
  Image,
  BookOpen,
  Monitor,
  Trophy,
  Target,
  Rocket
} from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions digitales performantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-primary pb-3">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">
                          {(() => {
                            switch (skill.icon) {
                              case 'Atom':
                                return <Atom />;
                              case 'FileText':
                                return <FileText />;
                              case 'Palette':
                                return <Palette />;
                              case 'Zap':
                                return <Zap />;
                              case 'Globe':
                                return <Globe />;
                              case 'Server':
                                return <Server />;
                              case 'Route':
                                return <Route />;
                              case 'Code':
                                return <Code />;
                              case 'Database':
                                return <Database />;
                              case 'Shield':
                                return <Shield />;
                              case 'FileJson':
                                return <FileJson />;
                              case 'GitBranch':
                                return <GitBranch />;
                              case 'Container':
                                return <Container />;
                              case 'Cloud':
                                return <Cloud />;
                              case 'PenTool':
                                return <PenTool />;
                              case 'Image':
                                return <Image />;
                              default:
                                return null;
                            }
                          })()}
                        </span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-primary dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-primary to-primary-700 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Formation</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-200 mt-1"><BookOpen /></span>
                <div>
                  <p className="font-semibold">Licence en Informatique</p>
                  <p className="text-primary-100 text-sm">Université Numérique Cheikh A Kane - 2024-2025</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-200 mt-1"><Monitor /></span>
                <div>
                  <p className="font-semibold">Certification Dev Web & Mobile</p>
                  <p className="text-primary-100 text-sm">Sonatel Academy - 2024-2025</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-200 mt-1"><Palette /></span>
                <div>
                  <p className="font-semibold">Certification Multimédia</p>
                  <p className="text-primary-100 text-sm">EDEP Thiès - 2022-2023</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Distinctions</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-200 mt-1"><Trophy /></span>
                <div>
                  <p className="font-semibold">Hackathon Hedera 2025</p>
                  <p className="text-primary-100 text-sm">Solution blockchain innovante</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-200 mt-1"><Target /></span>
                <div>
                  <p className="font-semibold">Hackathon Touba 2025</p>
                  <p className="text-primary-100 text-sm">Attestation de participation</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-200 mt-1"><Rocket /></span>
                <div>
                  <p className="font-semibold">Entrepreneuriat Digital</p>
                  <p className="text-primary-100 text-sm">Création de "Les Délices de Madibo"</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
