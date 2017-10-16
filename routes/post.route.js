var express = require('express' );
var postCtrl = require('../controllers/post.controller');
var validate = require('express-validation');
var paramValidation = require('../param-validation');

const router = express.Router();

router.route('/posts')
    .get(postCtrl.getPosts);

router.route('/liked-posts')
    .get(postCtrl.getLikedPosts);

router.route('/posts/like')
    .put(validate(paramValidation.updatePost), postCtrl.likePost);

router.route('/posts/dislike')
    .put(validate(paramValidation.updatePost), postCtrl.dislikePost);

module.exports = router;