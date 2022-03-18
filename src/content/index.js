export default {
  nav: {
    logo: '/assets/Hero.png',
    workLink: 
      { text: 'Work', to: 'mywork' }
    ,
    contactLink: 
      { text: 'Contact', to: 'stack' }
    
  },
  header: {
    img: process.env.PUBLIC_URL + '/assets/developer.png',

    imgPlaceholder:
      'https://wallpaperaccess.com/full/1129018.jpg',
    text: ['Hi!', `rson`, `driguez.`, 'I am a '],
    typical: ['software developer', 2000, 'web developer', 2000],
    btnText: 'Discover More'
  },

  stack: {
    title: 'Services',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/mongo.png',
        alt: 'mongodb'
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react'
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express'
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node'
      }
    ],
    desc: `I curate experiences with technology.`
  },
  callouts: [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ],
   projects: [
    {
      title: 'Front End',
      desc:
        'I value simple content structure, clean design patterns, and thoughtful interactions using:',
      langs: 'UI, UX, WEB',
      href: '#',
      tools:
        'Html, Css, Js, React, Tailwind, Bootstrap, Bulma, Material UI, Hosting',
      icon: 'https://cdn-icons-png.flaticon.com/512/711/711284.png'
    },
    {
      title: 'Back End',
      desc:
        'I like to code things from scratch, and enjoy bringing ideas to life in the browser using:',
      href: '#',
      langs: 'PWAS, MERN, CRUD',
      tools: 'Node, Git, Firebase, AWS',
      icon: 'https://cdn-icons-png.flaticon.com/512/984/984196.png'
    },
    {
      title: 'Web Design',
      desc:
        'I value simple content structure, clean design patterns, and thoughtful interactions.',
      langs: 'WORDPRESS, SQUARESPACE, SHOPIFY',
      href: '#',
      tools: '',
      icon:
        'https://cdn-icons-png.flaticon.com/512/711/711284.png',
      placeholder: ''
    },
  ]
}
