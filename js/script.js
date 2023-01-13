let doc = document
let form = doc.forms
let cont = doc.querySelector('.content')
let btn = doc.querySelectorAll('.btn')
let inp = doc.querySelector('#tusk')
let btn2 = doc.querySelector('.copypast')
let h = doc.createElement('h1')

for(let item of btn){
    if(item.dataset.btn == "send"){
console.log('s');
    }else if(item.dataset.btn == "copy"){
        console.log('c');
    }else if(item.dataset.btn == "delite"){
        console.log('d');
    }else{
        console.error('ошибка');
    }

}

// cloneNode(true)
// removeChild(h1)
// append()





