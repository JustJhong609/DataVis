import type { DashboardData } from '../types';

export const dashboardData: DashboardData = {
  // Active Players Over Time
  salesTrends: [
    { timestamp: 'Jan', value: 125000 },
    { timestamp: 'Feb', value: 142000 },
    { timestamp: 'Mar', value: 138000 },
    { timestamp: 'Apr', value: 165000 },
    { timestamp: 'May', value: 189000 },
    { timestamp: 'Jun', value: 210000 },
    { timestamp: 'Jul', value: 245000 },
    { timestamp: 'Aug', value: 238000 },
    { timestamp: 'Sep', value: 272000 },
    { timestamp: 'Oct', value: 295000 },
  ],

  // Daily Active Users Growth
  userAnalytics: [
    { timestamp: 'Jan', value: 45000 },
    { timestamp: 'Feb', value: 52000 },
    { timestamp: 'Mar', value: 49000 },
    { timestamp: 'Apr', value: 61000 },
    { timestamp: 'May', value: 72000 },
    { timestamp: 'Jun', value: 85000 },
    { timestamp: 'Jul', value: 98000 },
    { timestamp: 'Aug', value: 94000 },
    { timestamp: 'Sep', value: 108000 },
    { timestamp: 'Oct', value: 125000 },
  ],

  // Game Genre Popularity
  categoryComparison: [
    { label: 'Battle Royale', value: 285000 },
    { label: 'MOBA', value: 235000 },
    { label: 'FPS', value: 198000 },
    { label: 'RPG', value: 165000 },
    { label: 'Racing', value: 98000 },
    { label: 'Sports', value: 76000 },
  ],

  // Player Platform Distribution
  trafficSources: [
    { label: 'PC', value: 45 },
    { label: 'PlayStation', value: 28 },
    { label: 'Xbox', value: 15 },
    { label: 'Nintendo Switch', value: 8 },
    { label: 'Mobile', value: 4 },
  ],

  // Server Region Distribution
  distributionData: [
    { label: 'North America', value: 35 },
    { label: 'Europe', value: 30 },
    { label: 'Asia', value: 25 },
    { label: 'South America', value: 7 },
    { label: 'Oceania', value: 3 },
  ],

  // Tournament Prize Pools by Game
  revenueByProduct: [
    { label: 'Valorant', value: 1250000 },
    { label: 'Dota 2', value: 2100000 },
    { label: 'CS:GO', value: 1850000 },
    { label: 'League of Legends', value: 1950000 },
  ],

  // Gaming Performance Indicators
  metrics: [
    {
      title: 'Players Online',
      value: '295.8K',
      change: 18.5,
      icon: '🎮',
      color: '#4f46e5',
      status: 'online',
      realTime: true,
    },
    {
      title: 'Server Status',
      value: 'HEALTHY',
      change: 0.1,
      icon: '🔧',
      color: '#10b981',
      status: 'online',
      realTime: true,
    },
    {
      title: 'Avg Queue Time',
      value: '42s',
      change: -8.2,
      icon: '⏱️',
      color: '#0ea5e9',
      realTime: true,
    },
    {
      title: 'Active Matches',
      value: '35.4K',
      change: 15.3,
      icon: '⚔️',
      color: '#8b5cf6',
      realTime: true,
    },
    {
      title: 'Tournament Views',
      value: '1.6M',
      change: 42.7,
      icon: '👁️',
      color: '#6366f1',
      realTime: true,
    },
    {
      title: 'Win Rate',
      value: '54.2%',
      change: 3.8,
      icon: '🏆',
      color: '#f59e0b',
    },
  ],

  // Top Games Performance Table
  tableData: [
    { game: 'Valorant', players: 125000, revenue: '$2.8M', growth: '+25%' },
    { game: 'Apex Legends', players: 98000, revenue: '$2.1M', growth: '+18%' },
    { game: 'CS:GO', players: 87000, revenue: '$1.9M', growth: '+15%' },
    { game: 'Dota 2', players: 76000, revenue: '$3.2M', growth: '+22%' },
    { game: 'League of Legends', players: 142000, revenue: '$4.5M', growth: '+28%' },
    { game: 'Fortnite', players: 156000, revenue: '$3.8M', growth: '+20%' },
    { game: 'Overwatch 2', players: 92000, revenue: '$1.7M', growth: '+12%' },
    { game: 'Rocket League', players: 68000, revenue: '$1.2M', growth: '+8%' },
  ],

  // Server Status by Region
  serverStatuses: [
    { name: 'NA East', status: 'Healthy', latency: 18, players: 52000 },
    { name: 'NA West', status: 'Healthy', latency: 25, players: 48000 },
    { name: 'EU', status: 'Healthy', latency: 12, players: 89000 },
    { name: 'Asia', status: 'Degraded', latency: 156, players: 78000 },
    { name: 'Oceania', status: 'Healthy', latency: 8, players: 28000 },
  ],

  // Live Match Data
  liveMatches: {
    activeMatches: 15420,
    queueTime: '12s',
  },

  // Esports Tournaments
  esportsTournaments: [
    { name: 'Valorant Champions', game: 'Valorant', prizePool: '$2.5M', status: 'Live', viewers: 385000 },
    { name: 'The International', game: 'Dota 2', prizePool: '$40M', status: 'Upcoming', viewers: 0 },
    { name: 'League Worlds', game: 'League of Legends', prizePool: '$6.2M', status: 'Live', viewers: 1240000 },
    { name: 'CS:GO Major', game: 'CS:GO', prizePool: '$1.8M', status: 'Concluded', viewers: 0 },
  ],

  // Game Modes
  gameModes: [
    { name: 'Battle Royale', activePlayers: 125000, avgMatchTime: '18m' },
    { name: 'Team Deathmatch', activePlayers: 89000, avgMatchTime: '8m' },
    { name: 'Capture the Flag', activePlayers: 45000, avgMatchTime: '12m' },
    { name: 'Ranked', activePlayers: 78000, avgMatchTime: '25m' },
  ],

  // Regional Distribution
  regionalDistribution: [
    { region: 'NA East', players: 52000, latency: 18, serverStatus: 'Healthy' },
    { region: 'NA West', players: 48000, latency: 25, serverStatus: 'Healthy' },
    { region: 'Europe', players: 89000, latency: 12, serverStatus: 'Healthy' },
    { region: 'Asia', players: 78000, latency: 156, serverStatus: 'Degraded' },
    { region: 'Oceania', players: 28000, latency: 8, serverStatus: 'Healthy' },
  ],
};

