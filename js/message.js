var APP_ID = '01CXU2dGBmFbFjm0qb1rDjht-gzGzoHsz';
var APP_KEY = 'YpjhSRMEPOmctorINAn2ERXQ';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit',function(e){
  e.preventDefault()
  let content = myForm.querySelector('input[name=content]').value
  let name = myForm.querySelector('input[name=name]').value
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.save({
    'name':name,
    'content': content
  }).then(function(object){
    window.location.reload()

  })
})

var query = new AV.Query('Message');
query.find()
  .then(
      function(messages){
        let array = messages.map((item)=>item.attributes)
        array.forEach((item)=> {
        let li = document.createElement('li')
        li.innerText = `${item.name}: ${item.content}`
        let message = document.querySelector('#messageList')
        messageList.appendChild(li)
      });
    }
  )

/*
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/