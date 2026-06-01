// ====================================
// CONFIGURAÇÃO DE CORES DO TEMA
// ====================================
// Edite aqui para mudar as cores do site

export const colors = {
  // Cores principais
  primary: '#e91e63',        // Rosa/Vermelho principal
  secondary: '#00bcd4',      // Ciano/Azul claro

  // Backgrounds
  darkPurple: '#1a0a2e',     // Roxo escuro
  darkBlue: '#0a1a2a',       // Azul escuro
  darkest: '#0a0a1a',        // Preto azulado
  purple: '#2a0a3e',         // Roxo médio
  cardBg: '#2a1a3e',         // Fundo de cards

  // Textos
  white: '#ffffff',
  gray300: '#d1d5db',
  gray400: '#9ca3af',

  // Bordas
  borderPrimary: 'rgba(233, 30, 99, 0.2)',
  borderPrimaryHover: 'rgba(233, 30, 99, 0.5)',
  borderWhite: 'rgba(255, 255, 255, 0.1)',
};

// Gradientes
export const gradients = {
  hero: `from-[${colors.darkest}] via-[${colors.darkPurple}] to-[${colors.darkest}]`,
  heroOverlay: `from-[${colors.primary}]/20 to-transparent`,
  services: `from-[${colors.darkest}] to-[${colors.darkPurple}]`,
  card: `from-[${colors.cardBg}]/80 to-[${colors.darkPurple}]/80`,
  about: `from-[${colors.darkPurple}] via-[${colors.darkest}] to-[${colors.darkPurple}]`,
  whyUs: `from-[${colors.purple}] via-[${colors.darkPurple}] to-[${colors.darkBlue}]`,
  contact: `from-[${colors.purple}] via-[${colors.darkPurple}] to-[${colors.darkest}]`,
};
