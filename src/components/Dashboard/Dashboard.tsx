import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { LineChart } from '../Charts/LineChart';
import { BarChart } from '../Charts/BarChart';
import { PieChart } from '../Charts/PieChart';
import { MetricCard } from '../Widgets/MetricCard';
import { DataTable } from '../Widgets/DataTable';
import ServerStatusWidget from '../Widgets/ServerStatusWidget';
import LiveMatchesWidget from '../Widgets/LiveMatchesWidget';
import EsportsWidget from '../Widgets/EsportsWidget';
import GameModeWidget from '../Widgets/GameModeWidget';
import RegionalWidget from '../Widgets/RegionalWidget';
import { Footer } from '../Footer/Footer';
import { dashboardData } from '../../data/mockData';
import { theme } from '../../styles/theme';
import {
  DashboardContainer,
  DashboardHeader,
  ControlPanel,
  ToggleButton,
  WidgetGrid,
  WidgetCard,
  WidgetHeader,
  WidgetContent,
} from './Dashboard.styles';

type Category = 'overview' | 'players' | 'servers' | 'esports' | 'analytics' | 'leaderboard';

const categories: { id: Category; label: string; icon: string }[] = [
  { id: 'overview', label: 'Overview', icon: '📊' },
  { id: 'players', label: 'Player Stats', icon: '🎮' },
  { id: 'servers', label: 'Server Status', icon: '🌐' },
  { id: 'esports', label: 'Esports', icon: '🏆' },
  { id: 'analytics', label: 'Analytics', icon: '📈' },
  { id: 'leaderboard', label: 'Leaderboard', icon: '👑' },
];

export const Dashboard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('overview');
  const [liveData, setLiveData] = useState(dashboardData);

  // Simulate real-time player count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prevData => ({
        ...prevData,
        salesTrends: prevData.salesTrends.map(point => ({
          ...point,
          value: Math.max(100000, point.value + Math.floor(Math.random() * 10000 - 5000)),
        })),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <DashboardContainer>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <DashboardHeader>
            <h1>📊 Gaming Analytics Dashboard</h1>
            <p>Real-time gaming performance analytics and player statistics</p>
          </DashboardHeader>
        </motion.div>

        {/* Category Navigation */}
        <ControlPanel>
          {categories.map((category) => (
            <ToggleButton
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon} {category.label}
            </ToggleButton>
          ))}
        </ControlPanel>

        {/* Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Overview Category */}
            {activeCategory === 'overview' && (
              <>
                <motion.div style={{ marginBottom: '2rem' }}>
                  <WidgetGrid>
                    {liveData.metrics.slice(0, 4).map((metric, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <MetricCard metric={metric} />
                      </motion.div>
                    ))}
                  </WidgetGrid>
                </motion.div>

                <WidgetGrid>
                  <motion.div variants={itemVariants}>
                    <WidgetCard span={2}>
                      <WidgetHeader>
                        <h3>🎮 ACTIVE PLAYERS GROWTH</h3>
                      </WidgetHeader>
                      <WidgetContent>
                        <LineChart
                          data={liveData.salesTrends}
                          title="Monthly Active Players"
                          color="#4f46e5"
                        />
                      </WidgetContent>
                    </WidgetCard>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <WidgetCard span={2}>
                      <WidgetHeader>
                        <h3>📈 DAILY ACTIVE USERS</h3>
                      </WidgetHeader>
                      <WidgetContent>
                        <LineChart
                          data={liveData.userAnalytics}
                          title="DAU Growth Trend"
                          color="#0ea5e9"
                        />
                      </WidgetContent>
                    </WidgetCard>
                  </motion.div>
                </WidgetGrid>
              </>
            )}

            {/* Player Stats Category */}
            {activeCategory === 'players' && (
              <>
                <motion.div style={{ marginBottom: '2rem' }}>
                  <WidgetGrid>
                    {liveData.metrics.map((metric, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <MetricCard metric={metric} />
                      </motion.div>
                    ))}
                  </WidgetGrid>
                </motion.div>

                <WidgetGrid>
                  <motion.div variants={itemVariants}>
                    <WidgetCard span={2}>
                      <WidgetHeader>
                        <h3>🎮 ACTIVE PLAYERS GROWTH</h3>
                      </WidgetHeader>
                      <WidgetContent>
                        <LineChart
                          data={liveData.salesTrends}
                          title="Monthly Active Players"
                          color="#4f46e5"
                        />
                      </WidgetContent>
                    </WidgetCard>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <WidgetCard span={2}>
                      <WidgetHeader>
                        <h3>📈 DAILY ACTIVE USERS</h3>
                      </WidgetHeader>
                      <WidgetContent>
                        <LineChart
                          data={liveData.userAnalytics}
                          title="DAU Growth Trend"
                          color="#0ea5e9"
                        />
                      </WidgetContent>
                    </WidgetCard>
                  </motion.div>

                  <motion.div variants={itemVariants} style={{ gridColumn: 'span 2' }}>
                    <GameModeWidget gameModes={liveData.gameModes} />
                  </motion.div>

                  <motion.div variants={itemVariants} style={{ gridColumn: 'span 2' }}>
                    <RegionalWidget regions={liveData.regionalDistribution} />
                  </motion.div>
                </WidgetGrid>
              </>
            )}

            {/* Server Status Category */}
            {activeCategory === 'servers' && (
              <WidgetGrid>
                <motion.div variants={itemVariants} style={{ gridColumn: 'span 4' }}>
                  <ServerStatusWidget servers={liveData.serverStatuses} />
                </motion.div>

                <motion.div variants={itemVariants} style={{ gridColumn: 'span 2' }}>
                  <LiveMatchesWidget data={liveData.liveMatches} />
                </motion.div>

                <motion.div variants={itemVariants} style={{ gridColumn: 'span 2' }}>
                  <RegionalWidget regions={liveData.regionalDistribution} />
                </motion.div>
              </WidgetGrid>
            )}

            {/* Esports Category */}
            {activeCategory === 'esports' && (
              <WidgetGrid>
                <motion.div variants={itemVariants} style={{ gridColumn: 'span 4' }}>
                  <EsportsWidget tournaments={liveData.esportsTournaments} />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <WidgetCard span={2}>
                    <WidgetHeader>
                      <h3>💰 TOURNAMENT PRIZE POOLS</h3>
                    </WidgetHeader>
                    <WidgetContent>
                      <BarChart data={liveData.revenueByProduct} />
                    </WidgetContent>
                  </WidgetCard>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <WidgetCard span={2}>
                    <WidgetHeader>
                      <h3>🎮 GAME GENRE POPULARITY</h3>
                    </WidgetHeader>
                    <WidgetContent>
                      <BarChart data={liveData.categoryComparison} />
                    </WidgetContent>
                  </WidgetCard>
                </motion.div>
              </WidgetGrid>
            )}

            {/* Analytics Category */}
            {activeCategory === 'analytics' && (
              <WidgetGrid>
                <motion.div variants={itemVariants}>
                  <WidgetCard span={2}>
                    <WidgetHeader>
                      <h3>🎮 GAME GENRE POPULARITY</h3>
                    </WidgetHeader>
                    <WidgetContent>
                      <BarChart data={liveData.categoryComparison} />
                    </WidgetContent>
                  </WidgetCard>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <WidgetCard span={2}>
                    <WidgetHeader>
                      <h3>💰 TOURNAMENT PRIZE POOLS</h3>
                    </WidgetHeader>
                    <WidgetContent>
                      <BarChart data={liveData.revenueByProduct} />
                    </WidgetContent>
                  </WidgetCard>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <WidgetCard span={2}>
                    <WidgetHeader>
                      <h3>🖥️ PLATFORM DISTRIBUTION</h3>
                    </WidgetHeader>
                    <WidgetContent>
                      <PieChart data={liveData.trafficSources} />
                    </WidgetContent>
                  </WidgetCard>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <WidgetCard span={2}>
                    <WidgetHeader>
                      <h3>🌍 SERVER REGIONS</h3>
                    </WidgetHeader>
                    <WidgetContent>
                      <PieChart data={liveData.distributionData} />
                    </WidgetContent>
                  </WidgetCard>
                </motion.div>
              </WidgetGrid>
            )}

            {/* Leaderboard Category */}
            {activeCategory === 'leaderboard' && (
              <WidgetGrid>
                <motion.div variants={itemVariants} style={{ gridColumn: 'span 4' }}>
                  <WidgetCard span={4}>
                    <WidgetHeader>
                      <h3>👑 TOP GAMES LEADERBOARD</h3>
                    </WidgetHeader>
                    <WidgetContent>
                      <DataTable data={liveData.tableData} />
                    </WidgetContent>
                  </WidgetCard>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <WidgetCard span={2}>
                    <WidgetHeader>
                      <h3>🎮 GAME GENRE POPULARITY</h3>
                    </WidgetHeader>
                    <WidgetContent>
                      <BarChart data={liveData.categoryComparison} />
                    </WidgetContent>
                  </WidgetCard>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <WidgetCard span={2}>
                    <WidgetHeader>
                      <h3>💰 TOURNAMENT PRIZE POOLS</h3>
                    </WidgetHeader>
                    <WidgetContent>
                      <BarChart data={liveData.revenueByProduct} />
                    </WidgetContent>
                  </WidgetCard>
                </motion.div>
              </WidgetGrid>
            )}
          </motion.div>
        </AnimatePresence>

        <Footer />
      </DashboardContainer>
    </ThemeProvider>
  );
};
