// gitprofile.config.js

const config = {
  github: {
    username: 'ayeshamahmd', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'ayesha-mahmood-25689a228',
    twitter: 'arif_szn',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'ayeshamahmd',
    stackoverflow: '', // format: userid/username
    website: '',
    phone: '647-569-9626',
    email: 'mahmood.ayesha2004@gmail.com',
  }
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Technicanl:',
    'C',
    'C++',
    'Python',
    'JavaScript',
    'HTML/CSS',
    'AutoCAD',
    'Solidworks',
    'Personal:',
    'Solution Oriented',
    'Goal Driven',
    'Creative thinking',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Univeristy of Guelph',
      degree: 'Bachelor of Engineering Co-op',
      from: '2022',
      to: '2027',
    },
    
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Teddy Bear Wheel Chair ',
      description:
        'The “Teddy Bear Wheel Chair” project consisted of design and creating an autonomous vehicle for a teddy bear. The main components included designing and building a circuit with an Arduino, writing code for vehicle based on testing stimulation and building a chassis within safety and accessible guidelines.',
      imageUrl: 'https://via.placeholder.com/250x250',
      
    },
    {
      title: 'Password Manager',
      description:
        'The “Password Manager” project was based around creating a code system using the programming language Python to save and access passwords. As the information being entered and accessed was sensitive information, a Fernet encryption. The information entered into a text file and can only be accessed in the decrypted form using a master password. .',
      imageUrl: '',
      link: 'https://vscode.dev/github/ayeshamahmd/ayeshamahmd/blob/c888fb77a555215db4c5863505828a42ba97a402',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
