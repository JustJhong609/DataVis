export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface TimeSeriesDataPoint {
  timestamp: string;
  value: number;
}

export interface MetricData {
  title: string;
  value: string;
  change: number;
  icon: string;
  color: string;
  status?: 'online' | 'offline' | 'degraded';
  realTime?: boolean;
}

export interface ServerStatus {
  name: string;
  status: 'Healthy' | 'Degraded' | 'Offline';
  latency: number;
  players: number;
}

export interface LiveMatchData {
  activeMatches: number;
  queueTime: string;
}

export interface EsportsTournament {
  name: string;
  game: string;
  prizePool: string;
  status: 'Live' | 'Upcoming' | 'Concluded';
  viewers: number;
}

export interface GameMode {
  name: string;
  activePlayers: number;
  avgMatchTime: string;
}

export interface RegionalData {
  region: string;
  players: number;
  latency: number;
  serverStatus: 'Healthy' | 'Degraded' | 'Offline';
}

export interface TableRow {
  [key: string]: string | number;
}

export type WidgetType = 'line-chart' | 'bar-chart' | 'pie-chart' | 'metric' | 'table' | 'server-status' | 'live-matches';

export interface Widget {
  id: string;
  type: WidgetType;
  title: string;
  data: any;
  visible: boolean;
  gridArea?: string;
}

export interface DashboardData {
  salesTrends: TimeSeriesDataPoint[];
  categoryComparison: ChartDataPoint[];
  distributionData: ChartDataPoint[];
  metrics: MetricData[];
  tableData: TableRow[];
  userAnalytics: TimeSeriesDataPoint[];
  trafficSources: ChartDataPoint[];
  revenueByProduct: ChartDataPoint[];
  serverStatuses: ServerStatus[];
  liveMatches: LiveMatchData;
  esportsTournaments: EsportsTournament[];
  gameModes: GameMode[];
  regionalDistribution: RegionalData[];
}
