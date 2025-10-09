import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import ContactForm from './ContactForm';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-primary dark:bg-primary-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-cream" style={{ fontFamily: 'Playfair Display, serif' }}>
            {translations[language].contact.title}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-accent max-w-2xl mx-auto">
            {translations[language].contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-cream dark:bg-primary rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-primary mb-1">{translations[language].contact.emailLabel}</h3>
              <a
                href={`mailto:${profileData.email}`}
                className="text-accent hover:underline"
              >
                {profileData.email}
              </a>
            </div>
          </div>

              <div className="flex items-start gap-4 p-6 bg-cream dark:bg-primary rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{translations[language].contact.phone}</h3>
                  <a
                    href={`tel:${profileData.phone}`}
                    className="text-primary dark:text-accent hover:underline"
                  >
                    {profileData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-cream dark:bg-primary rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{translations[language].contact.whatsapp}</h3>
                  <a
                    href="https://wa.me/221785942490"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-accent hover:underline"
                  >
                    {translations[language].contact.sendMessage}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-cream dark:bg-primary rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{translations[language].contact.location}</h3>
                  <p className="text-primary dark:text-accent">{profileData.location}</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={profileData.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
