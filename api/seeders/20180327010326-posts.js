'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        title: 'My First Blog',
        content:
          'Hello reader, kudos to you for stumbling on to my blog. I have never kept a journal or blog before so I hope you allow me some leeway on my first entries. My writing style will likely resemble how I think through things, rambling on through a topic and a handful of tangents. For this entry I will speak a bit about putting together this website. I used a project by <a href="https://github.com/jimmylee/next-postgres" target="_blank">Jim Lee</a>(<a href="https://jimmyl.ee/" target="_blank">jimmyl.ee</a>)<a>. It is a React.js and Redux application built on a next.js and express backend through Node.js. Site content is stored in a Postgres SQL database managed with the Sequelize ORM. It has authentication through passport. If you are interested in seeing my code base you can see it <a href="https://github.com/Jaygles/jay-co" target="_blank">Here.</a> This is my first project working with next.js.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Post', null, {});
  },
};
