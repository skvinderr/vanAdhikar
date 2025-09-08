# VanAdhikar Atlas

A comprehensive Forest Rights Management System for the Ministry of Tribal Affairs.

## Features

- **Multi-role Dashboard**: District, State, and Operator dashboards
- **Interactive Atlas**: Visual representation of forest rights data
- **Decision Support System**: AI-powered recommendations for beneficiaries
- **Document Management**: Upload and verification of forest rights documents
- **Real-time Statistics**: Track implementation progress across districts

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG components

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── atlas/           # Interactive map components
│   ├── auth/           # Authentication components  
│   ├── common/         # Reusable UI components
│   ├── dashboards/     # Role-specific dashboards
│   └── icons/          # SVG icon components
├── data/               # Mock data and API interfaces
├── types/              # TypeScript type definitions
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles

```

## User Roles

1. **District Officer**: Manage district-level forest rights data
2. **State Officer**: View aggregated state-wide statistics
3. **Data Operator**: Upload and verify documents

## Demo Usage

Click the login button to cycle through different user roles and experience the different dashboards and features.

## Key Components

- **Dashboard**: Role-specific statistics and navigation
- **Atlas**: Interactive map with clickable forest rights parcels
- **DSS Analysis**: Decision support system for scheme recommendations
- **Document Upload**: File management for forest rights documents
