const chatContainer = document.getElementById('chat');
const userInput = document.getElementById('user-input');

// Initial message from Bujjii
appendMessage('Bujjii', 'Hi, Im Bujjii! What is your name?', 'bujjii-message');

function sendMessage() {
    const userMessage = userInput.value;
    if (!userMessage.trim()) return;

    appendMessage('You', userMessage, 'user-message');
    respondToMessage(userMessage);

    userInput.value = '';
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function appendMessage(sender, message, messageClass) {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messageDiv.classList.add('message', messageClass);
    chatContainer.appendChild(messageDiv);

    // Scroll to the bottom of the chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to close the chat
function closeChat() {
    appendMessage('Bujjii', 'Bye Bye👋👋👋.');
    // Disable user input and send button
    userInput.disabled = true;
    document.getElementById('send-btn').disabled = true;
}