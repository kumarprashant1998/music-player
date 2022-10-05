// document.addEventListener("DOMContentLoaded", function () { startplayer(); }, false);
// var player;
const audioOptions = {
    song_1: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    song_2: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    song_3: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    song_4: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    song_5: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    song_6: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    song_7: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    song_8: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
    song_9: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
}

$(document).ready(() => {


    function startplayer() {
        player = $("#music-player")[0];
        player.controls = false;
    }
    $(".play-icon").click(play_aud)
    $(".pause-icon").click(pause_aud)
    // $(".forward-icon").cick(play_aud)
    startplayer();
})

function startplayer() {
    player = document.getElementById('music_player');
    player.controls = false;
}

function play_aud() {
    console.log($(this).closest(".song").get)
    player.setAttribute('src', audioOptions.song_1);
    player.play();
}
function pause_aud() {
    player.pause();
}
function change_vol() {
    player.volume = document.getElementById("change_vol").value;
}