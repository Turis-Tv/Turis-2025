const channelList = [
    { name: "قناة 1", image: "https://g.top4top.io/p_2666slfsx1.jpg", source: "http://hw1.jemtv.com/app/ATVHD/playlist.m3u8" },
    { name: "قناة 2", image: "https://g.top4top.io/p_2666slfsx1.jpg", source: "https://kanal7-live.daioncdn.net/kanal7/kanal7.m3u8" },
    // إضافة المزيد من القنوات هنا
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