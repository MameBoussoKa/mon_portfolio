import { motion } from 'framer-motion';
import { ExternalLink, Github, User, Phone } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Web App', 'E-commerce', 'Mobile', 'Backend', 'API', 'Frontend'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une sélection de mes réalisations les plus significatives
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
                  ? 'bg-gradient-to-r from-green-700 to-green-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-green-600 via-green-500 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      Tuteur: {project.tutor}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.tutorContact}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-700 to-green-600 text-white rounded-lg hover:from-green-800 hover:to-green-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Aucun projet trouvé dans cette catégorie
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
