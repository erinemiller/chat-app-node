console.log(`Hello World from app.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

// user types, presses send, message appears

// user types, presses send, send message to server, message appears

// user types, presses send, get message from field, send message to server, 
// message appears

// user types, presses send, get message from field, send message to server,
// get message list from server,  message appears

let messagesUL = document.querySelector("ul.messages");

let showMessageOnDOM = function(messages) {
    console.log("show messages", messages)

    messagesUL.innerHTML = "";
    
    // while (messagesUL.children.length) {
    //     messagesUL.removeChild ( messagesUL.children[0])
    // }

    messages.forEach(function(message) {
        let newMessage = document.createElement("li");
        newMessage.innerText = message.text
        messagesUL.appendChild ( newMessage )
    })
}



let sendMessage = function() {
    let field = document.querySelector('input[name="new-message"]');
    if (field.value){
        console.log("send to server", field.value)

        axios // 172.31.16.162
            .post("http://172.31.17.54:1337/message", {
                text: field.value
            })
            .then(function(response){
                console.log("cool")
                field.value = ""; // put it in here so it only happen upon successful submision
                console.log("server respsonded", response)
                showMessageOnDOM(response.data)
            })
            .catch(function(error){
                console.log("sucks")
            })
    } else {
        // user sucks
    }
}

document.querySelector("button.send").addEventListener("click", sendMessage)