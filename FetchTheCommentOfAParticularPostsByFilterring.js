var post = {id: 4,title:'New Post'};
var comments = [
    {postId:4,content:'awesome post'},
    {postId:4,content:'test post'},
    {postId:4,content:'need post'}


];

var commentFilter = function commentsForPost(post,comments){
    return comments.filter(function(comment){
        return comment.postId = post.id;

    });
}

console.log(post,comments);