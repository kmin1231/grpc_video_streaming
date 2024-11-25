function loadVideoList() {
    fetch('/videos')
        .then(response => response.json())
        .then(videos => {
            const select = document.getElementById('videoList');
            videos.forEach(video => {
                const option = document.createElement('option');
                option.value = video;
                option.textContent = video;
                select.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading video list:', error));
}

function playVideo() {
    const videoName = document.getElementById('videoList').value;
    const video = document.getElementById('videoPlayer');
    video.src = `/stream?video=${encodeURIComponent(videoName)}`;
    video.play();
}

loadVideoList();