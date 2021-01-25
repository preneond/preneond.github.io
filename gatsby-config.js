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
    // Content of the About Me section
    about: `Hi there 👋 \n I’m Ondrej Prenek, I have 3 years of work experience in the AI & Machine Learning field, \n building projects for the clients, using different programming tools and languages like Python, C/C++, Java.`,
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
        description: 'Machine Learning Engineer, May 2019 - Present',
        link: 'https://www.ibm.com/'
      },
      {
        name: 'AI Centre, Czech Technical University in Prague',
        description: 'Machine Learning Researcher, June 2019 - September 2020',
        link: 'http://aic.fel.cvut.cz'
      },
      {
        name: 'Zentity a.s.',
        description: 'iOS Developer, May 2017 - December 2018',
        link: 'https://zentity.com'
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, C/C++, Java, Golang, Obj-C, Swift, R',
      },
      {
        name: 'Databases',
        description: 'Redis, MongoDB, PostgreSQL, MySQL',
      },
      {
        name: 'Libraries',
        description: 'NumPy, Scikit-learn, Pandas, Tensorflow, PyTorch, OpenCV, HuggingFace',
      },
      {
        name: 'Services',
        description:
          'Kubernetes, Docker, Amazon Web Services (AWS), CI / CD',
      },
    ],

    education: [
      {
        name: 'Master\'s Degree (MSc.), Czech Technical University in Prague',
        description:
          'Artificial Intelligence, 2018-2020' ,
      },
      {
        name: 'Bachelor\'s Degree (Bc.), Czech Technical University in Prague',
        description:
          'Computer Science, 2015-2018' ,
      },
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
