const socket = io()

// listening for message sent by anoter client
socket.on('message', (message) => {
    console.log(message)
})

// sending message to server
const messageForm = document.querySelector('#message-form')

messageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const message = e.target.elements.message.value
    socket.emit('sendMessage', message)
    e.target.elements.message.value = ''
})