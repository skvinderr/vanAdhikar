// User types
export interface User {
  name: string;
  role: 'district' | 'state' | 'operator';
  district?: string;
  state?: string;
}

// Statistics types
export interface Stat {
  label: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
}

// Verification queue types
export interface VerificationItem {
  id: string;
  village: string;
  status: string;
}

// Patta (Land rights) types
export interface Asset {
  type: string;
  value: string;
}

export interface Patta {
  id: string;
  holder: string;
  familyMembers: number;
  area: string;
  status: string;
  assets: Asset[];
}

// DSS (Decision Support System) types
export interface DSSResult {
  priority: 'High' | 'Medium' | 'Low';
  scheme: string;
  reason: string;
}

// Component props types
export interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
}

export interface HeaderProps {
  user: User;
  onLogout: () => void;
}

export interface LoginPageProps {
  onLogin: () => void;
}

export interface DashboardProps {
  user: User;
  setPage: (page: string) => void;
}
