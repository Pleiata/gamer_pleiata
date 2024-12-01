const nfsHeatVideos = [
    {
        url: "https://www.youtube.com/embed/mFKP5q4ocnc?autoplay=1&mute=1",
        date: "2022.07.25",
        title: "NFS Heat - Two-handed driving skills"
    },
    {
        url: "https://www.youtube.com/embed/Jkm8a0QIsJo?autoplay=1&mute=1",
        date: "2022.02.28",
        title: "NFS Heat - When you are in the same place twice"
    },
    {
        url: "https://www.youtube.com/embed/BBjodFdyFyk?autoplay=1&mute=1",
        date: "2021.10.10",
        title: "NFS Heat - How to drive 2 cars at once"
    }
];

const nfsHeatContainer = document.getElementById("nfs-heat-videos-container");

nfsHeatVideos.forEach(video => {
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

    nfsHeatContainer.appendChild(videoElement);
});
