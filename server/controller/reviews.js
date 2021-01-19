const {Reviews} = require("../models")
module.exports = {
  async getAllReviews(req, res) {
    try {
      const reviewsCollection = await Reviews.findAll({})
      res.status(201).send(reviewsCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },
  async create(req, res) {
    try {
      const reviewsCollection = await Reviews.create(req.body
      )
      res.status(201).send(reviewsCollection)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

}