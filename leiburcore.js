function expandHideAlbum(album) {
    var video = album.getElementsByClassName("video")[0];
    console.log(video);
    if (album.classList.contains("focused")) {
        video.style.display = 'none';
        album.classList.remove("focused")
    }
    else {
        video.style.display = 'flex';
        album.classList.add("focused");
    }
}