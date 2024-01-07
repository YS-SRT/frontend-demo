const formatInputTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const shareWithFriend=()=>{
  wx.showShareMenu({ 
    withShareTicket: true, 
    menus: ['shareAppMessage', 'shareTimeline'] 
  }) 
  return {
    title: 'MINI-PROGRM-DEMO',
    desc: '微信小程序DEMO',
    path: '/pages/login/login'
  }
}

const formatTime=()=>{
  let date = new Date();
  let ymd = date.toISOString().substring(0,10);//年-月-日
  let hms = date.toTimeString().substring(0,8);//小时-分钟-秒钟
  console.log(ymd + "-" + hms);
  return ymd + "-" + hms;//拼接
}

const randomIndex=(arrayLen) =>{
  let extendNum = arrayLen*2
  return Math.round(Math.random()*extendNum)%arrayLen
}

const swiperImgDir = "/images/swiper/"
const prodImgDir = "/images/prod/"

module.exports = {
  swiperImgDir,
  prodImgDir,
  formatTime,
  formatInputTime,
  formatNumber,
  randomIndex,
  shareWithFriend
}
