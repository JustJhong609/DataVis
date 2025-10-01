import styled from 'styled-components';

export const DashboardContainer = styled.div`
  min-height: 100vh;
  padding: ${props => props.theme.spacing.lg};
  background: linear-gradient(135deg, #0a0a0f 0%, #14141a 100%);
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.md};
  }
`;

export const DashboardHeader = styled.header`
  margin-bottom: ${props => props.theme.spacing.xl};
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(90deg, #ff0035 0%, #ff385c 50%, #ff6b88 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${props => props.theme.spacing.sm};
    letter-spacing: 1px;
    text-transform: uppercase;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.8rem;
    }
  }
  
  p {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1rem;
  }
`;

export const ControlPanel = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xl};
  flex-wrap: wrap;
  align-items: center;
`;

export const ToggleButton = styled.button<{ active?: boolean }>`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.active 
    ? 'linear-gradient(135deg, #ff0035 0%, #d60027 100%)' 
    : props.theme.colors.background.glass};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.active 
    ? '#ff0035' 
    : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.sm};
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glow};
    border-color: ${props => props.theme.colors.primary};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const WidgetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: ${props => props.theme.breakpoints.wide}) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing.md};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const WidgetCard = styled.div<{ span?: number }>`
  background: ${props => props.theme.colors.background.glass};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  grid-column: span ${props => props.span || 1};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff0035 0%, #ff385c 50%, #ff6b88 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.lg};
    transform: translateY(-4px);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-column: span 1;
    padding: ${props => props.theme.spacing.md};
  }
`;

export const WidgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text.primary};
  }
`;

export const WidgetContent = styled.div`
  position: relative;
  min-height: 200px;
`;
