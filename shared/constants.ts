
export const APP_CONFIG = {
  name: 'Nykson Capital',
  tagline: 'Premium Real Estate Investment Solutions',
  description: 'Your trusted partner in real estate investment, offering premium properties and exceptional returns.',
  version: '1.0.0',
  author: 'Nykson Capital Team',
  url: 'https://nyksoncapital.com',
  email: 'info@nyksoncapital.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Business District',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States'
  }
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Properties', href: '/properties' },
  { label: 'Contact', href: '/contact' }
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/nykson-capital',
  twitter: 'https://twitter.com/nyksoncapital',
  facebook: 'https://facebook.com/nyksoncapital',
  instagram: 'https://instagram.com/nyksoncapital'
} as const;

export const API_ENDPOINTS = {
  contact: '/api/contact',
  properties: '/api/properties',
  investments: '/api/investments',
  testimonials: '/api/testimonials',
  caseStudies: '/api/case-studies'
} as const;

export const FORM_VALIDATION = {
  name: {
    min: 2,
    max: 100,
    required: true
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    min: 10,
    max: 15,
    required: false,
    pattern: /^[\+]?[1-9][\d]{0,15}$/
  },
  message: {
    min: 10,
    max: 1000,
    required: true
  }
} as const;

export const UI_CONFIG = {
  animations: {
    duration: {
      fast: 150,
      normal: 300,
      slow: 500
    },
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  },
  spacing: {
    section: {
      sm: 'py-12',
      md: 'py-16',
      lg: 'py-24'
    },
    container: {
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8'
    }
  }
} as const;

export const INVESTMENT_CATEGORIES = [
  'Residential',
  'Commercial',
  'Mixed-Use',
  'Industrial',
  'Land Development',
  'REITs'
] as const;

export const RISK_LEVELS = [
  { value: 'low', label: 'Low Risk', color: 'green' },
  { value: 'medium', label: 'Medium Risk', color: 'yellow' },
  { value: 'high', label: 'High Risk', color: 'red' }
] as const;

export const PROPERTY_STATUS = [
  { value: 'available', label: 'Available', color: 'green' },
  { value: 'pending', label: 'Pending', color: 'yellow' },
  { value: 'sold', label: 'Sold', color: 'gray' }
] as const;

export const SERVICE_CATEGORIES = [
  'Investment Advisory',
  'Property Management',
  'Market Analysis',
  'Portfolio Development',
  'Risk Assessment',
  'Financial Planning'
] as const;

export const FAQ_CATEGORIES = [
  'General Information',
  'Investment Process',
  'Returns & Profits',
  'Risk Management',
  'Getting Started'
] as const;

export const TESTIMONIAL_RATINGS = [1, 2, 3, 4, 5] as const;

export const MARKET_TRENDS = [
  'Increasing Property Values',
  'High Rental Demand',
  'Growing Commercial Sector',
  'Infrastructure Development',
  'Population Growth',
  'Economic Stability'
] as const;

export const COMPANY_STATS = {
  yearsExperience: 15,
  propertiesManaged: 500,
  clientsSatisfied: 1200,
  totalInvestment: 50000000,
  averageReturn: 12.5,
  successRate: 98
} as const;

export const IMAGE_PLACEHOLDERS = {
  hero: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  property: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  team: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
} as const;

export const ERROR_MESSAGES = {
  required: 'This field is required',
  invalidEmail: 'Please enter a valid email address',
  invalidPhone: 'Please enter a valid phone number',
  minLength: (min: number) => `Must be at least ${min} characters`,
  maxLength: (max: number) => `Must be no more than ${max} characters`,
  networkError: 'Network error. Please check your connection and try again.',
  serverError: 'Server error. Please try again later.',
  notFound: 'The requested resource was not found.',
  unauthorized: 'You are not authorized to perform this action.',
  forbidden: 'Access to this resource is forbidden.'
} as const;

export const SUCCESS_MESSAGES = {
  contactSubmitted: 'Thank you for your message. We\'ll get back to you soon!',
  subscribed: 'Successfully subscribed to our newsletter!',
  bookingConfirmed: 'Your appointment has been confirmed.',
  dataUpdated: 'Information updated successfully.',
  messageSent: 'Message sent successfully!'
} as const;

export const LOADING_STATES = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error'
} as const;

export const LOCAL_STORAGE_KEYS = {
  theme: 'nykson-theme',
  preferences: 'nykson-preferences',
  recentSearches: 'nykson-recent-searches',
  favoriteProperties: 'nykson-favorites'
} as const;
