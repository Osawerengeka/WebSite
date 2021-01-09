
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function del(e){
    e.parentNode.parentNode.removeChild(e.parentNode);
}
function send() {
    var interval = null; //Переменная с интервалом подгрузки сообщений
    var messages__container = document.getElementById('messages');
    var sendForm = document.getElementById('chat-form'); //Форма отправки
    var messageInput = document.getElementById('message-text'); //Инпут для текста сообщения
    var var2 = null;
    var day = ['morning','day','afternoon','night'];
    if (messageInput.value === "hello"){
        Math.random();
        d = day[getRandomInt(4)];
        var2 = 'Bot: Good ' + d + ' Human';
    }
    else if (messageInput.value === "help") {
        var2 = "Введите help,hello,bye что бы получить ответ";
    }
    else if (messageInput.value === "bye") {
        var2 = "Bot: Bye Human";
    }
    var var1 = null;

    var1 ="User: " + messageInput.value;
    if(var2 === null) {
        let div = document.createElement('div');
        let button = document.createElement('button');
        button.setAttribute('align','right');
        button.setAttribute('class','buttonClose');
        button.setAttribute('onclick',"del(this)");
        button.innerHTML = "X";
        let p = document.createElement('p');
        p.innerText = var1;
        div.append(button);
        div.append(p);
        //messages__container.innerHTML += var1;
        messages__container.append(div);
    }
    else {
        let div = document.createElement('div');
        let div2 = document.createElement('div');
        let button = document.createElement('button');
        button.setAttribute('align','right');
        button.setAttribute('class','buttonClose');
        button.setAttribute('onclick',"del(this)");
        button.innerHTML = "X";
        let button2 = document.createElement('button');
        button2.setAttribute('align','right');
        button2.setAttribute('class','buttonClose');
        button2.setAttribute('onclick',"del(this)");
        button2.innerHTML = "X";
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        p.innerText = var1;
        p2.innerText = var2;
        div.append(button);
        div.append(p);
        div2.append(button2);
        div2.append(p2);
        //messages__container.innerHTML += var1;
        messages__container.append(div);
        messages__container.append(div2);
    }
    messageInput.value = '';
}