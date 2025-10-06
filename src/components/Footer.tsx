import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import * as Icons from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              MAME DIARRA BOUSSO KA
            </h3>
            <p className="text-gray-400">
              Développeuse Web & Mobile Full-Stack passionnée par la création de solutions digitales innovantes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Accueil', 'À Propos', 'Compétences', 'Projets', 'Contact'].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${['home', 'about', 'skills', 'projects', 'contact'][index]}`}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-moi</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = Icons[social.icon as keyof typeof Icons] as any;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Mame Diarra Bousso Ka
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
