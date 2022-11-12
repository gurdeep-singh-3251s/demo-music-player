console.log('Welcome to spotify')
let index = 2;
let audioelement = new Audio(`./song1.mp3`);
let masterplay = document.getElementById('masterplay');
let gif = document.getElementById('gif');
let songs = [
        {songname:"Born To Shine", filepath:"./song1.mp3",coverpath:"https://media.newstrack.in/uploads/entertainment-news/regional-cinema-news/Sep/05/big_thumb/DILJIT_5f534efb2e3a9.JPG"},
        {songname:"chauffeur", filepath:"./song2.mp3",coverpath:"https://i.ytimg.com/vi/6nxrllqnP2Q/maxresdefault.jpg"},
    {songname:"clash", filepath:"./song3.mp3",coverpath:"https://djpunjab.video/covers/14140-0.jpg"},
    {songname:"Insane", filepath:"./song4.mp3",coverpath:"https://i1.sndcdn.com/artworks-AOyU3tMtLzVcUjB4-sFzQyg-t500x500.jpg"},
    {songname:"Raat Di Gedi", filepath:"./song5.mp3",coverpath:"https://i.ytimg.com/vi/RQaVzbxZqXY/maxresdefault.jpg"},
    {songname:"Sher Marna", filepath:"./song6.mp3",coverpath:"https://i.pinimg.com/736x/03/3f/05/033f05b47d931d44dbb04a553f623575--songs-video.jpg"}, 
];
let songitem = Array.from(document.getElementsByClassName('songitem'));
songitem.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
});


const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    })
}




Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioelement.src = `./song${index}.mp3`
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

        let songinfo  = document.getElementById('songinfo');
        songinfo.innerHTML = `${songs[index - 1].songname}`
        gif.style.opacity = 1;
    })
})


masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime <=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        let z = document.getElementById(index);
        z.classList.remove('fa-play-circle')
        z.classList.add('fa-pause-circle')
    }
    else{
        pauseaudioelement();
    }
})


const pauseaudioelement = () =>{
    audioelement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
        let z = document.getElementById(index);
        z.classList.remove('fa-pause-circle')
        z.classList.add('fa-play-circle')
}


let myprogressbar = document.getElementById('myprogressbar');
audioelement.addEventListener('timeupdate',function(){
    let percent = ((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value = percent;
})
myprogressbar.addEventListener('change',()=>{
    let timing = ((myprogressbar.value*audioelement.duration)/100)
    audioelement.currentTime = timing;
})


document.getElementById('back').addEventListener('click', ()=>{
    if(index <=1){
        index = 6;
    }
    else {
        index--;
    }
    audioelement.src = `./song${index}.mp3`
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    let songinfo  = document.getElementById('songinfo');
    songinfo.innerHTML = `${songs[index - 1].songname}`
    gif.style.opacity = 1;
})
document.getElementById('next').addEventListener('click', ()=>{
    if(index >= 6){
        index = 1;
    }
    else {
        index++;
    }
    audioelement.src = `./song${index}.mp3`
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    let songinfo  = document.getElementById('songinfo');
    songinfo.innerHTML = `${songs[index - 1].songname}`
    gif.style.opacity = 1;
})