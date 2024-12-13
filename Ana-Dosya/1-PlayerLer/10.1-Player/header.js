const header = document.createElement("header");
const navbarDiv = document.createElement("div");
navbarDiv.classList.add("navbar");





const canliTvlink = document.createElement("a");
const haberlink = document.createElement("a");
const sporlink = document.createElement("a");
const belgesellink = document.createElement("a");



document.body.appendChild(header);



CanliTv.appendChild(canliTvlink);
Haber.appendChild(haberlink);
Spor.appendChild(sporlink);
Belgesel.appendChild(belgesellink);

canliTvlink.setAttribute("href" , "index.html")
haberlink.setAttribute("href","haber.html")


