$(document).ready(() => {
    const audioOptions = {
        song_1:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
        song_2:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
        song_3:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
        song_4:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
        song_5:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
        song_6:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
        song_7:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
        song_8:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
        song_9:
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
    };
    let seletedSong = $("#song-title");



    function startplayer() {
        player = $('#music-player')[0];
        player.controls = false;
    }

    function playPauseAudio() {
        if ($(this).hasClass('playing')) {
            $('.play-pause-icon').removeClass('playing');
            $('.play-pause-icon').find('i').addClass('fa-pause');
            $(this).find('i').removeClass('fa-pause').addClass('fa-play');
            player.pause();
        }
        else {
            $('.play-pause-icon').removeClass('playing');
            $(this).addClass('playing');
            $('.play-pause-icon').find('i').addClass('fa-play');
            $(this).find('i').removeClass('fa-play').addClass('fa-pause');
            if (!$(this).hasClass('init')) {
                seletedSong.text($(this).siblings("span").text());
                player.setAttribute('src', audioOptions[$(this).closest('.song')[0].id]);
            }
            player.play();
        }
    }

    function change_vol() {
        player.volume = document.getElementById('change_vol').value;
    }
    function seek(value) {
        console.log(value)
        let seekto = player.duration * (value / 100);
        player.currentTime = seekto;
    }


    startplayer();

    $('.play-pause-icon').click(playPauseAudio);
});