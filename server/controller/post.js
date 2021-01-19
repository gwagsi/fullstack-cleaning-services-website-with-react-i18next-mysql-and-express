const {Post, User }= require("../models")
module.exports = {
  async getAllPostsOfUser(req, res) {
    try {
      const userCollection = await User.findAll({
        id: req.params.userId,
      })
      if (userCollection) {
        const postCollection = await Post.findAll({
          userId: req.params.userId,
        })
        res.status(201).send(postCollection)
      } else {
        re.status(404).send("User Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },
  async createPost(req, res) {
    try {
      const post = await Post.create(req.body)
      res.status(201).send(post)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },
  async update(req, res) {
    try {
      const postCollection = await Post.findOne({
        id: req.params.postId,
      })
      if (postCollection) {
        const updatedPost = await postCollection.update(req.body)
        res.status(201).send(updatedPost)
      } else {
        res.status(404).send("Post Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },
  async deletePost (req, res) {
    try {
      const { postId } = req.params;
      const deleted = await postCollection.destroy({
        where: { id: postId }
      });
      if (deleted) {
        return res.status(204).send("Post deleted");
      }
      throw new Error("Post not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
  async getAllPosts (req, res)  {
    try {
      const posts = await models.Post.findAll({
        include: [
          {
            model: models.Comment,
            as: "comments"
          },
          {
            model: models.User,
            as: "author"
          }
        ] 
      });
      return res.status(200).json({ posts });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  async getPostById(req, res)  {
    try {
      const { postId } = req.params;
      const post = await models.Post.findOne({
        where: { id: postId },
        include: [
          {
            model: models.Comment,
            as: "comments",
            
          },
          {
            model: models.User,
            as: "author"
          }
        ]
      });
      if (post) {
        return res.status(200).json({ post });
      }
      return res.status(404).send("Post with the specified ID does not exists");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  
}