module.exports = {
  pathPrefix: '',
  siteUrl: 'https://vaibhavpandit.space',
  siteTitle: 'Vaibhav Sharma',
  siteDescription: "A catalogue of a Data Scientist's afternoons",
  author: 'Rolwin Reevan',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  // disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/Vaibhav21pandit',
    facebook: 'https://www.facebook.com/vaibhavpandit21',
    twitter: 'https://twitter.com/Vaibhavpandit25',
    instagram: 'https://www.instagram.com/spiralling_into_madness',
    rss: '/rss.xml',
  },
  contactFormUrl: 'https://getform.io/f/fc495a0a-4aa8-4ff1-aaf5-9a217be9c972',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    PyTorch: {
      name: 'Pytorch',
      description: 'PyTorch is a Machine/Deep Learning Framework developed by Facebook AI Research(FAIR).It has components such as TorchVision for Visual data,TorchText for NLP and TorchAudio for sound data. yIt also has a wide Ecosystem with frameworks built on top of it that support Reinforcement learning,BioInformatics etc',
      color: '#f0da50',
    },
    TensorFlow: {
      name: 'TensorFlow',
      description: 'TensorFlow is a Mchine/Deep Learning Framework developed by Google,and has been usd by the Google Brain team for both research and production and also has a submodule tensorflow lite for running it on mobile devices ',
      color: '#90c53f',
    },
    OpenCV: {
      name: 'opencv',
      description: 'OpenCV is a library built for developing Computer Vision apps.Developed by Intel in C++, It has wrappers in Python and Java and is the most widely used library in Computer Vision',
      color: '#eb428e',
    },
    Spacy: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },

  },
};
