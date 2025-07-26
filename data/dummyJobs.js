// Mock job data for development and testing
const dummyJobs = [
  {
    id: '1',
    title: 'UPSC Civil Services 2025',
    organization: 'Union Public Service Commission',
    totalPosts: 836,
    startDate: '20 Jun, 2025',
    lastDate: '15 Aug, 2025',
    examDate: '18 Oct, 2025',
    posts: [
      { name: 'IAS', count: 180 },
      { name: 'IPS', count: 150 },
      { name: 'IFS', count: 30 },
      { name: 'IRS', count: 120 },
      { name: 'IRTS', count: 56 },
      { name: 'Other Services', count: 300 }
    ],
    eligibility: {
      ageLimit: '21-32 years (with relaxation as per rules)',
      education: 'Bachelor\'s Degree from a recognized University',
      additionalRequirements: [
        'Candidate must be a citizen of India',
        'Good moral character',
        'Medical fitness as per standards'
      ]
    },
    fees: [
      { category: 'General/OBC', amount: '100' },
      { category: 'SC/ST/PwD/Female', amount: '0' }
    ],
    links: [
      { title: 'Official Notification', url: 'https://example.com/upsc-cse-2025-notification.pdf' },
      { title: 'Apply Online', url: 'https://example.com/upsc-cse-2025-apply' },
      { title: 'Syllabus', url: 'https://example.com/upsc-cse-2025-syllabus.pdf' }
    ],
    instructions: [
      'Applications must be submitted online only. No other mode will be accepted.',
      'Candidates are advised to check their eligibility before applying.',
      'The selection process includes Preliminary, Main Examination, and Interview.',
      'Candidates must upload scanned copies of all required documents.'
    ],
    lastUpdated: '20 Jun, 2025'
  },
  {
    id: '2',
    title: 'SSC CGL 2025',
    organization: 'Staff Selection Commission',
    totalPosts: 7658,
    startDate: '01 Jul, 2025',
    lastDate: '30 Jul, 2025',
    examDate: '15 Sep, 2025',
    posts: [
      { name: 'Assistant Audit Officer', count: 100 },
      { name: 'Assistant Section Officer', count: 1500 },
      { name: 'Inspector of Income Tax', count: 2000 },
      { name: 'Assistant Enforcement Officer', count: 500 },
      { name: 'Sub-Inspector', count: 1200 },
      { name: 'Tax Assistant', count: 2358 }
    ],
    eligibility: {
      ageLimit: '18-32 years (with relaxation as per rules)',
      education: 'Bachelor\'s Degree from a recognized University',
      additionalRequirements: [
        'Candidate must be a citizen of India',
        'Medical fitness as per standards'
      ]
    },
    fees: [
      { category: 'General/OBC (Male)', amount: '100' },
      { category: 'SC/ST/PwD/Female', amount: '0' }
    ],
    links: [
      { title: 'Official Notification', url: 'https://example.com/ssc-cgl-2025-notification.pdf' },
      { title: 'Apply Online', url: 'https://example.com/ssc-cgl-2025-apply' },
      { title: 'Syllabus', url: 'https://example.com/ssc-cgl-2025-syllabus.pdf' }
    ],
    instructions: [
      'Applications must be submitted online only.',
      'Candidates are advised to apply well before the closing date.',
      'The selection process includes Tier-I, Tier-II, Tier-III, and Document Verification.',
      'Candidates must upload scanned copies of required documents.'
    ],
    lastUpdated: '01 Jul, 2025'
  },
  {
    id: '3',
    title: 'Indian Railways Recruitment 2025',
    organization: 'Railway Recruitment Board',
    totalPosts: 35281,
    startDate: '01 Jul, 2025',
    lastDate: '22 Aug, 2025',
    examDate: '20 Oct, 2025 - 15 Nov, 2025',
    posts: [
      { name: 'Assistant Loco Pilot', count: 10000 },
      { name: 'Technician Grade III', count: 8000 },
      { name: 'Station Master', count: 5000 },
      { name: 'Commercial Clerk', count: 6000 },
      { name: 'Traffic Assistant', count: 4000 },
      { name: 'Other Posts', count: 2281 }
    ],
    eligibility: {
      ageLimit: '18-33 years (with relaxation as per rules)',
      education: '10th/12th/ITI/Diploma/Degree as per post requirements',
      additionalRequirements: [
        'Candidate must be a citizen of India',
        'Medical fitness as per standards'
      ]
    },
    fees: [
      { category: 'General/OBC', amount: '500' },
      { category: 'SC/ST/PwD/Female', amount: '250' }
    ],
    links: [
      { title: 'Official Notification', url: 'https://example.com/rrb-2025-notification.pdf' },
      { title: 'Apply Online', url: 'https://example.com/rrb-2025-apply' },
      { title: 'Syllabus', url: 'https://example.com/rrb-2025-syllabus.pdf' }
    ],
    instructions: [
      'Applications must be submitted online only.',
      'Candidates can apply for multiple posts if eligible.',
      'The selection process includes Computer Based Test (CBT), followed by Skill Test/Aptitude Test/Document Verification as applicable.',
      'Candidates must upload scanned copies of required documents.'
    ],
    lastUpdated: '01 Jul, 2025'
  },
  {
    id: '4',
    title: 'IBPS PO 2025',
    organization: 'Institute of Banking Personnel Selection',
    totalPosts: 4500,
    startDate: '10 Jul, 2025',
    lastDate: '05 Aug, 2025',
    examDate: 'Prelims: 12 Sep, 2025, Mains: 18 Oct, 2025',
    posts: [
      { name: 'Probationary Officer', count: 4500 }
    ],
    eligibility: {
      ageLimit: '20-30 years (with relaxation as per rules)',
      education: 'Graduate from a recognized University',
      additionalRequirements: [
        'Candidate must be a citizen of India',
        'Computer literacy is mandatory',
        'Knowledge of local language preferred'
      ]
    },
    fees: [
      { category: 'General/OBC', amount: '850' },
      { category: 'SC/ST/PwD', amount: '175' }
    ],
    links: [
      { title: 'Official Notification', url: 'https://example.com/ibps-po-2025-notification.pdf' },
      { title: 'Apply Online', url: 'https://example.com/ibps-po-2025-apply' },
      { title: 'Syllabus', url: 'https://example.com/ibps-po-2025-syllabus.pdf' }
    ],
    instructions: [
      'Applications must be submitted online only.',
      'Candidates should have a valid personal email ID and mobile number.',
      'The selection process includes Preliminary Examination, Main Examination, and Interview.',
      'Candidates must upload scanned copies of required documents.'
    ],
    lastUpdated: '10 Jul, 2025'
  },
  {
    id: '5',
    title: 'SBI Clerk 2025',
    organization: 'State Bank of India',
    totalPosts: 8700,
    startDate: '15 Jul, 2025',
    lastDate: '10 Aug, 2025',
    examDate: 'Prelims: 20 Sep, 2025, Mains: 25 Oct, 2025',
    posts: [
      { name: 'Junior Associate', count: 8700 }
    ],
    eligibility: {
      ageLimit: '20-28 years (with relaxation as per rules)',
      education: 'Graduate from a recognized University',
      additionalRequirements: [
        'Candidate must be a citizen of India',
        'Computer literacy is mandatory',
        'Knowledge of local language is mandatory'
      ]
    },
    fees: [
      { category: 'General/OBC', amount: '750' },
      { category: 'SC/ST/PwD', amount: '125' }
    ],
    links: [
      { title: 'Official Notification', url: 'https://example.com/sbi-clerk-2025-notification.pdf' },
      { title: 'Apply Online', url: 'https://example.com/sbi-clerk-2025-apply' },
      { title: 'Syllabus', url: 'https://example.com/sbi-clerk-2025-syllabus.pdf' }
    ],
    instructions: [
      'Applications must be submitted online only.',
      'Candidates should have a valid personal email ID and mobile number.',
      'The selection process includes Preliminary Examination and Main Examination.',
      'Candidates must upload scanned copies of required documents.'
    ],
    lastUpdated: '15 Jul, 2025'
  },
  {
    id: '6',
    title: 'NEET UG 2026',
    organization: 'National Testing Agency',
    totalPosts: 'Various',
    startDate: '01 Dec, 2025',
    lastDate: '31 Dec, 2025',
    examDate: '02 May, 2026',
    posts: [
      { name: 'MBBS', count: 'Various' },
      { name: 'BDS', count: 'Various' },
      { name: 'BAMS', count: 'Various' },
      { name: 'BUMS', count: 'Various' },
      { name: 'BHMS', count: 'Various' },
      { name: 'Other Medical Courses', count: 'Various' }
    ],
    eligibility: {
      ageLimit: 'Minimum 17 years as on 31 Dec 2025',
      education: '10+2 with Physics, Chemistry, Biology/Biotechnology',
      additionalRequirements: [
        'Minimum 50% marks in PCB (45% for reserved categories)',
        'Qualifying percentile in NEET-UG'
      ]
    },
    fees: [
      { category: 'General/OBC', amount: '1600' },
      { category: 'SC/ST/PwD', amount: '800' }
    ],
    links: [
      { title: 'Official Notification', url: 'https://example.com/neet-2026-notification.pdf' },
      { title: 'Apply Online', url: 'https://example.com/neet-2026-apply' },
      { title: 'Information Bulletin', url: 'https://example.com/neet-2026-bulletin.pdf' }
    ],
    instructions: [
      'Applications must be submitted online only.',
      'Candidates should keep ready scanned images of photograph, signature, etc. before applying.',
      'The examination will be conducted in pen and paper mode.',
      'Candidates must carefully fill their academic details as verification will be done at counselling.'
    ],
    lastUpdated: '30 Nov, 2025'
  }
];

export default dummyJobs;