
export { APP_CONFIG, NAVIGATION_ITEMS, SOCIAL_LINKS } from '@shared/constants';

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
} as const;

export const HERO_STATS = [
  { label: 'Properties Managed', value: '500+' },
  { label: 'Happy Clients', value: '1,200+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'Success Rate', value: '98%' }
] as const;

export const SERVICES_DATA = [
  {
    id: 'investment-advisory',
    title: 'Investment Advisory',
    description: 'Expert guidance on real estate investment opportunities with personalized strategies.',
    icon: 'TrendingUp',
    features: [
      'Market Analysis',
      'Portfolio Diversification',
      'Risk Assessment',
      'ROI Optimization'
    ]
  },
  {
    id: 'property-management',
    title: 'Property Management',
    description: 'Full-service property management to maximize your investment returns.',
    icon: 'Building2',
    features: [
      'Tenant Screening',
      'Maintenance Coordination',
      'Rent Collection',
      'Financial Reporting'
    ]
  },
  {
    id: 'market-analysis',
    title: 'Market Analysis',
    description: 'Comprehensive market research and analysis for informed investment decisions.',
    icon: 'BarChart3',
    features: [
      'Market Trends',
      'Competitor Analysis',
      'Price Forecasting',
      'Investment Timing'
    ]
  }
] as const;

export const TESTIMONIALS_DATA = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Private Investor',
    content: 'Nykson Capital helped me diversify my portfolio with high-quality real estate investments. Their expertise and professionalism are unmatched.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c5b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'Real Estate Developer',
    content: 'Working with Nykson Capital has been a game-changer for our development projects. Their market insights are invaluable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Portfolio Manager',
    content: 'The team at Nykson Capital consistently delivers exceptional results. Our portfolio has grown significantly under their management.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
] as const;

export const FAQ_DATA = [
  {
    id: '1',
    question: 'What types of real estate investments do you offer?',
    answer: 'We offer a diverse range of real estate investments including residential properties, commercial real estate, mixed-use developments, and REITs. Our portfolio spans various markets and property types to provide optimal diversification.',
    category: 'general'
  },
  {
    id: '2',
    question: 'What is the minimum investment amount?',
    answer: 'Our minimum investment varies by opportunity, typically starting at $25,000 for direct property investments and $5,000 for REIT investments. We also offer fractional ownership opportunities with lower entry points.',
    category: 'investment'
  },
  {
    id: '3',
    question: 'How do you select investment properties?',
    answer: 'Our selection process involves comprehensive market analysis, due diligence, financial modeling, and risk assessment. We focus on properties with strong fundamentals, growth potential, and favorable market conditions.',
    category: 'process'
  },
  {
    id: '4',
    question: 'What returns can I expect from my investments?',
    answer: 'While returns vary by investment type and market conditions, our historical performance shows average annual returns of 8-15%. All investments carry risk, and past performance does not guarantee future results.',
    category: 'returns'
  },
  {
    id: '5',
    question: 'How do you manage investment risks?',
    answer: 'We employ various risk management strategies including thorough due diligence, diversification across markets and property types, regular monitoring, and maintaining adequate insurance coverage.',
    category: 'risk'
  }
] as const;

export const CASE_STUDIES_DATA = [
  {
    id: '1',
    title: 'Downtown Commercial Complex',
    description: 'Transformed a underperforming commercial building into a thriving mixed-use development.',
    investment: 2500000,
    returns: 3750000,
    duration: '18 months',
    clientName: 'Metro Development Group',
    projectType: 'Commercial Renovation',
    beforeImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    results: [
      '50% increase in rental income',
      '100% occupancy rate achieved',
      'Property value increased by 40%',
      'Created 25 new jobs in the area'
    ]
  },
  {
    id: '2',
    title: 'Luxury Residential Development',
    description: 'Developed a high-end residential community with premium amenities and sustainable features.',
    investment: 5000000,
    returns: 7250000,
    duration: '24 months',
    clientName: 'Greenfield Investments',
    projectType: 'Residential Development',
    beforeImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    results: [
      '45% return on investment',
      'All units sold within 6 months',
      'LEED Gold certification achieved',
      'Community amenities increased property values by 30%'
    ]
  }
] as const;

export const FEATURES_DATA = [
  {
    title: 'Expert Market Analysis',
    description: 'Comprehensive market research and data-driven insights to identify the best investment opportunities.',
    icon: 'BarChart3'
  },
  {
    title: 'Risk Management',
    description: 'Sophisticated risk assessment and mitigation strategies to protect your investments.',
    icon: 'Shield'
  },
  {
    title: 'Portfolio Diversification',
    description: 'Strategic diversification across property types, markets, and investment strategies.',
    icon: 'PieChart'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support from our dedicated team of real estate professionals.',
    icon: 'Clock'
  },
  {
    title: 'Technology Platform',
    description: 'Advanced technology platform for portfolio tracking, reporting, and investor communications.',
    icon: 'Smartphone'
  },
  {
    title: 'Transparent Reporting',
    description: 'Regular, detailed reports on portfolio performance and market conditions.',
    icon: 'FileText'
  }
] as const;

export const COMPANY_STATS = [
  { label: 'Years in Business', value: '15+', icon: 'Calendar' },
  { label: 'Properties Managed', value: '500+', icon: 'Building' },
  { label: 'Happy Clients', value: '1,200+', icon: 'Users' },
  { label: 'Total Investment', value: '$50M+', icon: 'DollarSign' },
  { label: 'Average Return', value: '12.5%', icon: 'TrendingUp' },
  { label: 'Success Rate', value: '98%', icon: 'Target' }
] as const;

export const CONTACT_METHODS = [
  {
    type: 'phone',
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    icon: 'Phone'
  },
  {
    type: 'email',
    label: 'Email',
    value: 'info@nyksoncapital.com',
    href: 'mailto:info@nyksoncapital.com',
    icon: 'Mail'
  },
  {
    type: 'address',
    label: 'Address',
    value: '123 Business District, New York, NY 10001',
    href: 'https://maps.google.com/?q=123+Business+District+New+York+NY',
    icon: 'MapPin'
  }
] as const;

export const OFFICE_HOURS = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' }
] as const;
