function playAudio(quote) {
    const audioName = quote + ".ogg"
    var audio = new Audio('audios/' + audioName);
    audio.play();

}



export default playAudio