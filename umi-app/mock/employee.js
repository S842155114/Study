import employees from "./data.json"

export default{
    'Get /api/data':(_,response)=>{
      response.send(employees)
    },
    "POST /api/data": (req, res) => {
      // 添加跨域请求头
      res.setHeader("Access-Control-Allow-Origin", "*");
      const body = req.body
      let fs = require ('fs')
      fs.writeFileSync('./mock/data.json',JSON.stringify(body))
      res.end("写入成功");
    }
}