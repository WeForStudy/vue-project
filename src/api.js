// export default (config => {
//   return Object.keys(config).reduce((copy, name) => {
//     copy[name] = config[name]
//     return copy
//   }, {})
// })({
//   'getData': '/api/data/get',
// })
export default {
  getData: '/api/data/get',
}
// function init(config) {
//   const keysArr = Object.keys(config)
//   let obj = {}
//   for(let i = 0; i < keysArr.length; i++) {

//     obj[keysArr[i]] = config[keysArr[i]]
//   }
//   return keysArr
// }
// let params = {
//   'getData': '/api/data/get',
// }
// export default init(params)
