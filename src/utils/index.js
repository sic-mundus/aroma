import moment from 'moment'

export default {

  getContrastingColor(hue) {
    return (hue.r * 0.299 + hue.g * 0.587 + hue.b * 0.114) > 170 ? 'black' : 'white'
  },

  formatDateFull(d) {
    return moment(d).format('ddd, d MMM YYYY')
  },

  formatTimestampFull(t) {
    return moment(t.toDate()).format('ddd, d MMM YYYY')
  },

  getTimelineGroup(t) {
    return moment(t.toDate()).format('ddYYYY')
  },

  getTimelineHumanGroupName(t) {
    return moment(t.toDate()).format('MMMM, YYYY')
  }

}