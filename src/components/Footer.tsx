import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import * as Icons from 'lucide-react';
import { socialLinks, profileData } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-800 to-primary-900 text-cream py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-accent via-cream to-accent bg-clip-text text-transparent"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              MAME DIARRA BOUSSO KA
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-accent mb-6 leading-relaxed"
            >
              {translations[language].footer.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-2 text-accent"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{profileData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{profileData.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{profileData.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-accent">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: translations[language].nav.home, href: '#home' },
                { name: translations[language].nav.about, href: '#about' },
                { name: translations[language].nav.skills, href: '#skills' },
                { name: translations[language].nav.projects, href: '#projects' },
                { name: translations[language].nav.contact, href: '#contact' }
              ].map((item, index) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-cream/80 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-accent">{translations[language].footer.followMe}</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = Icons[social.icon as keyof typeof Icons] as any;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 border border-accent/30"
                  >
                    <Icon className="w-5 h-5 text-accent" />
                  </motion.a>
                );
              })}
            </div>
            <div className="text-accent/80 text-sm">
              <p>Connect with me on social media</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-accent/30 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-accent flex items-center gap-2 text-sm">
              {translations[language].footer.madeWith}
              <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
              Mame Diarra Bousso Ka
            </p>
            <p className="text-accent/80 text-sm">
              © {new Date().getFullYear()} {translations[language].footer.rights}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
