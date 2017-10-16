var Post = require('../models/post.model');

exports.getPosts = function(req, res, next){
    Post.list()
        .then(post => {
            res.json({
                post
            })
        })
        .catch(e => next(e));
}

exports.getLikedPosts = function(req, res, next){
    Post.list()
        .then(post => {
            res.json({
                post
            })
        })
        .catch(e => next(e));
}

exports.likePost = function(req, res, next){

    var id = req.body._id;
    var likes = req.body.likes;

    Post.findById(id, function(err, postObj){
        if(err)
            console.log(err);
            
        postObj.likes = parseInt(likes) + 1;
        postObj.liked = true;

        postObj.save(function(err){
            res.json(postObj._id)
        })
    });
}

exports.dislikePost = function(req, res, next){
    
    var id = req.body._id;
    var likes = req.body.likes;

    Post.findById(id, function(err, postObj){
        if(err)
            console.log(err);
            
        postObj.likes = parseInt(likes) - 1;
        postObj.liked = false;

        postObj.save(function(err){
            res.json(postObj._id)
        })
    });
}