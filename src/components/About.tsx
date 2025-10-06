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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary dark:text-cream" style={{ fontFamily: 'Playfair Display, serif' }}>
            À Propos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl"></div>
              <img
                src="/WhatsApp Image 2025-10-03 at 10.42.29.jpeg"
                alt="Développeuse au travail"
                className="relative rounded-3xl shadow-2xl shadow-primary/20 w-full object-contain h-[500px] border-4 border-cream/50 group-hover:border-primary/30 transition-all duration-500"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-accent dark:bg-primary rounded-xl">
                <MapPin className="w-5 h-5 text-primary dark:text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary dark:text-accent">Localisation</p>
                  <p className="font-semibold text-primary dark:text-cream">{profileData.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-accent dark:bg-primary rounded-xl">
                <Phone className="w-5 h-5 text-primary dark:text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary dark:text-accent">Téléphone</p>
                  <p className="font-semibold text-primary dark:text-cream">{profileData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-accent dark:bg-primary rounded-xl sm:col-span-2">
                <Mail className="w-5 h-5 text-primary dark:text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary dark:text-accent">Email</p>
                  <p className="font-semibold text-primary dark:text-cream">{profileData.email}</p>
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
            <h3 className="text-3xl font-bold mb-6 text-primary dark:text-cream" style={{ fontFamily: 'Playfair Display, serif' }}>
              Qui suis-je ?
            </h3>

            <p className="text-primary dark:text-accent mb-6 leading-relaxed text-lg">
              {profileData.bio}
            </p>

            <p className="text-primary dark:text-accent mb-8 leading-relaxed">
              Diplômée de Sonatel Academy et actuellement en Licence à l'Université Numérique Cheikh Ahmadou Kane,
              je possède une solide formation technique enrichie par des certifications en développement web & mobile
              et en multimédia.
            </p>

            <h4 className="text-2xl font-bold mb-6 text-primary dark:text-cream">
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
                    className="flex gap-4 p-4 bg-accent dark:bg-primary rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cream" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-primary dark:text-accent">{exp.year}</span>
                        <div className="w-2 h-2 bg-primary dark:bg-accent rounded-full"></div>
                      </div>
                      <h5 className="font-bold text-primary dark:text-cream mb-1">{exp.title}</h5>
                      <p className="text-sm text-primary dark:text-accent">{exp.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-cream to-accent dark:from-primary/20 dark:to-accent/20 rounded-xl border border-primary dark:border-accent">
              <h5 className="font-bold text-primary dark:text-cream mb-3">Soft Skills</h5>
              <div className="flex flex-wrap gap-2">
                {['Leadership', 'Travail d\'équipe', 'Adaptabilité', 'Esprit entrepreneurial', 'Créativité', 'Gestion du temps'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-cream dark:bg-primary rounded-full text-sm font-medium text-primary dark:text-accent shadow-sm"
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
