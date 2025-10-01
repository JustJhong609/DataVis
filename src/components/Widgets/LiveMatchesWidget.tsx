import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { LiveMatchData } from '../../types';

interface LiveMatchesWidgetProps {
  data: LiveMatchData;
}

const MatchContainer = styled(motion.div)`
  background: rgba(10, 10, 15, 0.6);
  backdrop-filter: blur(20px);
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 1.5rem;
  border: 1px solid rgba(255, 0, 53, 0.2);
  box-shadow: ${props => props.theme.shadows.md};
`;

const Title = styled.h3`
  margin: 0 0 1.5rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff0035 0%, #ff6b88 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(26, 10, 15, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 0, 53, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 0, 53, 0.4);
    box-shadow: 0 10px 30px rgba(255, 0, 53, 0.3);
  }
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

const LiveIndicator = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  color: #ff0035;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;

  &::before {
    content: '●';
    margin-right: 0.3rem;
    animation: blink 1.5s ease-in-out infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

const QueueBadge = styled.div<{ fast: boolean }>`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${props => props.fast ? 
    'linear-gradient(135deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 255, 136, 0.1) 100%)' : 
    'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.1) 100%)'
  };
  color: ${props => props.fast ? '#00ff88' : '#ffd700'};
  border: 1px solid ${props => props.fast ? 'rgba(0, 255, 136, 0.3)' : 'rgba(255, 215, 0, 0.3)'};
  margin-top: 0.5rem;
`;

const LiveMatchesWidget: React.FC<LiveMatchesWidgetProps> = ({ data }) => {
  const queueTimeSeconds = parseInt(data.queueTime);
  const isFastQueue = queueTimeSeconds < 30;

  return (
    <MatchContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>
        <span>⚔️</span> Live Matches
        <LiveIndicator
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          LIVE
        </LiveIndicator>
      </Title>
      <StatsGrid>
        <StatCard
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <StatLabel>Active Matches</StatLabel>
          <StatValue>
            {(data.activeMatches / 1000).toFixed(1)}K
          </StatValue>
        </StatCard>
        <StatCard
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <StatLabel>Queue Time</StatLabel>
          <StatValue>
            {data.queueTime}
            <QueueBadge fast={isFastQueue}>
              {isFastQueue ? '🟢 Fast' : '🟡 Normal'}
            </QueueBadge>
          </StatValue>
        </StatCard>
      </StatsGrid>
    </MatchContainer>
  );
};

export default LiveMatchesWidget;
