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
    text: ['Hi!', `rson`, `driguez.`, 'I develop '],
    typical: ['Apps', 1000, 'Websites', 1000],
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
      name: 'The Blind Barber',
      altName: 'App',
      type: 'Front-end Developer | Web Manager',
      imageSrc: 'https://yt3.googleusercontent.com/ytc/AGIKgqPMlWrD1X1pANObdj7vgPVibmSAnzmKUL5eTFHuxg=s900-c-k-c0x00ffffff-no-rj',
      imageAlt: 'Blind Barber logo',
      href: 'http://blindbarbermenu.com/chicago-menu',
      href2: 'https://apps.apple.com/us/app/the-blind-barber/id1539568689',

    },
    {
      name: 'Sundrip',
      type: `Rebranded and enhanced SEO's`,
      imageSrc: 'https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover_square/5ca07471-d014-4afe-adc8-0523e69ed772.jpg',
      imageAlt: 'let the power of plants fuel positive impact on your wellbeing, on your community and on your planet..',
      href: 'http://sundrip.life',
    },
    {
      name: 'Puerta Abierta Preschool',
      type: `Re-designed UI and enhanced online visibility with adavanced SEO's`,
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/633b2009b9696e4e66fe5386/a66c3fa0-7522-41fd-959b-5c0b9606dff5/Original+Logo_circle-03+%281%29+-+Edited.png?format=1500w',
      imageAlt: 'Puerta Abierta Preschool, Evanston Illinois, Chicago Schools.',
      href: 'http://puertaabiertapreschool.org',
    }
  ],
   projects: [
     
     {
       title: 'Back End',
       desc:
       'I like to code things from scratch, and enjoy bringing ideas to life in the browser using:',
       href: '#',
       langs: 'PWAS, MERN, CRUD',
       tools: 'Node, Git, Firebase, AWS, Shopify',
       icon: 'https://cdn-icons-png.flaticon.com/512/984/984196.png'
      },
      {
        title: 'Front End',
        desc:
          'I value simple content structure, clean design patterns, and thoughtful interactions using:',
        langs: 'UI, UX, WEB',
        href: '#',
        tools:
          'Html, Css, JavaScript, React, Tailwind Css, Bootstrap, SquareSpace, Wix, WordPress, WebFlow',
        icon: 'https://cdn-icons-png.flaticon.com/512/711/711284.png'
      }
      
  ],
   collabs: [
    {
      title: 'Blind Barber',
      href: 'https://blindbarber.com',
      source:
            'https://m.media-amazon.com/images/S/abs-image-upload-na/7/AmazonStores/ATVPDKIKX0DER/52dbb65ab78426e2135c57411070eec3.w2160.h2160.jpg'
    },
    {
        title: '3D Baking',
        href: 'https://herowebsolutions.github.io/3d-baking/',
        source:
          'https://images.squarespace-cdn.com/content/v1/606e406b41681f354d03ead0/1623198986830-EEND64FNJETVU32OYAJN/3DBakinglogo2.png?format=1000w',
      },
      
  ],
  links: [
    {
      title: 'Github',
      link: 'https://github.com/rodriguezh21',
      img: 'https://joshuapenalba.files.wordpress.com/2014/12/github-icon.png?w=640'
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/herson-rodriguez/',
      img: 'https://www.freeiconspng.com/uploads/displaying-19-gallery-images-for-linkedin-logo-png-25.png'
    },
    {
      title: 'Email',
      link: 'mailto:rodriguezh21@gmail.com?subject=',
      img: 'https://4vector.com/i/free-vector-mail-icon-clip-art_116904_Mail_Icon_clip_art_hight.png'
    },
  ]
}
