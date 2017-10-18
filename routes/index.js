module.exports = function(app) {
  require('./login.js')(app);
  /**
   * 这里应该像导入login.js一样导入你的模块
   * 当然你可以把所有路由的请求都放在login.js里。
   * 但是这样做等你维护起来是不是感觉很乱。
   */
};
