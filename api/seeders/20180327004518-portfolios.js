'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Portfolios',
      [
        {
          title: 'Carrot Cake Bar and Grill',
          description:
            'My take on a simple web presence for a ficticious restaurant. Made with React and Redux. Vanilla CSS. Other things included are recompose and react-google-maps.',
          img: '/static/carrot10x7.jpg',
          link: 'https://jaygles.github.io/react-restaurant-example/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'West India Paper Company',
          description:
            'An example of a modern online storefront. A static webpage made with HTML5, vanilla CSS, and jQuery.',
          img: '/static/store10x7.jpg',
          link: 'https://jaygles.github.io/store-example/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Fakesite',
          description:
            'A concept developed between myself and my friend Cody Persinger (https://www.linkedin.com/in/crpersinger/) Technologies are HTML5, SCSS/SASS, Javascript, jQuery',
          img: '/static/Fakesite10x7.jpg',
          link: 'https://jaygles.github.io/Fakesite/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Capsaicin Clicker',
          description:
            'A clicker game where you are trying to create the hottest pepper on earth. This is a MERN stack app using Redux. Uses the Foundation CSS framework.',
          img: '/static/capclick10x7.jpg',
          link: 'https://www.capsaicin-clicker.com/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'NYT Article Search',
          description:
            'A simple full-stack app pulling from the New York Times article search API. Technologies are MongoDB, Node.js, Express, React, vanilla CSS.',
          img: '/static/react10x7.jpg',
          link: 'https://react-nyt-heroku.herokuapp.com/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Portfolio', null, {});
  },
};
