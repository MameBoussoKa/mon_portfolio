import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { profileData, socialLinks } from '../data/portfolioData';
import * as Icons from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-mame-diarra-ka.pdf';
    link.download = 'CV_Mame_Diarra_Bousso_Ka.pdf';
    link.click();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/Image collée.png')" }}
    >
      <div className="absolute inset-0 bg-black/90"></div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        style={{ y, opacity }}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <img
                src="/Image collée.png"
                alt="Mame Diarra Bousso Ka"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-primary shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-primary tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {profileData.name}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl text-accent mb-2 font-semibold italic tracking-wide"
          >
            "Code, Create, Innovate"
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-primary mb-6 font-medium tracking-wide"
          >
            {profileData.title}
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Passionnée par le développement web & mobile, je crée des applications modernes et performantes. De l'idée à la réalisation, je transforme les concepts en solutions digitales concrètes.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={handleDownloadCV}
              className="group px-8 py-4 bg-primary hover:bg-primary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Télécharger CV
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-cream text-primary border-2 border-primary rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-primary hover:text-cream"
            >
              Me Contacter
            </button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = Icons[social.icon as keyof typeof Icons] as any;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-cream shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-primary"
                  whileHover={{ y: -5 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5 text-primary group-hover:text-primary-600 transition-colors" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="text-primary hover:text-primary-600 transition-colors"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
