
const selectProdByPID = (pid)=>{
   return prodCollection.filter(
     (item)=>{
        return item.pid === pid? ture : false
     })
}

const selectProdByID = (id)=>{
  return prodCollection.filter(
    (item)=>{
       item.prods.filter((iitem)=>{
        return iitem.id === id? ture : false
       })
    })
}

const getCategoryList = ()=>{
  let list= []
  prodCollection.forEach((item)=>{
    list.push({name:item.name, pid:item.pid})
  })
  return list
}

const getAllProds = ()=>{
  let list= []
  prodCollection.forEach((item)=>{
    if(item.prods && item.prods.length > 0){
      list = list.concat(item.prods)
    }
  })
  return list
}

const prodCollection =
[{
  "name":"衣帽鞋袜",
  "pid":1,
  "prods":[
    {
     "id":103,
     "name":"连帽披肩",
     "picUrl":"cloth_3.png",
     "retailPrice":"8021",
     "detail":"带帽午休毯虎年款多功能加厚加大加绒简约多功能午休毯连帽披肩"
     },
     {"id":101,
     "name":"男装T恤",
     "picUrl":"cloth_1.png",
     "retailPrice":"4000",
     "detail":"纯色纯棉休闲圆领短袖T恤纯白亲肤厚柔软细腻面料短袖套头T恤"
     },
     {"id":102,
     "name":"连帽卫衣",
     "picUrl":"cloth_2.png",
     "retailPrice":"10050",
     "detail":"运动连帽拉链卫衣休闲开衫长袖多色运动细绒面料运动上衣"
     },
     {"id":104,
     "name":"纯棉上衣",
     "picUrl":"cloth_1.png",
     "retailPrice":"4000",
     "detail":"简洁而不简单，除了能遮风避雨还能体现人类的关怀和道德"
     }]
 },
 {
  "name":"电子产品",
  "pid":2,
  "prods":[
   {
      "id":201,
      "name":"蓝牙机盒",
      "picUrl":"elect_1.png",
      "retailPrice":"20000",
      "detail":"极光盒子4智能网络电视机顶盒6K千兆网络机顶盒4K高分辨率"

   },
   {
      "id":202,
      "name":"蓝牙耳机",
      "picUrl":"elect_2.png",
      "retailPrice":"12000",
      "detail":"迷你便携高颜值蓝牙无线耳机立体声只能触控式操作简约立体声耳机"
   },
   {
      "id":203,
      "name":"蓝牙连接",
      "picUrl":"elect_1.png",
      "retailPrice":"14000",
      "detail":"蓝牙连接一切设备，让你开始无线生活"
   },
   {
      "id":204,
      "name":"无线耳塞",
      "picUrl":"elect_2.png",
      "retailPrice":"11000",
      "detail":"迷你便携高颜值蓝牙无线耳机立体声只能触控式操作简约立体声耳机"
   },
   
  ]},
 {
  "name":"家居日用",
  "pid":3,
  "prods":[
   {
      "id":301,
      "name":"耐热盘子",
      "picUrl":"daily_1.png",
      "retailPrice":"1000",
      "detail":"简约餐盘耐热家用盘子菜盘套装多颜色简约餐盘耐热家用盘子"

   },
   {
      "id":302,
      "name":"西餐餐具",
      "picUrl":"daily_2.png",
      "retailPrice":"5000",
      "detail":"不锈钢刀叉勺套装家用西餐餐具ins简约耐用不锈钢金色银色可选"

   },
   {
      "id":303,
      "name":"刀叉餐具",
      "picUrl":"daily_2.png",
      "retailPrice":"5000",
      "detail":"有别于筷子的费劲，这套餐具可以带给你远古自然随意的历史气息"
   },
    {
      "id":304,
      "name":"午餐盘子",
      "picUrl":"daily_1.png",
      "retailPrice":"5000",
      "detail":"高档才见品味，只有这样才能算是品质生活"

   }]
},
{
  "name":"母婴养护",
  "pid":4,
},
{
  "name":"食品杂粮",
  "pid":5,
},
{
  "name":"厨房烹饪",
  "pid":6,
}]

module.exports = {
  prodCollection,
  selectProdByPID,
  selectProdByID,
  getCategoryList,
  getAllProds
}
