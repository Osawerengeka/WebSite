


function send() {

    var interval = null; //Переменная с интервалом подгрузки сообщений
    var messages__container = document.getElementById('messages');
    var sendForm = document.getElementById('chat-form'); //Форма отправки
    var messageInput = document.getElementById('message-text'); //Инпут для текста сообщения

    var var1 = null;
    var var2 = null;
    var1 ="User: " + messageInput.value + "<br/>";
    messages__container.innerHTML += var1;
    messageInput.value = '';
}