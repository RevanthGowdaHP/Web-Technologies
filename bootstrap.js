const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}

function click(){
  let names="July";
  console.log(names);
  smash();
}
function smash(){
  let go = "ON the way";
  console.log(go);
  console.log(bro);
}
var bro= "Code";


bro = {yo:I,soy:Image,buenos:good};

var nice= new Object();
nice.yo="lo";
nice.soy="beans";
console.log(nice);

function good(yo,buenos){
this.yo=yo;
this.buenos=buenos;
}

senor = new good(whatsapp,gracias);
console.log(senor.yo);
console.log(senor.buenos);
document.write(senor.buenos);

var array = [1,3,43];
for(d=0;d<array.length;d++){
  console.log(array[d]);
}
var aeear1 = new Array(1,23,5);
