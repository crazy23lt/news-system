const isvalidEmail = function(value) {
  let mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  return mailReg.test(value);
};
//  验证用户名  用户名要求 数字、字母、下划线的组合，其中数字和字母必须同时存在*
const isvalidUsername = function(value) {
  let reg = /^(?![^A-Za-z]+$)(?![^0-9]+$)[0-9A-Za-z_]{4,15}$/;
  return reg.test(value);
};
// 验证密码   密码，以字母开头，长度在8~18之间，只能包含字母、数字和下划线
const isValidPassword = function(value) {
  const reg = /^[a-zA-Z]\w{8,18}$/;
  return reg.test(value);
};
module.exports = { isvalidEmail, isvalidUsername, isValidPassword };
