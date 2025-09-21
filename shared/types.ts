
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  features: string[];
  status: 'available' | 'sold' | 'pending';
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
  propertyId?: string;
  source: 'website' | 'referral' | 'advertisement';
}

export interface Investment {
  id: string;
  title: string;
  description: string;
  minInvestment: number;
  expectedReturn: number;
  duration: string;
  riskLevel: 'low' | 'medium' | 'high';
  category: 'residential' | 'commercial' | 'mixed';
  status: 'active' | 'completed' | 'upcoming';
  totalRaised: number;
  targetAmount: number;
  investors: number;
  documents: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  clientName: string;
  projectType: string;
  investment: number;
  returns: number;
  duration: string;
  beforeImage: string;
  afterImage: string;
  testimonial: string;
  results: string[];
  createdAt: Date;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle?: string;
  clientCompany?: string;
  rating: number;
  content: string;
  avatar?: string;
  featured: boolean;
  createdAt: Date;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: {
    type: 'fixed' | 'percentage' | 'custom';
    amount: number;
    currency: string;
  };
  category: 'investment' | 'management' | 'consulting' | 'development';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'investment' | 'returns' | 'risk' | 'process';
  order: number;
}

export interface CompanyInfo {
  name: string;
  description: string;
  founded: string;
  headquarters: string;
  employees: string;
  licenses: string[];
  certifications: string[];
  awards: string[];
  mission: string;
  vision: string;
  values: string[];
}

export interface ContactInfo {
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phone: string;
  email: string;
  businessHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  socialMedia: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface SearchFilters {
  query?: string;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  location?: string;
  bedrooms?: number;
  bathrooms?: number;
  areaMin?: number;
  areaMax?: number;
  features?: string[];
  sortBy?: 'price' | 'date' | 'area' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

export interface InvestmentPortfolio {
  totalInvested: number;
  currentValue: number;
  totalReturns: number;
  returnPercentage: number;
  investments: Investment[];
  performance: {
    month: string;
    value: number;
    returns: number;
  }[];
}

export interface MarketData {
  averagePrice: number;
  priceChange: number;
  totalProperties: number;
  newListings: number;
  averageDaysOnMarket: number;
  marketTrend: 'up' | 'down' | 'stable';
  topLocations: {
    name: string;
    averagePrice: number;
    growth: number;
  }[];
}

export type ComponentVariant = 
  | 'default' 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'ghost' 
  | 'destructive';

export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface AppConfig {
  name: string;
  version: string;
  description: string;
  author: string;
  contact: ContactInfo;
  company: CompanyInfo;
  features: {
    darkMode: boolean;
    analytics: boolean;
    notifications: boolean;
    realTimeUpdates: boolean;
  };
  api: {
    baseUrl: string;
    timeout: number;
    retries: number;
  };
  ui: {
    theme: ThemeMode;
    animations: boolean;
    transitions: boolean;
  };
}

