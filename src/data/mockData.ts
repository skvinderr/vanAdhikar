import { User, Stat, VerificationItem, Patta } from '../types';

export const mockUsers: Record<string, User> = {
  district: { 
    name: 'Dr. Ananya Sharma', 
    role: 'district', 
    district: 'Bastar, Chhattisgarh' 
  },
  state: { 
    name: 'Mr. Rajeev Verma', 
    role: 'state', 
    state: 'Chhattisgarh' 
  },
  operator: { 
    name: 'Sunita Kumari', 
    role: 'operator' 
  },
};

export const mockDistrictStats: Stat[] = [
  { label: 'Total Claims', value: '12,456' },
  { 
    label: 'Claims Approved', 
    value: '9,872', 
    change: '+5%', 
    changeType: 'increase' 
  },
  { label: 'Claims Pending', value: '1,584' },
  { label: 'Area Granted (Hectares)', value: '24,500 Ha' },
];

export const mockStateStats: Stat[] = [
  { label: 'Total Claims (State)', value: '1,52,800' },
  { label: 'Total Area Granted (Ha)', value: '3,15,200 Ha' },
  { label: 'Districts Covered', value: '28 / 28' },
  { 
    label: 'Implementation Rate', 
    value: '81%', 
    change: '+2%', 
    changeType: 'increase' 
  },
];

export const mockVerificationQueue: VerificationItem[] = [
  { id: 'DOC-00123', village: 'Kondagaon', status: 'Pending Review' },
  { id: 'DOC-00124', village: 'Jagdalpur', status: 'Flagged: Low Quality' },
  { id: 'DOC-00125', village: 'Narayanpur', status: 'Pending Review' },
];

export const mockPattaData: Record<string, Patta> = {
  'patta-1': {
    id: 'BSTR-101-IFR-045',
    holder: 'Manglu Ram',
    familyMembers: 5,
    area: '4.2 Hectares',
    status: 'Approved',
    assets: [
      { type: 'Agricultural Land', value: '3.8 Ha (Paddy, Maize)' },
      { type: 'Water Source', value: '1 Dug Well (Functional)' },
      { type: 'Homestead', value: '1 Pucca House' }
    ],
  },
  'patta-2': {
    id: 'BSTR-102-IFR-091',
    holder: 'Budhri Bai',
    familyMembers: 3,
    area: '2.5 Hectares',
    status: 'Approved',
    assets: [
      { type: 'Agricultural Land', value: '2.5 Ha (Millet)' },
      { type: 'Water Source', value: 'None' },
      { type: 'Homestead', value: '1 Kutcha House' }
    ],
  }
};
