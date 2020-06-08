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

    socket.emit('sendMessage', message, (error) => {
        if(error) {
            return console.log(error)
        }

        console.log('message delivered')
    })

    e.target.elements.message.value = ''
})

const locationButton = document.querySelector('#send-location')

locationButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        socket.emit('sendLocation', { latitude, longitude }, () => {
            console.log('Location shared!')
        })
    })

})