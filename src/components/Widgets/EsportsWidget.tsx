import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { EsportsTournament } from '../../types';

interface EsportsWidgetProps {
  tournaments: EsportsTournament[];
}

const TournamentContainer = styled(motion.div)`
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

const TournamentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TournamentCard = styled(motion.div)`
  background: rgba(26, 10, 15, 0.5);
  border-radius: 12px;
  padding: 1.25rem;
  border: 1px solid rgba(255, 0, 53, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateX(5px);
    border-color: rgba(255, 0, 53, 0.4);
    box-shadow: 0 8px 24px rgba(255, 0, 53, 0.3);
  }
`;

const TournamentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

const TournamentName = styled.div`
  font-weight: 700;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const GameName = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 0.3rem 0.7rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${props => 
    props.status === 'Live' ? 'rgba(255, 0, 53, 0.2)' : 
    props.status === 'Upcoming' ? 'rgba(255, 215, 0, 0.2)' : 
    'rgba(128, 128, 128, 0.2)'
  };
  color: ${props => 
    props.status === 'Live' ? '#ff0035' : 
    props.status === 'Upcoming' ? '#ffd700' : 
    '#888'
  };
  border: 1px solid ${props => 
    props.status === 'Live' ? 'rgba(255, 0, 53, 0.4)' : 
    props.status === 'Upcoming' ? 'rgba(255, 215, 0, 0.4)' : 
    'rgba(128, 128, 128, 0.4)'
  };

  ${props => props.status === 'Live' && `
    &::before {
      content: '●';
      margin-right: 0.3rem;
      animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
  `}
`;

const TournamentStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const StatLabel = styled.span`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatValue = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const ViewersCount = styled.span`
  color: #ff0035;
  font-weight: 700;
`;

const EsportsWidget: React.FC<EsportsWidgetProps> = ({ tournaments }) => {
  const formatViewers = (viewers: number) => {
    if (viewers >= 1000000) {
      return `${(viewers / 1000000).toFixed(1)}M`;
    }
    if (viewers >= 1000) {
      return `${(viewers / 1000).toFixed(1)}K`;
    }
    return viewers.toString();
  };

  return (
    <TournamentContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>
        <span>🏆</span> Esports Tournaments
      </Title>
      <TournamentList>
        {tournaments.map((tournament, index) => (
          <TournamentCard
            key={tournament.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <TournamentHeader>
              <div>
                <TournamentName>{tournament.name}</TournamentName>
                <GameName>{tournament.game}</GameName>
              </div>
              <StatusBadge status={tournament.status}>
                {tournament.status}
              </StatusBadge>
            </TournamentHeader>
            <TournamentStats>
              <StatItem>
                <StatLabel>Prize Pool</StatLabel>
                <StatValue>💰 {tournament.prizePool}</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Viewers</StatLabel>
                <StatValue>
                  👁️ <ViewersCount>{formatViewers(tournament.viewers)}</ViewersCount>
                </StatValue>
              </StatItem>
            </TournamentStats>
          </TournamentCard>
        ))}
      </TournamentList>
    </TournamentContainer>
  );
};

export default EsportsWidget;
