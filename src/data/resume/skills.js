const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],

  },
  {
    title: 'Node.JS',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Amazon Web Services',
    competency: 1,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Java',
    competency: 3,
     category: ['Languages'],
  },
  {
    title: 'MongoDB',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 2,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Express.JS',
    competency:1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git/Mercurial',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Typescript',
    competency: 1,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Data Science','Languages'],
  },
  {
    title: 'Pandas',
    competency: 1,
    category: ['Data Science', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
];

const categories = [
    ...new Set(skills.reduce((acc, {category}) => acc.concat(category), [])),
]
    .sort()
    .map((category, index) => ({
        name: category,
        color: colors[index],
    }));

export {categories, skills};