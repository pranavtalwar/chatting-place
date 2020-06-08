const socket = io()

// listening for message sent by anoter client
socket.on('message', (message) => {
    console.log(message)
})

// sending message to server
const messageForm = document.querySelector('#message-form')
const messageField = document.querySelector('input')

messageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const message = messageField.value
    socket.emit('sendMessage', message)
    messageField.value = ''
})