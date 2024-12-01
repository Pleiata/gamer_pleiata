const warfaceVideos = [
    {
        url: "https://www.youtube.com/embed/QUIGGPM1vN4?autoplay=1&mute=1",
        date: "2021.06.17",
        title: "Warface - Among retirees with my 2nd character"
    }
];

const warfaceContainer = document.getElementById("warface-videos-container");

warfaceVideos.forEach(video => {
    const videoElement = document.createElement("div");
    videoElement.classList.add("container");

    videoElement.innerHTML = `
        <div class="video">
            <iframe src="${video.url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <div class="video-details">
                <p>${video.date} - ${video.title}</p>
            </div>
        </div>
    `;

    warfaceContainer.appendChild(videoElement);
});
