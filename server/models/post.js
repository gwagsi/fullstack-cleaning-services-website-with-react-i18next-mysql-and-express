"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {
        onDelete: "CASCADE",
        foreignKey: "userId",
      });
      Post.hasMany(models.Comments, {
        foreignKey: "postId",
        as: "comment",
      });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      summary: DataTypes.STRING,
      content: DataTypes.STRING,
      featuredImage: DataTypes.STRING,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
