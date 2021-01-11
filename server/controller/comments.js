const Post = require("../models").Post
const User = require("../models").user
module.exports = {
  
  async createComment(req, res) {
    try {
      const comment = await Comments.create(req.body)
      res.status(201).send(comment)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },
  
 
 

  
  
}