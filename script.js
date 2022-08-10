console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');

let mPlay = document.getElementById("mPlay");

let myProgressBar = document.getElementById("myProgressBar");

let gif = document.getElementById("gif");

let mSongName = document.getElementById("mSongName");

let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {
        songName: "Let me love you",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg",
    },
    
    {
        songName: "Ab ke sawaan",
        filePath: "songs/2.mp3",
        coverPath: "covers/2.jpg",
    },

    {
        songName: "Car nachdi",
        filePath: "songs/3.mp3",
        coverPath: "covers/3.jpg",
    },

    {
        songName: "Care ni karda",
        filePath: "songs/4.mp3",
        coverPath: "covers/4.jpg",
    },

    {
        songName: "channa mereya",
        filePath: "songs/5.mp3",
        coverPath: "covers/5.jpg",
    },

    {
        songName: "Chithiyaan",
        filePath: "songs/6.mp3",
        coverPath: "covers/6.png",
    },

    { songName: "Dollar", 
    filePath: "songs/7.mp3", 
    coverPath: "covers/7.jpg" },
    {
        songName: "Gaddi pichhe naa",
        filePath: "songs/8.mp3",
        coverPath: "covers/8.png",
    },

    {
        songName: "Gun gun guna",
        filePath: "songs/9.mp3",
        coverPath: "covers/9.jpg",
    },

    {
        songName: "Kina chir",
        filePath: "songs/10.mp3",
        coverPath: "covers/10.png",
    },

    {
        songName: "Koi vi nahi",
        filePath: "songs/11.mp3",
        coverPath: "covers/11.png",
    },

    {
        songName: "Na na na na",
        filePath: "songs/12.mp3",
        coverPath: "covers/12.jpg",
    },

    { songName: "Pungi", 
    filePath: "songs/13.mp3", 
    coverPath: "covers/13.jpg" },

    { songName: "Safari", 
    filePath: "songs/14.mp3", 
    coverPath: "covers/14.PNG" },

    { songName: "Sorry", 
    filePath: "songs/15.mp3", 
    coverPath: "covers/15.jpg" },

    {
        songName: "Yarr ni milyaa",
        filePath: "songs/16.mp3",
        coverPath: "covers/16.jpg",
    },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//audioElement.play();

//handel play/pause click

mPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <=0) {
        audioElement.play();
        mPlay.classList.remove("fa-play-circle");
        mPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        mPlay.classList.remove("fa-pause-circle");
        mPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});

// Listen to Events

audioElement.addEventListener("timeupdate", () => {
    //update seekbar

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime =(myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
        element.classList.add('fa-pause-circle');  
    element.classList.add('fa-play-circle');

    });
}


Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{

    element.addEventListener('click' ,(e)=>{
       console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mSongName.innerText =songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        mPlay.classList.remove('fa-play-circle');
        mPlay.classList.add('fa-pause-circle');
    })
});



 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=15){
        songIndex = 0
    }
    else{
    songIndex += 1;
}

audioElement.src = `songs/${songIndex+1}.mp3`;
mSongName.innerText =songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
mPlay.classList.remove('fa-play-circle');
mPlay.classList.add('fa-pause-circle');

 })


 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
    songIndex -= 1;
}

audioElement.src = `songs/${songIndex+1}.mp3`;
mSongName.innerText =songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
mPlay.classList.remove('fa-play-circle');
mPlay.classList.add('fa-pause-circle');

});


  






















