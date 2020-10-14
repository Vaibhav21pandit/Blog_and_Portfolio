/* eslint-disable eol-last */
module.exports = {
  pathPrefix: '',
  siteUrl: 'https://vaibhavpandit.space',
  siteTitle: 'Vaibhav Sharma',
  siteDescription: "A catalogue of a Data Scientist's afternoons",
  author: 'Vaibhav Sharma',
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
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    typescript: {
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