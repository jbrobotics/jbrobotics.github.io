module.exports = {
  siteTitle: 'Jerrin Bright | Roboticist',
  siteDescription:
    'Jerrin is a versatile and self-motivated engineer highly skilled in Autonomous Systems and Robotic Real-time Perception, focusing on aerial and ground systems..',
  siteKeywords:
    'Jerrin Bright, robotics, vision, Autonomous, perception, mcmaster, arizona, VIT',
  siteUrl: 'https://jbright.netlify.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-0G3JZFDKEJ',
  googleVerification: 'zSzeyBHCZTRVCj5vaqacDof9caOzhzY3sEt2Ko8J0Fs',
  name: 'Jerrin Bright',
  location: 'Chennai, India',
  email: 'jerriebright@gmail.com',
  github: 'https://github.com/jerriebright',
  twitterHandle: '@Jerrie_25',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jerriebright',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jerriebright/',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/jerrin.jerrin.5891',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jerrie_bright/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Jerrie_25',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
