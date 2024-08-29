export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    // Nav
    'nav.portfolio': "Portfolio",
    'nav.connect': "Let's connect",

    // Footer
    'footer.adress_1': "Buenos Aires, Argentina",
    'footer.adress_2': "Valle del Aconcagua, Chile",
    'footer.rights': "All rights reserved",

    // Portfolio
    'work.ilegal.title': "Custom WordPress Theme Development - Fiesta Ilegal (2024)",
    'work.academia.title': "Online Learning Platform Development - Academia Maker (2024)",
    'work.vina.title': "Website Development - Viña del Mar Festival (2024)",
    'work.atix.title': "Academic Management Platform Development - Atix (2015)",

    // Connect
    'connect.title': "Be cool",
    'connect.subtitle': "Your data is safe and will not be added to spam lists.",
    'connect.form.social.input': "Social name",
    'connect.form.email.input': "Email",
    'connect.form.action': "Send",
    
    // Thanks
    'thanks.title': "Thank you!",
    'thanks.description': "You will soon receive an email in your inbox. Let's keep in touch :)",
    'thanks.action': "Back home",
  },
  es: {
    // Nav
    'nav.portfolio': 'Portafolio',
    'nav.connect': "Conectemos",

    // Footer
    'footer.rights': "Todos los derechos reservados",

    // Portfolio
    'work.ilegal.title': "Desarrollo Tema Personalizado WordPress - Fiesta Ilegal (2024)",
    'work.academia.title': "Desarrollo Plataforma de Aprendizaje Online - Academia Maker (2024)",
    'work.vina.title': "Desarrollo Sitio Web - Festival de Viña del Mar (2024)",
    'work.atix.title': "Desarrollo Plataforma de Gestión Académica - Atix (2015)",

    // Connect
    'connect.title': "Tranquilo",
    'connect.subtitle': "Tu información esta segura y no será añadida a listas de spam.",
    'connect.form.social.input': "Nombre social",
    'connect.form.email.input': "Correo electrónico",
    'connect.form.action': "Enviar",

    // Thanks
    'thanks.title': "Gracias!",
    'thanks.description': "Pronto recibirás un correo electrónico en tu bandeja de entrada. Estamos en contacto :)",
    'thanks.action': "Volver al inicio",
  },
} as const;

export const routes = {
  es: {
    'connect': 'connect',
    'portfolio': 'portfolio',
    'thanks': 'thanks',
  },
}

export const showDefaultLang = false;