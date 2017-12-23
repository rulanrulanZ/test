var marked = require('marked');

var arts = [
  {
    name: 'Old portfolio page banner pic',
    image: '/assets/arts/00.jpg',
  },
  // {
  //   name: 'stage curtain for Live For Life',
  //   image: '/assets/arts/01.jpg',
  // },
  {
    name: 'EECS postcard winter collection',
    image: '/assets/arts/02.jpg',
  },
  {
    image: '/assets/arts/07.jpg'
  },
  // {
  //   name: 'A recreation of Peking University library',
  //   image: '/assets/arts/04.jpg',
  // },
  {
    image: '/assets/arts/08.jpg'
  },
  {
    image: '/assets/arts/09.jpg'
  },
  {
    image: '/assets/arts/10.jpg'
  },
  {
    image: '/assets/arts/13.jpg',
  },
  {
    link: 'http://issuu.com/hanaxue/docs/sketch-book',
    image: '/assets/arts/f.jpg'
  },
  {
    name: 'Illustration explorations',
    image: '/assets/arts/animals_0.jpg',
  },
  {
    name: 'Illustration explorations',
    image: '/assets/arts/animals_2.jpg',
  },
  {
    name: 'Illustration explorations',
    link: 'http://codepen.io/hanax/pen/GpWPxd',
    image: '/assets/arts/animals_1.jpg',
  },
  {
    name: 'Illustration explorations',
    link: 'http://codepen.io/hanax/pen/yYMxNw',
    image: '/assets/arts/animals_3.jpg',
  },
  {
    link: 'http://hanax.co/poem/',
    image: '/assets/arts/poem.png'
  },
  {
    link: 'http://hanax.co/p5js-demos/demo_music_viz',
    image: '/assets/arts/music.png'
  },
  {
    link: 'http://hanax.co/p5js-demos/demo_wp',
    image: '/assets/arts/pollock.jpg'
  },
  {
    link: 'http://hanax.co/p5js-demos/demo_mouse',
    image: '/assets/arts/heart.jpg'
  },
  {
    link: 'http://hanax.co/card-game-concentration/',
    image: '/assets/arts/concentration.png'
  },
  {
    link: 'https://github.com/hanax/roy-musical-landscape',
    image: '/assets/arts/roy.png'
  },
  {
    link: 'http://hanax.co/make-a-snowflake/',
    image: '/assets/arts/snowflake.png'
  },
  {
    link: 'https://github.com/hanax/whatyouvemissedwhenyouarecoding',
    image: '/assets/arts/wyvmwyac.png'
  },
];

// TODO: 
// - Maybe add airbnb work
// - Add webrecorder works

var techs = [
  {
    name: 'Symbiote',
    type: 'Behavioral Science research -> Product development',
    role: 'Researcher, developer',
    image: '/assets/techs/symbiote.png',
    desc: 'Symbiote is an ongoing research turned startup project which I have been working on throughout the past 1.5 years. We aim to connect drivers with their cars to build a safer and more trustworthy future of autonomous driving.'
          + '\n\n Read about Symbiote on Cornell Tech press: [Trusting Autonomous Cars: How Much Is Too Much?](https://tech.cornell.edu/news/trusting-autonomous-cars-how-much-is-too-much)'
          + '\n\n This is a collaboration work with Zaid Haque and Noshin Nisa. Read more about the project and latest updates on the [website](http://symbiote.link)',
    color: '#141414'
  },
  {
    name: 'Illuminate',
    type: 'App UI/UX design',
    role: 'Designer',
    image: '/assets/techs/illuminate.jpg',
    desc: 'This is a collaborative work with Melina Diaconis. In this project we explored how people involve with tech in art spaces.'
          + '\n\n Illuminate is designed to inspire people to explore and make art piece collections inside a museum. We are inspired by the MoMA booklets, which help tourists to fully immerse in the art by encouraging them to use personal emotion and imagination.'
          + '\n\n [invision Demo](https://projects.invisionapp.com/share/NF73T9DHW)',
    color: '#472E96'
  },
  {
    name: 'Freelance dev+design work',
    type: 'Web design and development',
    role: 'Developer, designer',
    image: '/assets/techs/web_freelance.jpg',
    desc: 'I designed and made websites for professors and labs in Cornell Tech as a part-time job.'
          + '\n\n [Prof Mor Naaman\'s homepage](http://mornaaman.com)'
          + '![mor](/assets/techs/mor_mock.png)'
          + 'Designs I made before converging to the final decision:'
          + '![mor](/assets/techs/mor_mock_extra.png)'
          + '\n\n [Website for Social Technology Lab](http://stech.nyc) (made with Huai-Che Lu and [Emily Sun](http://www.emilywsun.com))'
          + '![stech](/assets/techs/stech_mock.png)'
          + 'I am also the web master for CSCW\'18, for which I designed and developed [the website](http://cscw.acm.org/2018/).',
    color: '#22cde7'
  },
  {
    name: 'BriskIT',
    image: '/assets/techs/briskit.jpg',
    type: 'Web app design and development',
    role: 'Web developer (React), designer',
    desc: 'BriskIT comes with an iOS app that allows users to get IT help whenever and wherever their tech breaks down. On the supporter side they could use the website to provide live support.'
          + '\n\n[Project Git Repository](https://github.com/hanax/BriskIT)'
          + '\n\n[Live Demo](https://briskit.herokuapp.com)',
    blocks: [
      {
        image: '/assets/techs/briskit_0.png',
        desc: 'The web app is designed for IT helpers. Simply sign up your account and get quick money by fixing IT issues.'
      },
      {
        image: '/assets/techs/briskit_1.png',
        desc: 'Browse and filter the ticket by tags, and easily find the one best fit your skillset.'
      },
      {
        image: '/assets/techs/briskit_2.png',
        desc: 'Get the ticket and just start chatting!'
      },
      {
        image: '/assets/techs/briskit_ios_app.png',
        desc: 'On the corresponding iOS app, you can send a ticket about your IT issues and just sit and wait for your help to come.'
      }
    ],
    color: '#30c0cc'
  },
  // {
  //   name: 'Shake It',
  //   image: '/assets/techs/01.jpg',
  //   type: 'Mobile web app design and development',
  //   role: 'Individual project (Node.js, MongoDB, Python)',
  //   desc: 'Shake It is a tinder style app for coupons.',
  //   blocks: [
  //     {
  //       image: '/assets/techs/shakeit_0.png',
  //       desc: 'Simply shake your phone to get latest coupons!'
  //             + '\n\nAll the recommendations are customized with collaborative filtering.'
  //     },
  //     {
  //       image: '/assets/techs/shakeit_1.png',
  //       desc: 'For every coupon you get, swipe left/right to ignore/star it.'
  //             + '\n\nSharing to social networks is (of course) supported.'
  //             + '\n\nEvery action counts. The system therefore gives better recommendations.'
  //     },
  //     {
  //       image: '/assets/techs/shakeit_2.png',
  //       desc: 'View, order and share your coupons.'
  //     }
  //   ],
  //   color: '#22b2e7'
  // },
  {
    name: 'Strolp',
    image: '/assets/techs/strolp.jpg',
    type: 'Web app design and development',
    role: 'Front-end developer (Meteor.js), designer',
    desc: ''
          + '\n\nStrolp consists of a web interface for stores and an iOS app for users. The entire application with fully functional front-end and back-end is developed within 36 hours for Big Red Hackathon.'
          + '\n\nProject description credit to my teammate Shreyas Kulkarni.'
          + '\n\n[Learn more about the App](http://devpost.com/software/strolp-bnco6t/)'
          + '\n\n[Project Git Repository](https://github.com/redenter/Big-Red-Hacks/)',
    blocks: [
      {
        image: '/assets/techs/strolp_0.png',
        desc: 'Strolp tries to combine the best of both e-shopping and physical shopping and tries to strike a sweet balance which could be win-win for all the people involved.'
      },
      {
        image: '/assets/techs/strolp_1.png',
        desc: 'The shopper discovers the deals nearby on the go.'
      },
      {
        image: '/assets/techs/strolp_2.png',
        desc: 'The shopper can claim a deal. As soon as there are enough number of people to avail the deal, a notification is sent to the shopper to visit the shop and make the purchase.'
      },
      {
        image: '/assets/techs/strolp_3.png',
        desc: 'On the retailer side, they can add branches and deals for each branch. With Strolp, they offer the best possible discounts when people visit them in numbers.'
      },
      {
        image: '/assets/techs/strolp_4.png',
        desc: 'Strolp also tries to optimize the deals for the retailers using our algorithm which generates dynamic deals based on various factors like demographics of the region etc.'
      },
      {
        image: '/assets/techs/strolp_news.jpg',
        desc: 'A photo of me presenting the demo is featured on Cornell News! We actually received some really good feedbacks:'
              + '\n\n \"Strolp is the most complete app in the entire hackathon.\"'
              + '\n\n \"I wish I could use it now.\"'
              + '\n\n \"Just love the logo!\"'
      }
    ],
    color: '#e89a1e'
  },
  {
    name: 'Strata: Scalable 2D Barcode',
    type: 'Mobile/HCI Research',
    role: 'Paper co-author, prototyper (OpenCV)',
    image: '/assets/techs/02.jpg',
    desc: 'Strata is a novel scalable 2D barcode design. In this project we try to explore the way people interact with barcodes. '
          + 'When scanning Strata barcode, instead of the all-or-nothing behavior of traditional QR Code, user could now get different layers of information based on their distance between the scanning device and the barcode.'
          + '\n\nThis project is a collaborative work with [MSRA](http://research.microsoft.com/en-us/labs/asia/) and Yale University and is accepted to [ACM MobiCom 2014](http://www.sigmobile.org/mobicom/2014/).'
          + '\n\n[Read Paper](/assets/strata.pdf)',
    color: '#e88822'
  },
  // {
  //   name: 'FYI: Find Your Instructor',
  //   type: 'Web app design and development',
  //   role: 'Designer, front-end developer (Node.js, MongoDB, Python)',
  //   image: '/assets/techs/00.jpg',
  //   desc: 'FYI is a website providing information of professors and schools for CS undergrads who want to apply for graduate schools in the US. This is a side project I made with classmates when I was at Peking University.'
  //         + '\n\nThe website is powered by Node.js + MongoDB. Professor data are crawled from sources including university websites, wikipedia and their personal webistes.'
  //         + '\n\nPoster for the project demo day:'
  //         + '![Poster](/assets/techs/fyi_poster.png)',
  //   color: '#22cde7'
  // },
  // {
  //   name: 'TeamGO',
  //   type: 'Mobile app design',
  //   role: 'Lead visual designer, interaction designer',
  //   image: '/assets/techs/03.jpg',
  //   desc: 'TeamGo is a popular mobile app in Peking University which enables students to team up and hang out with new friends.'
  //         + ' The initial UI was very complicated. I redesigned the entire interface to make it more intuitive.'
  //         + '\n\n[Download the App](http://theteamgo.com/)'
  //         + '![Screenshot1](/assets/techs/teamgo_0.png)'
  //         + '![Screenshot1](/assets/techs/teamgo_1.png)',
  //   color: '#31b48e'
  // },
  {
    name: 'T-shirt Design',
    type: 'Visual design',
    role: 'Illustrator, designer',
    image: '/assets/techs/05.jpg',
    desc: 'During my undergrad years at Peking University, I have designed a couple T-shirts for thousands of students, and was really lucky to see them being worn everywhere in the campus.'
          + '\n\n2014 Graduation T-shirt for the school of EECS: If you try to compile the code in the drawing, it turns out like [this](/assets/techs/grad_14.html). This little "Bye PKU and Hello World" surprise I made has moved thousands of graduates and the T-shirt once went really popular on social networks.'
          + '![Screenshot1](/assets/techs/grad_14.jpg)'
          + '\n\n2013 Graduation T-shirt for the school of EECS: Over 300 students wore this for their graduation photo.'
          + '![Screenshot1](/assets/techs/grad_13.jpg)'
          + '\n\nA colored version of the front pattern:'
          + '![Screenshot1](/assets/techs/grad_13_colored.jpg)'
          + '\n\nT-shirt for Shanghainese at Peking University: As a proud Shanghai local, I tried to embed Huangpu River and the gorgeous skyline of Shanghai into the letters.'
          + '![Screenshot1](/assets/techs/shanghai.jpg)',
    color: '#3bc3cf'
  },
  // {
  //   name: 'CS Classics',
  //   type: 'Hardcore CS programming',
  //   role: 'Individual project (C, C++, Java, Verilog, Assembly)',
  //   image: '/assets/techs/04.jpg',
  //   desc: 'I am very proud to be the only CS student in the department who has actually hand-coded a processor, part of an operating system and a compiler. '
  //         + '\n\nFor the processor, I implemented a multi-cycle [UniCore](http://mprc.pku.edu.cn/eng/index.html) processor with pipelining in Verilog.'
  //         + '\n\nFor the operating system, JOS is a teaching operating system used in [MIT CS 6.828](http://pdos.csail.mit.edu/6.828/2011/index.html). It has a basic framework of a UNIX-like operating system in C and I have to write all the core functions myself including virtual memory, multiprocessing, interruption and system call, etc.'
  //         + '\n\nFor the complier, the course is from [UCLA CS 132](http://web.cs.ucla.edu/~palsberg/course/cs132/project.html). MiniJava is a subset of Java including all the core features like different variable types, arrays, function, class and class derivation, etc. Given a grammar tree, I implemented a compiler in Java which is able to compile MiniJava code to runnable MIPS assembly.',
  //   color: '#67bf99'
  // },
  {
    name: 'Old homepage from 2005',
    type: '(Old fashioned) Web development',
    role: 'Individual project (HTML, CSS, ASP)',
    image: '/assets/techs/06.jpg',
    desc: 'I made my first homepage flylinda.com from scratch when I was 12. That little site provided free tutorials for web designers and charged services as well so that I could afford the server rent myself. Flylinda.com once reached a daily visit of 2000.'
          + ' Sadly I failed to keep the domain and most of the source code. Only thing I have now is a couple screenshots (and precious memory).'
          + '![Screenshot1](/assets/techs/old_hp_0.png)'
          + '![Screenshot1](/assets/techs/old_hp_1.png)',
    color: '#9468bf'
  },
].map(function(p) {
  p.desc = marked(p.desc);
  if (p.blocks)
    p.blocks = p.blocks.map(function(b) { b.desc = marked(b.desc); return b;});
  return p;
});

var links = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/pub/hannah-xue/83/ba/6a5',
    icon: 'fa-linkedin'
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/hanaxue',
    icon: 'fa-instagram'
  },
  {
    name: 'github',
    url: 'https://github.com/hanax',
    icon: 'fa-github-alt'
  },
  {
    name: 'medium',
    url: 'https://medium.com/@hanaxue/',
    icon: 'fa-medium'
  },
  {
    name: 'email',
    url: 'mailto:alfalfa.xue@gmail.com',
    icon: 'fa-envelope-o'
  },
];

var about = [
  {
    desc: '',
    resume: '/assets/Hannah_Xue_Resume.pdf',
  }
]

module.exports = {
  arts: arts,
  techs: techs,
  about: about,
  links: links,
};
