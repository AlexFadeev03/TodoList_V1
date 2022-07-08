let myNodeList = document.getElementsByTagName('li');
for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement('span');
    let text = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(text);
    myNodeList[i].appendChild(span);
}

let close = document.getElementsByClassName('close')
for (let i = 0; i < myNodeList.length; i++) {
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
    if(event.target.tagName ==='li'){
        event.target.classList.toggle('checked');
    }
}, false);

