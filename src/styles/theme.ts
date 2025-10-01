import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
    color: #f1f5f9;
    overflow-x: hidden;
    min-height: 100vh;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #4f46e5 0%, #7c3aed 100%);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%);
  }
`;

export const theme = {
  colors: {
    primary: '#4f46e5',       // Indigo - main brand color
    secondary: '#0ea5e9',     // Sky Blue - secondary accent
    accent: '#8b5cf6',        // Purple - subtle highlights
    success: '#10b981',       // Emerald Green - achievements, success states
    warning: '#f59e0b',       // Amber - warnings, attention
    danger: '#ef4444',        // Red - errors, critical states
    background: {
      primary: 'rgba(15, 23, 42, 0.95)',    // Slate 900 - main background
      secondary: 'rgba(30, 41, 59, 0.8)',   // Slate 800 - secondary surfaces
      glass: 'rgba(255, 255, 255, 0.05)',   // Glass effect
      card: 'rgba(51, 65, 85, 0.6)',        // Slate 700 - card backgrounds
    },
    text: {
      primary: '#f1f5f9',      // Slate 100 - primary text
      secondary: '#cbd5e1',    // Slate 300 - secondary text
      muted: '#94a3b8',        // Slate 400 - muted text
    },
    border: 'rgba(148, 163, 184, 0.2)',     // Slate 400 with transparency
    gradient: {
      primary: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',      // Indigo to Purple
      secondary: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',    // Sky to Cyan
      accent: 'linear-gradient(90deg, #8b5cf6 0%, #a78bfa 50%, #c4b5fd 100%)', // Purple variants
      dark: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',         // Dark slate
      success: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',      // Emerald
    },
  },
  shadows: {
    sm: '0 2px 8px rgba(79, 70, 229, 0.15)',
    md: '0 4px 16px rgba(79, 70, 229, 0.2)',
    lg: '0 8px 32px rgba(79, 70, 229, 0.25)',
    glow: '0 0 20px rgba(139, 92, 246, 0.4)',
    neon: '0 0 30px rgba(139, 92, 246, 0.5)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
};

export type Theme = typeof theme;
