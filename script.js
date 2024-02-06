
pg = 'aboutme';
pages = ['aboutme', 'achievements', 'education', 'skills', 'blog']
function darkmode() {
    var element = document.body;
    element.classList.toggle("darkmode");
}
function openpg(pg) {
    for (var i = 0; i < pages.length; i++) {
        if (pages[i] == pg) {
            document.getElementById(pages[i]).style.display = "block";
        } else {
            document.getElementById(pages[i]).style.display = "none";
        }
        list_pos = pages.indexOf(pg);
        nav = document.getElementsByClassName("topnav")[0].getElementsByTagName("a");
        for (var j = 0; j < nav.length; j++) {
            if (j == list_pos) {
                nav[j].classList.add("active");
            } else {
                nav[j].classList.remove("active");
            }
        }
    }
    return pg;
}
openpg(pg);

 // Function to update like count in local storage and on the page
function likeBlog(blogId) {
    const likeCountElement = document.getElementById(`likeCount${blogId}`);
    let likeCount = parseInt(localStorage.getItem(`likeCount${blogId}`)) || 0;

    likeCount++;
    likeCountElement.textContent = likeCount;
    localStorage.setItem(`likeCount${blogId}`, likeCount);
}

// Function to add a comment to local storage and on the page
function addComment(blogId) {
const commentInput = document.getElementById(`commentInput${blogId}`);
const commentList = document.getElementById(`comments${blogId}`);

const commentText = commentInput.value.trim();
if (commentText !== '') {
const commentItem = document.createElement('li');
commentItem.textContent = commentText;
commentList.appendChild(commentItem);

// Save the comment to local storage
const comments = JSON.parse(localStorage.getItem(`comments${blogId}`)) || [];
comments.push(commentText);
localStorage.setItem(`comments${blogId}`, JSON.stringify(comments));

// Clear the input field
commentInput.value = '';
}
}

// Function to load persisted likes and comments on page load
function loadPersistedData() {
for (let blogId = 1; blogId <= 2; blogId++) {
const likeCountElement = document.getElementById(`likeCount${blogId}`);
const commentsList = document.getElementById(`comments${blogId}`);

const likeCount = parseInt(localStorage.getItem(`likeCount${blogId}`)) || 0;
const comments = JSON.parse(localStorage.getItem(`comments${blogId}`)) || [];

likeCountElement.textContent = likeCount;

comments.forEach(commentText => {
  const commentItem = document.createElement('li');
  commentItem.textContent = commentText;
  commentsList.appendChild(commentItem);
});
}
}

// Load persisted data on page load
loadPersistedData();