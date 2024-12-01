const gtaVideos = [
    {
        url: "https://www.youtube.com/embed/BfM5f91PhyQ?autoplay=1&mute=1",
        date: "2024.08.22",
        title: "Bank Robberies I"
    },
    {
        url: "https://www.youtube.com/embed/S-gWuOvdLl0?autoplay=1&mute=1",
        date: "2024.05.08",
        title: "GhostBridge"
    },
    {
        url: "https://www.youtube.com/embed/ngfGPnOWaPs?autoplay=1&mute=1",
        date: "2024.02.06",
        title: "Movie with GTA friends II."
    },
    {
        url: "https://www.youtube.com/embed/4sDv1U3j6Mo?autoplay=1&mute=1",
        date: "2022.08.20",
        title: "Happy Birthday GTAHunyadi"
    },
    {
        url: "https://www.youtube.com/embed/cXtDRr-ah8Y?autoplay=1&mute=1",
        date: "2022.09.23",
        title: "The short GTAV movie"
    },
    {
        url: "https://www.youtube.com/embed/2PArC3fc4g4?autoplay=1&mute=1",
        date: "2022.05.05",
        title: "Movie with GTA friends"
    },
    {
        url: "https://www.youtube.com/embed/weiyiVe2LuE?autoplay=1&mute=1",
        date: "2022.03.18",
        title: "SUV Drift"
    },
    {
        url: "https://www.youtube.com/embed/dYfCD3NiZVI?autoplay=1&mute=1",
        date: "2022.03.14",
        title: "Hustle&Bustle"
    },
    {
        url: "https://www.youtube.com/embed/aT-viqlS9iU?autoplay=1&mute=1",
        date: "2022.02.23",
        title: "DriftKing or something similar"
    },
    {
        url: "https://www.youtube.com/embed/P84Yn3DNWBo?autoplay=1&mute=1",
        date: "2021.12.31",
        title: "Waiting for a better NewYear"
    },
    {
        url: "https://www.youtube.com/embed/lBlJW2UpGoU?autoplay=1&mute=1",
        date: "2021.12.18",
        title: "Two brothers in an individual business"
    },
    {
        url: "https://www.youtube.com/embed/ZCeRGoSqx-0?autoplay=1&mute=1",
        date: "2021.12.13",
        title: "Stealing back the gold of FIB"
    },
    {
        url: "https://www.youtube.com/embed/-2oAzt2ayFs?autoplay=1&mute=1",
        date: "2021.12.02",
        title: "2PC1Gamer is just an average dual gaming day in GTA V Online"
    },
    {
        url: "https://www.youtube.com/embed/qVEB6JkQQ5o?autoplay=1&mute=1",
        date: "2021.10.10",
        title: "Drive with 2 cars at once"
    },
    {
        url: "https://www.youtube.com/embed/vPVE1GaYXKg?autoplay=1&mute=1",
        date: "2021.04.29",
        title: "DualDrifter"
    },
    {
        url: "https://www.youtube.com/embed/q1xhMljP5L4?autoplay=1&mute=1",
        date: "2021.04.14",
        title: "Pleiata drift"
    },
    {
        url: "https://www.youtube.com/embed/H6M21mLFgEE?autoplay=1&mute=1",
        date: "2021.04.14",
        title: "The Dual Gamer"
    }
];

const gtaContainer = document.getElementById("gta-v-videos-container");

gtaVideos.forEach(video => {
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

    gtaContainer.appendChild(videoElement);
});
