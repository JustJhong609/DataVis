import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  background: rgba(15, 23, 42, 0.95);
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  padding: 2rem 2rem 1.5rem;
  margin-top: 4rem;
  backdrop-filter: blur(20px);
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  background: ${props => props.theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.text.secondary};
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateX(5px);
  }
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.text.muted};
  font-size: 0.85rem;
  line-height: 1.6;
`;

const FooterBottom = styled.div`
  padding-top: 1.5rem;
  border-top: 1px solid rgba(148, 163, 184, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.text.muted};
  font-size: 0.85rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(79, 70, 229, 0.1);
  border: 1px solid rgba(79, 70, 229, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  }
`;

const TechBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.6rem;
  background: rgba(79, 70, 229, 0.1);
  border: 1px solid rgba(79, 70, 229, 0.3);
  border-radius: 6px;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <FooterContent>
        <FooterSection>
          <FooterTitle>📊 Gaming Dashboard</FooterTitle>
          <FooterText>
            Professional gaming analytics platform for real-time player statistics, 
            server monitoring, and esports tracking.
          </FooterText>
          <div style={{ marginTop: '0.5rem' }}>
            <TechBadge>⚛️ React 19</TechBadge>
            <TechBadge>📘 TypeScript</TechBadge>
            <TechBadge>📊 Chart.js</TechBadge>
            <TechBadge>✨ Framer Motion</TechBadge>
          </div>
        </FooterSection>

        <FooterSection>
          <FooterTitle>🔗 Quick Links</FooterTitle>
          <FooterLink href="#dashboard">Dashboard</FooterLink>
          <FooterLink href="#analytics">Analytics</FooterLink>
          <FooterLink href="#tournaments">Tournaments</FooterLink>
          <FooterLink href="#leaderboard">Leaderboard</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>📚 Resources</FooterTitle>
          <FooterLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub Repository →
          </FooterLink>
          <FooterLink href="#" onClick={(e) => e.preventDefault()}>
            Documentation →
          </FooterLink>
          <FooterLink href="#" onClick={(e) => e.preventDefault()}>
            API Reference →
          </FooterLink>
          <FooterLink href="#" onClick={(e) => e.preventDefault()}>
            Support →
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>⚡ Technologies</FooterTitle>
          <FooterText>
            Built with modern web technologies:
          </FooterText>
          <FooterLink href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React JS
          </FooterLink>
          <FooterLink href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">
            TypeScript
          </FooterLink>
          <FooterLink href="https://www.chartjs.org" target="_blank" rel="noopener noreferrer">
            Chart.js
          </FooterLink>
          <FooterLink href="https://www.framer.com/motion" target="_blank" rel="noopener noreferrer">
            Framer Motion
          </FooterLink>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {currentYear} Gaming Dashboard. Built with ❤️ for gamers worldwide.
        </Copyright>
        <SocialLinks>
          <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
            💻
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
            🐦
          </SocialIcon>
          <SocialIcon href="https://discord.com" target="_blank" rel="noopener noreferrer" title="Discord">
            💬
          </SocialIcon>
          <SocialIcon href="#" onClick={(e) => e.preventDefault()} title="Email">
            📧
          </SocialIcon>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
};
