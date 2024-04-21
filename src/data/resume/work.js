/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
   {
    name: 'SAMSUNG R&D',
    position: 'Software Intern',
    url: '',
    startDate: '2024-01-01',
    endDate: 'Present',
    summary: '',
    highlights: [
      '•	Involvement in the entire lifecycle of the Reverse Prompt Generator, covering conceptualization to fine-tuning stages.,
      '•	Conducting extensive research on existing ideation methods, creative thinking processes, and industry-specific challenges.',
      '•	Successfully led my team for a smooth operation',
      '•	Successfully deployed',
      '•	Rigorous testing conducted, 
    ],
  },
  {
    name: 'Calcutta University',
    position: 'Intern',
    url: 'https://www.caluniv.ac.in/',
    startDate: '2023-06-01',
    endDate: '2023-07-25',
    summary: '',
    highlights: [
      'Developed a Grocery Delivery System using MERN Stack',
      'Researched about Software Testing tools',
      'Ensured the quality and reliability of the application using Cucumber Gherkin, a behaviour-driven development using various different test cases and scenarios',
      'Fabricated a Software Requirement Specification for the better understanding of the project and ensuring the future development with the stakeholders in mind',
    ],
  },
  {
    name: 'Netwizard Technologies Pvt. Ltd. West Bengal',
    position: 'Software Intern (Online)',
    url: '',
    startDate: '2022-010-01',
    endDate: 'Present',
    summary: 'Netwizard Technologies is an EdTech startup based in Kolkata, West Bengal, India.',
    highlights: [
      'Researched on AUTOML',
      'Developed CNN and RNN using Scikit-Learn',
      'Conducted Literature survey on Bayesian optimization ',
      'Fabricated websites using React and typescript',
    ],
  },
  
];

export default work;
