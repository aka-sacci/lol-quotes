import iButtonTheme from '../../../interfaces/iButtonTheme'
const mutedIcon = require("../../../images/icons/mutedIcon.png")
const unmutedIcon = require("../../../images/icons/unmutedIcon.png")

function MuteButtonStyle(isMuted: boolean): iButtonTheme {

    const icon: string = !isMuted ? unmutedIcon : mutedIcon
    const button: iButtonTheme =
    {
        alignSelf: 'flex-end',
        position: 'absolute',
        right: null,
        left: '10vh',
        bottom: '5vh',

        backgroundImage: `url(${icon})`,
        width: '60px',
        height: '60px',

        enabledHoverBackground: null
    }
    return button;

}

export default MuteButtonStyle 