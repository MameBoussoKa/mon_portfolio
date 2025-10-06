import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import * as Icons from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-primary-900 text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              MAME DIARRA BOUSSO KA
            </h3>
            <p className="text-accent">
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
                    className="text-accent hover:text-primary transition-colors"
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
                    className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-accent pt-8 text-center">
          <p className="text-accent flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Mame Diarra Bousso Ka
          </p>
          <p className="text-accent text-sm mt-2">
            © {new Date().getFullYear()} Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
