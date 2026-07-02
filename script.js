const input = document.getElementById('userInput');
const chatBox = document.getElementById('chat-box');
const sendBtn = document.getElementById('sendBtn');

function addMessage(text, sender) {
    const div = document.createElement('div');
    div.classList.add('message', sender);
    div.textContent = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight; // Rola automaticamente para baixo
}

function handleSend() {
    const text = input.value.trim();
    if (text === "") return;

    addMessage(text, 'user');
    input.value = "";
    input.focus();

    // Aqui seria a lógica de "processamento"
    setTimeout(() => {
        addMessage("Interessante... me conte mais sobre: " + text, 'ai');
    }, 1000);
}

// Evento do clique
sendBtn.addEventListener('click', handleSend);

// Evento da tecla Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});
