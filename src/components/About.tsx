import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, MapPin, Mail, Phone } from 'lucide-react';
import { profileData } from '../data/portfolioData';

const About = () => {
  const experiences = [
    {
      year: '2025',
      title: 'Hackathon Hedera',
      description: 'Développement d\'une solution blockchain innovante',
      icon: Award
    },
    {
      year: '2024-2025',
      title: 'Entrepreneuriat',
      description: 'Création et lancement de l\'application Les Délices de Madibo',
      icon: Briefcase
    },
    {
      year: '2024-2025',
      title: 'Sonatel Academy',
      description: 'Certification en Développement Web & Mobile',
      icon: BookOpen
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            À Propos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Développeuse au travail"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <MapPin className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Localisation</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{profileData.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Phone className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Téléphone</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{profileData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl sm:col-span-2">
                <Mail className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{profileData.email}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Qui suis-je ?
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              {profileData.bio}
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Diplômée de Sonatel Academy et actuellement en Licence à l'Université Numérique Cheikh Ahmadou Kane,
              je possède une solide formation technique enrichie par des certifications en développement web & mobile
              et en multimédia.
            </p>

            <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Parcours & Expériences
            </h4>

            <div className="space-y-6">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-green-700 dark:text-green-400">{exp.year}</span>
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                      </div>
                      <h5 className="font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <h5 className="font-bold text-gray-900 dark:text-white mb-3">Soft Skills</h5>
              <div className="flex flex-wrap gap-2">
                {['Leadership', 'Travail d\'équipe', 'Adaptabilité', 'Esprit entrepreneurial', 'Créativité', 'Gestion du temps'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
