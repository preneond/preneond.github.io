module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://preneond.github.io/`,
    // Your Name
    name: 'Ondrej Prenek',
    // Main Site Title
    title: `Ondrej Prenek | AI & Machine Learning Engineer`,
    // Description that goes under your name in main bio
    description: `AI & Machine Learning Engineer | Sport Enthusiast`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/prenekondrej/`,
    // Optional: Twitter account handle
    author: `@ondraprenek`,
    // Optional: Github account URL
    github: `https://github.com/preneond`,
    // Optional: email link
    mail: 'ondra.prenek@gmail.com',
    // Content of the About Me section
    about: 'Hi there 👋 \n I’m Ondrej Prenek, I have 3 years of work experience in the AI & Machine Learning field, building projects for the clients, using different programming tools and languages like Python, C/C++, Java. In\xA0addition, I have experience as a mobile application developer from the past.',
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    // projects: [
    //   // {
    //   //   name: 'Devfolio',
    //   //   description:
    //   //     'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
    //   //   link: 'https://github.com/RyanFitzgerald/devfolio',
    //   // },
    // ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'IBM',
        position: 'Machine Learning Engineer',
        period: 'Apr 2019 - Present',
        link: 'https://watson-ilab.mybluemix.net',
        description: '• Led and participated in international PoC and MVP projects oriented on Statistical Machine Learning, Computer Vision, and NLP',
        subitems: [{
          name: 'Raiffeisen Bank, Austria',
          description: 'Detection of abandonment of payment places by employees; Detection of open cache drawers at payment points without the presence of customers '
        },{
          name: 'Skoda Auto Transportation, Czech Republic',
          description: 'Consumption analysis of electric vehicles using machine learning algorithms and its prediction'
        },{
          name: 'Raiffeisen Bank, Romania',
          description: 'Classification of bank loans to recognize if a debtor will finish the repayment in an agreed time frame or earlier'
        },{
          name: 'LGLN, Germany',
          description: 'Development of a platform calculating displacement vectors between buildings in orthophotos and cadastral database'
        },{
          name: 'Solelos, Serbia',
          description: 'Dungeons \& Dragons background story generation using GPT-2 generative AI model'
        }
       ]
      },
      {
        name: 'AI Centre, Czech Technical University in Prague',
        position: 'Machine Learning Researcher',
        period: 'Jan 2019 - Sep 2020',
        description: '• Focused on researching the problem of identification and classification of botnets using the IRC protocol',
        link: 'http://aic.fel.cvut.cz',
      },
      {
        name: 'Umotional',
        position: 'R&D Engineer',
        period: 'Jan 2019 - Sep 2020',
        description: '• Researched precising reachable range of e-bike based on user data',
        link: 'https://umotional.com',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Industry Knowledge',
        description: 'Artificial Intelligence, Machine Learning, Computer Vision, Data Engineering'
      },
      {
        name: 'Languages & Frameworks',
        description: 'Python, C/C++, Java, JavaScript (React, Next.js), Golang',
      },
      {
        name: 'Libraries',
        description: 'NumPy, Scikit-learn, Tensorflow, PyTorch, OpenCV, PySpark, Flask',
      },
      {
        name: 'Services',
        description: 'Kubernetes, Docker, Apache Spark, Apache Kafka, RabbitMQ, AWS',
      },
      {
        name: 'Databases',
        description: 'MySQL, PostgreSQL, MongoDB, CouchDB, Redis',
      },
    ],

    education: [
      {
        name: 'Master\'s Degree (MSc.), Czech Technical University in Prague',
        description:
          'Artificial Intelligence' ,
        period: '2018-2020',
        link: 'https://oi.fel.cvut.cz/en/master-specialization-artificial-intelligence'
      },
      {
        name: 'Bachelor\'s Degree (Bc.), Czech Technical University in Prague',
        description: 'Computer Science',
        period: '2015-2018',
        link: 'https://oi.fel.cvut.cz/en/artificial-intelligence-and-computer-science'
      },
    ],

    presentations: [
      {
        name: 'Regional Technical Exchange Conference',
        description: 'Dungeons \& Dragons background story generation using GPT-2 generative AI model',
        period: 'Oct. 2020'
      }
    ],

    certificates: [
      {
        name: 'Certified Kubernetes Administrator',
        description: 'Linux Academy, Sep. 2019'
      },
      {
        name: 'Deep Learning in Image Analysis',
        description: 'Mines ParisTech, Oct. 2018'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
