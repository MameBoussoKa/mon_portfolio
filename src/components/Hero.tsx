import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { profileData, socialLinks } from '../data/portfolioData';
import * as Icons from 'lucide-react';

const Hero = () => {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("/WhatsApp Image 2025-10-03 at 10.42.29.jpeg")' }}>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#523906]/20 dark:bg-[#523906]/20 rounded-full"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt={profileData.name}
                className="relative w-40 h-40 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-600 text-white p-2 rounded-full shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-green-700 via-green-600 to-blue-600 dark:from-green-400 dark:via-green-300 dark:to-blue-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {profileData.name}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-medium"
          >
            {profileData.title}
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {profileData.bio}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={handleDownloadCV}
              className="group px-8 py-4 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Télécharger CV
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-green-700 dark:text-green-400 border-2 border-green-700 dark:border-green-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  whileHover={{ y: -5 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
