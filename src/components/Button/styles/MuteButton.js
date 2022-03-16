const MuteButtonStyle = (isMuted) => {

    const icon = !isMuted ? "url('images/icons/unmutedIcon.png')" : "url('images/icons/mutedIcon.png')"
    
    return {
        alignSelf: 'flex-end',
        position: 'absolute',
        right: null,
        left: '10vh',
        bottom: '5vh',

        backgroundImage: icon,
        width: '60px',
        height: '60px',
        
        enabledHoverBackground: null
    };

}

export default MuteButtonStyle