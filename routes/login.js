var path = require("../path.js")
var userPath = path.userPath;
var basePath = path.basePath;

function handleLogin(req, res) {
  var returnObjc = {
    isLoginSuccess: true,
    userInfo: {
      name: "Bill",
      course: ["语文", "数学"]
    }
  }

  res.status(200).json(returnObjc)
}

module.exports = function(app) {
  app.get(userPath.LOGIN, function(req, res) {
    handleLogin(req, res);
  })

  /**
   * 你可以接着在这里处理你的路由。
   * app.post("这里是你的路由路径比如192.168.10.10:4000/login/mobile", function(req, res) {
   *  
   *  res.status(200).json({....})
   * })
   *
   * 这样你就可以使用了，如果你是在浏览器中进行测试请把post换成get,如果你是使用postman进行测试
   * 则不用。
   */
};

