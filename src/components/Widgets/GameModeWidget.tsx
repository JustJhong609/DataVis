import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { GameMode } from '../../types';

interface GameModeWidgetProps {
  gameModes: GameMode[];
}

const ModeContainer = styled(motion.div)`
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

const ModeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ModeItem = styled(motion.div)`
  background: rgba(26, 10, 15, 0.5);
  border-radius: 12px;
  padding: 1.25rem;
  border: 1px solid rgba(255, 0, 53, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 0, 53, 0.3);
    box-shadow: 0 6px 20px rgba(255, 0, 53, 0.2);
    transform: translateX(5px);
  }
`;

const ModeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ModeName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
`;

const ModeStats = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 0.85rem;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const StatLabel = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatValue = styled.span`
  color: #fff;
  font-weight: 600;
`;

const PlayerBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 0.75rem;
  position: relative;
`;

const PlayerBarFill = styled(motion.div)<{ percentage: number }>`
  height: 100%;
  background: linear-gradient(90deg, #ff0035 0%, #ff6b88 100%);
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(255, 0, 53, 0.5);
  width: ${props => props.percentage}%;
`;

const GameModeWidget: React.FC<GameModeWidgetProps> = ({ gameModes }) => {
  const maxPlayers = Math.max(...gameModes.map(mode => mode.activePlayers));

  const formatPlayers = (players: number) => {
    if (players >= 1000) {
      return `${(players / 1000).toFixed(1)}K`;
    }
    return players.toString();
  };

  return (
    <ModeContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>
        <span>🎮</span> Game Modes
      </Title>
      <ModeList>
        {gameModes.map((mode, index) => {
          const percentage = (mode.activePlayers / maxPlayers) * 100;
          
          return (
            <ModeItem
              key={mode.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <ModeHeader>
                <ModeName>{mode.name}</ModeName>
                <ModeStats>
                  <StatItem>
                    <StatLabel>Players</StatLabel>
                    <StatValue>{formatPlayers(mode.activePlayers)}</StatValue>
                  </StatItem>
                  <StatItem>
                    <StatLabel>Avg Match</StatLabel>
                    <StatValue>{mode.avgMatchTime}</StatValue>
                  </StatItem>
                </ModeStats>
              </ModeHeader>
              <PlayerBar>
                <PlayerBarFill
                  percentage={percentage}
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                />
              </PlayerBar>
            </ModeItem>
          );
        })}
      </ModeList>
    </ModeContainer>
  );
};

export default GameModeWidget;
