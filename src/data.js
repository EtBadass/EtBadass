// This data is passed to be used in the replacers. Like a ".env" file.
// I opted to not use .env so it is possible to create custom objects, arrays and logic here.
// You can modify, create or delete any property you want.
const { colors } = require('./theme');

module.exports = {
  user: 'nick-gabe',
  startedProgramming: '9/10/2020',
  repoQuantity: 6,
  header: {
    styles: {
      align: 'center',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    description: "👋 Heyyy! I'm Gustavo Duran, a brazilian programmer.",
    badges: [
      {
        type: 'badge',
        name: 'twitter',
        href: 'https://twitter.com/Durannzinho',
      },
      {
        type: 'badge',
        name: 'linkedin',
        href: 'https://linkedin.com/in/gustavo-duran-b07035203/',
      },
      {
        type: 'views',
      },
    ],
  },
  aboutme: {
    list: ['* Gustavo Duran, 22 years', '* Data programmer', '* Currently studying Python'],
  },
  skillswall: {
    styles: {
      style: 'for-the-badge',
      align: 'left',
      highlightColor: colors.primary,
      wallColors: [colors.secondary, colors.lightSecondary],
    },
    randomOrder: true,
    skills: [
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'Markdown' },
      { name: 'CSS3' },
      { name: 'Python', isHighlighted: true },
      { name: 'Shell Script', logo: 'gnu-bash' },
      { name: 'React' },
      { name: 'React Native', logo: 'react' },
      { name: 'jQuery' },
      { name: 'SASS' },
      { name: 'Ant-Design' },
      { name: 'GraphQL' },
      { name: 'Chakra', logo: 'chakraui' },
      { name: 'Bootstrap' },
      { name: 'Node.JS' },
      { name: 'Jest' },
      { name: 'Strapi' },
      { name: 'Express.js', logo: 'express' },
      { name: 'FastAPI' },
      { name: 'Flask' },
      { name: 'Styled Components' },
      { name: 'TailwindCSS' },
      { name: 'Firebase' },
      { name: 'MongoDB' },
      { name: 'SQLite' },
      { name: 'TypeScript' },
      { name: 'Netlify' },
      { name: 'Vercel' },
      { name: 'Heroku' },
      { name: 'Github Pages', logo: 'github' },
      { name: 'Photoshop', logo: 'adobe-photoshop', isHighlighted: true },
      { name: 'Figma', isHighlighted: true},
      { name: 'Storybook' },
      { name: 'NPM' },
      { name: 'Git', isHighlighted: true },
      { name: 'GitHub' },
      { name: 'Visual Studio Code',isHighlighted: true },
      { name: 'Docker'},
      { name: 'Jira' },
      { name: 'GitHub Actions', isHighlighted: true },
    ],
  },
  recentworks: {
    styles: {
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      icon_color: colors.secondary.over,
    },
  },
  socialMedias: {
    styles: {
      align: 'left',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    links: [
      {
        name: 'twitter',
        href: 'https://twitter.com/Durannzinho',
      },
      {
        name: 'linkedin',
        href: 'https://linkedin.com/in/gustavo-duran-b07035203/',
      },
      {
        name: 'email',
        logo: 'gmail',
        href: 'gustavo.duran2011@gmail.com',
      },
      {
        name: 'etbadass',
        logo: 'discord',
        labelColor: colors.secondary.base,
      },
    ],
  },
  githubStats: {
    styles: {
      style: 'for-the-badge',
      align: 'center',
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      show_icons: true,
      icon_color: colors.secondary.over,
      rank_icon: 'github',
    },
  },
};
