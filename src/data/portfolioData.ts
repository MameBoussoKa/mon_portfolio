import { Project, SkillCategory, SocialLink } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Les Délices de Madibo',
    description: 'Application web de commande en ligne pour beignets et snacks. Utilisée par des apprenants avec gestion complète des commandes et suivi utilisateurs.',
    technologies: ['React', 'TailwindCSS', 'Express', 'JWT', 'Node.js'],
    category: 'E-commerce',
    githubLink: 'https://github.com/mamediarra',
    tutor: 'Moustapha Diop',
    tutorContact: '+221 77 123 45 67'
  },
  {
    id: 2,
    title: 'Gestion des Salaires',
    description: 'Application web complète pour la gestion des employés avec authentification sécurisée, génération de fiches de paie et justificatifs.',
    technologies: ['Node.js', 'Express', 'Prisma', 'TypeScript', 'JWT', 'Zod'],
    category: 'Web App',
    githubLink: 'https://github.com/mamediarra',
    tutor: 'Abdou Khadre Diallo',
    tutorContact: '+221 78 234 56 78'
  },
  {
    id: 3,
    title: 'Clone WhatsApp Web',
    description: 'Interface de chat responsive avec fonctionnalités temps réel. Backend JSON Server déployé sur Render et frontend sur Vercel.',
    technologies: ['JavaScript', 'TailwindCSS', 'JSON Server'],
    category: 'Web App',
    githubLink: 'https://github.com/mamediarra',
    liveLink: 'https://whatsapp-clone-demo.vercel.app',
    tutor: 'Cheikh Tidiane Fall',
    tutorContact: '+221 77 345 67 89'
  },
  {
    id: 4,
    title: 'Gestion ODC Backend',
    description: 'Backend robuste pour Orange Digital Center : gestion des promotions, référentiels et apprenants avec API RESTful complète.',
    technologies: ['Node.js', 'Express', 'JSON', 'TypeScript'],
    category: 'Backend',
    githubLink: 'https://github.com/mamediarra',
    tutor: 'Mamadou Lamine Seck',
    tutorContact: '+221 76 456 78 90'
  },
  {
    id: 5,
    title: 'Application Senelec',
    description: 'Application de gestion interne pour Senelec avec modules utilisateurs, services et facturation. Base de données PostgreSQL.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'React'],
    category: 'Web App',
    githubLink: 'https://github.com/mamediarra',
    tutor: 'Fatou Bintou Sarr',
    tutorContact: '+221 77 567 89 01'
  },
  {
    id: 6,
    title: 'Gargaison API',
    description: 'API RESTful pour la gestion des ressources et commandes avec authentification et validation des données.',
    technologies: ['Node.js', 'Express', 'JWT', 'MongoDB'],
    category: 'API',
    githubLink: 'https://github.com/mamediarra',
    tutor: 'Ousmane Dieng',
    tutorContact: '+221 78 678 90 12'
  },
  {
    id: 7,
    title: 'AppDaff',
    description: 'Application mobile/web pour petites commandes avec système de notifications utilisateurs en temps réel.',
    technologies: ['React', 'TailwindCSS', 'Node.js', 'Express'],
    category: 'Mobile',
    githubLink: 'https://github.com/mamediarra',
    tutor: 'Aissatou Diallo',
    tutorContact: '+221 77 789 01 23'
  },
  {
    id: 8,
    title: 'Package Core',
    description: 'Package réutilisable pour opérations communes dans plusieurs projets. Validation avec Zod et TypeScript strict.',
    technologies: ['TypeScript', 'Zod', 'Node.js'],
    category: 'Backend',
    githubLink: 'https://github.com/mamediarra',
    tutor: 'Ibrahima Ndiaye',
    tutorContact: '+221 76 890 12 34'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: '⚛️', level: 90 },
      { name: 'TypeScript', icon: '📘', level: 85 },
      { name: 'TailwindCSS', icon: '🎨', level: 95 },
      { name: 'JavaScript', icon: '⚡', level: 90 },
      { name: 'HTML/CSS', icon: '🌐', level: 95 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢', level: 88 },
      { name: 'Express', icon: '🚂', level: 90 },
      { name: 'PHP', icon: '🐘', level: 75 },
      { name: 'Prisma', icon: '🔷', level: 80 },
      { name: 'JWT', icon: '🔐', level: 85 }
    ]
  },
  {
    title: 'Bases de données',
    skills: [
      { name: 'MySQL', icon: '🐬', level: 82 },
      { name: 'PostgreSQL', icon: '🐘', level: 78 },
      { name: 'MongoDB', icon: '🍃', level: 75 },
      { name: 'JSON Server', icon: '📄', level: 88 }
    ]
  },
  {
    title: 'DevOps & Outils',
    skills: [
      { name: 'Git/GitHub', icon: '🔀', level: 90 },
      { name: 'Docker', icon: '🐳', level: 70 },
      { name: 'VS Code', icon: '💻', level: 95 },
      { name: 'Vercel', icon: '▲', level: 85 }
    ]
  },
  {
    title: 'Design',
    skills: [
      { name: 'Figma', icon: '🎭', level: 80 },
      { name: 'Canva', icon: '🖌️', level: 85 },
      { name: 'Photoshop', icon: '🖼️', level: 75 }
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: 'Github',
    url: 'https://github.com/mamediarra',
    color: '#181717'
  },
  {
    name: 'LinkedIn',
    icon: 'Linkedin',
    url: 'https://linkedin.com/in/mamediarra',
    color: '#0A66C2'
  },
  {
    name: 'Email',
    icon: 'Mail',
    url: 'mailto:kamamediarra2002@gmail.com',
    color: '#EA4335'
  },
  {
    name: 'WhatsApp',
    icon: 'MessageCircle',
    url: 'https://wa.me/221785942490',
    color: '#25D366'
  },
  {
    name: 'YouTube',
    icon: 'Youtube',
    url: 'https://youtube.com/@mamediarra',
    color: '#FF0000'
  },
  {
    name: 'TikTok',
    icon: 'Music',
    url: 'https://tiktok.com/@mamediarra',
    color: '#000000'
  }
];

export const profileData = {
  name: 'Mame Diarra Bousso Ka',
  title: 'Développeuse Web & Mobile Full-Stack',
  location: 'Thiès, Sénégal',
  phone: '+221 78 594 24 90',
  email: 'kamamediarra2002@gmail.com',
  bio: "Développeuse web & mobile passionnée, spécialisée dans la création d'applications modernes, performantes et sécurisées. Curieuse et créative, je combine mes compétences techniques avec un esprit entrepreneurial : j'ai conçu et déployé une application de commande en ligne (Les Délices de Madibo) utilisée par des apprenants, prouvant ma capacité à transformer une idée en solution digitale concrète et utile.",
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61876.44290392695!2d-16.96335!3d14.789581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173f1d0d8d581%3A0x7f0a4b78a8e9b8de!2sThi%C3%A8s%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2ssn!4v1234567890'
};
