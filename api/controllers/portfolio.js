import queries from './queries';
import { Portfolio } from '../models/portfolio';

module.exports = {
  async create(req, res) {
    try {
      const portfolio = await Portfolio.create({
        title: req.body.title,
        description: req.body.description,
        userId: req.user.id,
      });

      return res.status(200).send(portfolio);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async list(req, res) {
    try {
      const portfolios = await Portfolio.findAll();
      return res.status(200).send(portfolios);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async get(req, res) {
    try {
      const portfolio = await Portfolio.findById(req.params.portfolioId);

      if (!portfolio) {
        return res.status(404).send({
          message: 'Post Not Found',
        });
      }

      return res.status(200).send(portfolio);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async update(req, res) {
    try {
      const portfolio = await Portfolio.find({
        where: {
          id: req.params.PortfolioId,
        },
      });

      if (!portfolio) {
        return res.status(404).send({
          message: '404 on portfolio update',
        });
      }

      const updatedPortfolio = await portfolio.update({
        title: req.body.title || portfolio.title,
        description: req.body.description || portfolio.description,
      });

      return res.status(200).send(updatedPortfolio);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async delete(req, res) {
    try {
      const portfolio = await Portfolio.find({
        where: {
          id: req.params.portfolioId,
        },
      });

      if (!portfolio) {
        return res.status(404).send({
          message: 'Portfolio Not Found',
        });
      }

      await portfolio.destroy();

      return res.status(200).send({
        message: null,
      });
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};
