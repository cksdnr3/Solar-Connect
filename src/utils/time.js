const KOREAN_DAY = '일월화수목금토'
const ENGLISH_DAY = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const ENGLISH_MONTH = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const getTime = () => {
  return new Date()
}

const getFormat = (date) => {
  const Y = date.getFullYear()
  const M = date.getMonth() + 1
  const D = date.getDate()
  const h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()
  const d = date.getDay()
  return [Y,M,D,f(h),f(m),f(s),d]
}
const f = (n) => {
  return n < 10 ? '0' + n : n
}

export const koTimeFormat = () => {
  const date = getTime()
  const [ Y, M, D, h, m, s,d ] = getFormat(date)
  return `${Y}년 ${M}월 ${D}일 ${h}시 ${m}분 ${s}초 ${KOREAN_DAY[d]}요일`
}

export const enTimeFormat = () => {
  const date = getTime()
  const [ Y, M, D, h, m, s,d ] = getFormat(date)
  return `${ENGLISH_DAY[d]} ${ENGLISH_MONTH[M-1]} ${D}, ${Y} ${h}:${m}:${s}`
}