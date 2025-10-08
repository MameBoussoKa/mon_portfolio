import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Projects = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<string>('All');
  const categories = [
    translations[language].projects.all,
    translations[language].projects.webApp,
    translations[language].projects.eCommerce,
    translations[language].projects.mobile,
    translations[language].projects.backend,
    translations[language].projects.api,
    translations[language].projects.frontend
  ];

  const filteredProjects = filter === translations[language].projects.all
    ? projects
    : projects.filter(project => project.category === filter);



  return (
    <section id="projects" className="py-20 bg-cream dark:bg-primary transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary dark:text-cream" style={{ fontFamily: 'Playfair Display, serif' }}>
            {translations[language].projects.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-primary dark:text-accent max-w-2xl mx-auto">
            {translations[language].projects.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary text-cream shadow-lg scale-105'
                  : 'bg-cream dark:bg-primary text-primary dark:text-accent hover:bg-accent dark:hover:bg-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredProjects.map((project, index) => {
             // Get translated project data based on project ID
             const getTranslatedProject = (id: number) => {
               const projectKeys = [
                 'delicesMadibo', 'gestionSalaires', 'whatsappClone', 'gestionODC',
                 'senelecApp', 'gargaisonAPI', 'appDaff', 'packageCore'
               ];
               const key = projectKeys[id - 1];
               return key ? translations[language].projectsData[key as keyof typeof translations.fr.projectsData] : null;
             };

             const translatedProject = getTranslatedProject(project.id);

             return (
               <motion.div
                 key={project.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-cream dark:bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
               >
                 {/* Bannière avec image de fond */}
                 <div
                   className="relative h-48 bg-cover bg-center bg-no-repeat"
                   style={{ backgroundImage: `url(${project.image})` }}
                 >
                   <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                   <div className="absolute inset-0 flex items-center justify-center p-6">
                     <h3 className="text-2xl font-bold text-white text-center">
                       {translatedProject?.title || project.title}
                     </h3>
                   </div>
                 </div>

                 <div className="p-6">
                   {/* Badge de catégorie */}
                   <span className="inline-block px-3 py-1 bg-accent dark:bg-primary text-primary dark:text-accent text-sm font-medium rounded-full mb-4">
                     {project.category}
                   </span>

                   <p className="text-primary dark:text-accent mb-6 line-clamp-3">
                     {translatedProject?.description || project.description}
                   </p>

                {/* Technologies utilisées */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                    className="px-2 py-1 bg-accent dark:bg-primary text-primary dark:text-accent text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary dark:bg-accent text-cream rounded-lg hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>{translations[language].projects.code}</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-cream rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{translations[language].projects.demo}</span>
                    </a>
                  )}
                </div>

                {/* Informations du tuteur */}
                <div className="mt-4 pt-4 border-t border-accent dark:border-primary">
                  <div className="text-sm text-primary dark:text-accent">
                    <p className="font-medium">{translations[language].projects.tutorSupervisor}:</p>
                    <p className="text-cream dark:text-primary">{project.tutor}</p>
                    <p className="text-primary dark:text-accent">{project.tutorContact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
