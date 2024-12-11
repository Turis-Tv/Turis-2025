const channelList = [
    { name: "Atv", image: "https://od.lk/s/OTFfMzE0ODk1MjZf/24.png", source: "http://hw1.jemtv.com/app/ATVHD/playlist.m3u8" },
    { name: "Kanal7", image: "https://od.lk/s/OTFfMzE0ODk1MjZf/24.png", source: "https://kanal7-live.daioncdn.net/kanal7/kanal7.m3u8" },
    { name: "Atv", image: "https://od.lk/s/OTFfMzE0ODk1MjZf/24.png", source: "https://tgn.bozztv.com/trn03/gt-atv-tv/tracks-v1a1/mono.m3u8" },
    { name: "Fox Tv", image: "https://od.lk/s/OTFfMzE0ODk1MjZf/24.png", source: "http://hw1.jemtv.com/app/FoxTurkey/playlist.m3u8" },
    // إHindistan'ın Yeni Yılı
];

const channelListContainer = document.getElementById("channel-list");
const videoPlayer = new Plyr(document.getElementById("iptv-player"));

channelList.forEach(channel => {
    const channelElement = document.createElement("div");
    channelElement.classList.add("channel");
    const imageElement = document.createElement("img");
    imageElement.src = channel.image;
    const nameElement = document.createElement("p");
    nameElement.textContent = channel.name;
    channelElement.appendChild(imageElement);
    channelElement.appendChild(nameElement);
    channelElement.addEventListener("click", () => {
        videoPlayer.source = {
            type: 'video',
            sources: [
                {
                    src: channel.source,
                    type: 'application/x-mpegURL',
                },
            ],
        };
        videoPlayer.play();
    });
    channelListContainer.appendChild(channelElement);
});