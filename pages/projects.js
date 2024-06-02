function changeImage(imageSrc, element) {
    document.getElementById('main-image').src = imageSrc;

    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    element.classList.add('active');
}
