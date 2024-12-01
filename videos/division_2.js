const division2Videos = [
    {
        url: "https://www.youtube.com/embed/spWhPlwde_s?autoplay=1&mute=1",
        date: "2021.06.18",
        title: "Tom Clancy's The Division 2 - Capturing the solar farm with dual gaming mode"
    }
];

const division2Container = document.getElementById("division-2-videos-container");

division2Videos.forEach(video => {
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

    division2Container.appendChild(videoElement);
});
