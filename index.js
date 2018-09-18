function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  var post_title = document.getElementById("postTitle").value;
  var post_body = document.getElementById("postBody").value;
  var post_author = document.getElementById("postAuthor").value;

  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var mainBlogSection = document.getElementsByTagName("main")[0];
  var postSection = document.getElementById("post");
  var commentsSection = document.getElementsByTagName("footer")[0];

  var mainBlogSectionHTML = pageTemplate();
  var postSectionHTML = postTemplate({ 'post_title': post_title, 'post_body': post_body, 'post_author': post_author });
  var commentsSectionHTML = commentsTemplate();

  mainBlogSection.innerHTML += mainBlogSectionHTML;
  postSection.innerHTML += postSectionHTML;
  commentsSection.innerHTML += commentsSectionHTML;
}
