export default {

    getContrastingColor(hue) {
        return (hue.r * 0.299 + hue.g * 0.587 + hue.b * 0.114) > 170 ? 'black' : 'white'
    }

}