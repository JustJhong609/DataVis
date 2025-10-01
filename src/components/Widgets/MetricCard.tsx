import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { MetricData } from '../../types';

const MetricCardContainer = styled(motion.div)<{ color: string }>`
  background: ${props => props.theme.colors.background.glass};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.color};
    box-shadow: 0 0 20px ${props => props.color};
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px ${props => `${props.color}40`};
    border-color: ${props => props.color};
  }
`;

const IconWrapper = styled.div<{ color: string }>`
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.md};
  background: ${props => `${props.color}20`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: ${props => props.theme.spacing.md};
  border: 1px solid ${props => `${props.color}40`};
`;

const MetricTitle = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.85rem;
  margin-bottom: ${props => props.theme.spacing.xs};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LiveIndicator = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  font-size: 0.65rem;
  color: #ff0035;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.2rem 0.4rem;
  background: rgba(255, 0, 53, 0.15);
  border-radius: 8px;
  border: 1px solid rgba(255, 0, 53, 0.3);

  &::before {
    content: '●';
    margin-right: 0.3rem;
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-flex;
  align-items: center;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.2rem 0.4rem;
  border-radius: 8px;
  background: ${props => 
    props.status === 'online' ? 'rgba(0, 255, 136, 0.15)' : 
    props.status === 'degraded' ? 'rgba(255, 215, 0, 0.15)' : 
    'rgba(255, 0, 53, 0.15)'
  };
  color: ${props => 
    props.status === 'online' ? '#00ff88' : 
    props.status === 'degraded' ? '#ffd700' : 
    '#ff0035'
  };
  border: 1px solid ${props => 
    props.status === 'online' ? 'rgba(0, 255, 136, 0.3)' : 
    props.status === 'degraded' ? 'rgba(255, 215, 0, 0.3)' : 
    'rgba(255, 0, 53, 0.3)'
  };

  &::before {
    content: '●';
    margin-right: 0.3rem;
  }
`;

const MetricValue = styled.div`
  color: ${props => props.theme.colors.text.primary};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.xs};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const MetricChange = styled.div<{ positive: boolean }>`
  color: ${props => props.positive ? '#00ff88' : '#ff0035'};
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '${props => props.positive ? '↑' : '↓'}';
  }
`;

interface MetricCardProps {
  metric: MetricData;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const isPositive = metric.change > 0;
  
  return (
    <MetricCardContainer
      color={metric.color}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <IconWrapper color={metric.color}>
        {metric.icon}
      </IconWrapper>
      <MetricTitle>
        {metric.title}
        {metric.realTime && (
          <LiveIndicator
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            LIVE
          </LiveIndicator>
        )}
        {metric.status && (
          <StatusBadge status={metric.status}>
            {metric.status}
          </StatusBadge>
        )}
      </MetricTitle>
      <MetricValue>{metric.value}</MetricValue>
      <MetricChange positive={isPositive}>
        {Math.abs(metric.change)}%
      </MetricChange>
    </MetricCardContainer>
  );
};
