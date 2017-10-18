
var userPath = {
  LOGIN: '/login'
};

/**
 * 你可以把你的路由放在这里进行管理
 * 当然这只是为了方便你的使用比如你可以在userPath里添加一个
 * var userPath = {
    LOGIN: '/login',
    ACTIVE: '/active'
  };
 * 
 * 当然你也可以添加一个新的对象去管理你的路径
 * 
 * var bankInfo = {
 *  GET_BANK_INFO: '/bankInfo'
 * }
 * 
 * 在下面的module里进行导出
 * module.exports = {
    userPath: userPath,
    bankInfo: bankInfo
  }
 * 
 * 然后你就可以在外界像使用userPath一样使用它啦。
 */

module.exports = {
  userPath: userPath
}
