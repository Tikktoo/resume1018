var APP_ID = '01CXU2dGBmFbFjm0qb1rDjht-gzGzoHsz';
var APP_KEY = 'YpjhSRMEPOmctorINAn2ERXQ';
 AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

// 创建 TestObject 表
var X = AV.Object.extend('Frank2');
// 在表中创建一行数据
var o = new X();
// 数据内容是 words: 'Hello World!' 保存
// 如果保存成功，则运行 alert('')
o.save({
  xxxxxxxxxx: 'Fuck World!'
}).then(function() {
  console.log(arguments[0])
})
