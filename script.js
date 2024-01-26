var likes1 = 0;
var likes2 = 0;
var likes3 = 0;
// var likeCount = document.querySelector(".likes");
var NielsLikes = document.querySelector("#NielsLikes");
var NicholesLikes = document.querySelector("#NicholesLikes");
var JimsLikes = document.querySelector("#JimsLikes");

// console.log(likeCount);

function addLikesNiel() {
    likes1++;
    NielsLikes.innerText = likes1 + " Like(s)";
    console.log(likes1);
}

function addLikesNichole() {
    likes2++;
    NicholesLikes.innerText = likes2 + " Like(s)";
    console.log(likes2);
}

function addLikesJim() {
    likes3++;
    JimsLikes.innerText = likes3 + " Like(s)";
    console.log(likes3);
}