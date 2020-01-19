function showComment(buttonContext) {
    var buttonToHide = buttonContext;
    var commentBlock = document.getElementById("commentar");
    buttonToHide.style.display = 'none';
    commentBlock.style.display = 'inline-block';
    return false
}