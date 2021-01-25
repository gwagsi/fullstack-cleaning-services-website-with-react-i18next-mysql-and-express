const userController = require('../controller').user;
const postController = require('../controller').post;
const reviewController = require('../controller').review;
const commentController = require('../controller').comment;
module.exports = (app) => {

    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome Node Sequlize"
        })
    })
    //users route
    app.get('/api/users',userController.getAllUsers);

    app.post('/api/user/create',userController.create);

    app.put('/api/user/:userId',userController.update);

    //Post Route
    app.get('/api/posts/:userId',postController.getAllPostsOfUser);
    app.get('/api/post',postController.getAllPosts);

    app.post('/api/post/create',postController.createPost);

    app.put('/api/post/:postId',postController.update);

    //Reviews Route

    app.get('/api/reviews',reviewController.getAllReviews);

    app.post('/api/review/create',reviewController.create);



    //Comments Route


    //Mails ROute


}