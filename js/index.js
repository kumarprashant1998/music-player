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
    let songIndex = 1
    let selectedSong = audioOptions["song_" + songIndex];
    function startplayer() {
        player = $('#music-player')[0];
        player.controls = false;
    }

    function playPauseAudio() {
        songIndex = $(this).closest('.song')[0].id;
        selectedSong = audioOptions["song_" + songIndex];
        if ($(this).hasClass('playing')) {
            $('.play-pause-icon').removeClass('playing');
            $('.play-pause-icon').find('i').addClass('fa-pause');
            $('.play-pause-icon').each(function (index) {
                if ($("#song-title").text() === $(this).siblings("span").text()) {
                    $(".play-control .play-pause-icon").removeClass("playing")
                    $(".play-control .play-pause-icon i").removeClass('fa-pause').addClass('fa-play');
                    $(this).find('i').removeClass('fa-pause').addClass('fa-play');
                }
            })
            $(this).find('i').removeClass('fa-pause').addClass('fa-play');
            player.pause();
        }
        else {
            $('.play-pause-icon').removeClass('playing');
            $(this).addClass('playing');
            $('.play-pause-icon').find('i').addClass('fa-play');
            $(this).find('i').removeClass('fa-play').addClass('fa-pause');
            if (!$(this).hasClass('init')) {
                $("#song-title").text($(this).siblings("span").text());
                player.setAttribute('src', selectedSong);
            }
            $('.play-pause-icon').each(function (index) {
                if ($("#song-title").text() === $(this).siblings("span").text()) {
                    $(".play-control .play-pause-icon").addClass("playing")
                    $(".play-control .play-pause-icon i").removeClass('fa-play').addClass('fa-pause');
                    $(this).find('i').removeClass('fa-play').addClass('fa-pause');
                }
            })

            player.play();
        }
    }

    function previousSong() {

    }
    function nextSong() {
        selectedSong = audioOptions[`song_${++songIndex}`]
        playPauseAudio();
    }

    function seek(value) {
        let seekto = player.duration * (value / 100);
        player.currentTime = seekto;
    }


    startplayer();

    $('.play-pause-icon').click(playPauseAudio);
    $('.forward-icon').click(nextSong);
    $('.backward-icon').click(previousSong);
    $('.listen').click(function () {
        $('#album-title').text($(this).siblings(".album-name").text());
    });
});