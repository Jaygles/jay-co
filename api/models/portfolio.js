module.exports = (Sequelize, DataTypes) => {
  const Portfolio = Sequelize.define('Portfolio', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Portfolio;
};
