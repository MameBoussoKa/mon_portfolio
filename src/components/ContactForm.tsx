import { useState, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          title: formData.title,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString()
        }
      );

      Swal.fire({
        icon: 'success',
        title: 'Message envoyé!',
        text: 'Votre message a été envoyé avec succès.',
        confirmButtonColor: '#3B82F6'
      });

      setFormData({ title: '', name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Une erreur s\'est produite lors de l\'envoi. Veuillez réessayer.',
        confirmButtonColor: '#EF4444'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-cream dark:bg-primary rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
      <div className="mb-6">
        <label htmlFor="title" className="block text-sm font-semibold text-primary dark:text-accent mb-2">
          Sujet
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-accent dark:bg-primary border border-primary dark:border-accent rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-primary dark:text-cream"
          placeholder="Sujet de votre message"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-semibold text-primary dark:text-accent mb-2">
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-accent dark:bg-primary border border-primary dark:border-accent rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-primary dark:text-cream"
          placeholder="Votre nom"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-semibold text-primary dark:text-accent mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-accent dark:bg-primary border border-primary dark:border-accent rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-primary dark:text-cream"
          placeholder="votre@email.com"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-primary dark:text-accent mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-accent dark:bg-primary border border-primary dark:border-accent rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-primary dark:text-cream resize-none"
          placeholder="Votre message..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-primary hover:bg-primary/90 text-cream font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Envoyer
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;