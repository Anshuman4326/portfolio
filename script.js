// Theme toggle script
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
});

console.log('Portfolio script loaded');

// Chatbot functionality
const chatToggle = document.getElementById('chat-toggle');
const chatBot = document.getElementById('chatbot');
const chatClose = document.getElementById('close-chat');
const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

chatToggle.addEventListener('click', () => chatBot.classList.toggle('open'));
chatClose.addEventListener('click', () => chatBot.classList.remove('open'));
chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

function addMessage(text, sender = 'bot') {
    const msgEl = document.createElement('div');
    msgEl.className = 'message ' + sender;
    msgEl.textContent = text;
    chatMessages.appendChild(msgEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    chatInput.value = '';

    // basic response logic
    setTimeout(() => {
        let reply = "Sorry, I didn't understand that. You can ask me about projects, contact info, or just say hi.";
        const lowered = text.toLowerCase();
        if (lowered.includes('hi') || lowered.includes('hello') || lowered.includes('hey')) reply = 'Hello! How can I help you today?';
        else if (lowered.includes('project')) reply = 'Check out the Projects section above!';
        else if (lowered.includes('contact') || lowered.includes('email')) reply = 'You can email me using the contact link.';
        else if (lowered.includes('portfolio')) reply = 'This is my portfolio website showing my work and skills.';
        else if (lowered.includes('help')) reply = 'Try asking about my projects, contact info, or just greet me!';
        addMessage(reply, 'bot');
    }, 500);
}