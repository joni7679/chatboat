const apikey = "AIzaSyCN2uWh_ZotBX7TPZTnc3gV9jUE77iKXWU";
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

let btn = document.querySelector("#btn");
let inputField = document.querySelector("#user-input");
let chatArea = document.querySelector("#chat-area");

//  send button to sms 
btn.addEventListener("click", () => handleUserInput());

// Handle Enter key logic here 
inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleUserInput();
    }
});

// Handle input logic here........
function handleUserInput() {
    let userInput = inputField.value.trim();
    if (!userInput) {
        alert("Please enter a message");
    }

    if (userInput.length < 3) {
        return alert("Please enter at least 3 characters");
    }
    else {
        addUserMessage(userInput);
        inputField.value = "";
        showTypingLoader();
        generateResponse(userInput);
    }
}

// Add user message to chat
function addUserMessage(msg) {
    const message = `
        <div class="flex items-end justify-end gap-3">
            <div class="bg-green-500 text-white px-4 py-2 rounded-2xl max-w-xs">
                <p>${msg}</p>
            </div>
            <div class="w-8 h-8 bg-green-700 rounded-full overflow-hidden">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" class="w-full h-full object-cover">
            </div>
        </div>`;
    chatArea.innerHTML += message;
    scrollToBottom();
}

// Add bot message
function addBotMessage(msg) {
    const message = `
        <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-blue-700 rounded-full overflow-hidden">
                <img src="https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg" alt="bot" class="w-full h-full object-cover">
            </div>
            <div class="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs">
                <p>${msg}</p>
            </div>
        </div>`;
    removeTypingLoader();
    chatArea.innerHTML += message;
    scrollToBottom();
}

// Typing loader
function showTypingLoader() {
    const loader = `
        <div id="typing-loader" class="flex items-start gap-3">
            <div class="w-8 h-8 bg-blue-700 rounded-full overflow-hidden">
                <img src="https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg" class="w-full h-full object-cover" alt="bot">
            </div>
            <div class="bg-blue-300 text-white px-4 py-2 rounded-2xl max-w-xs animate-pulse">
                <p>Typing...</p>
            </div>
        </div>`;
    chatArea.innerHTML += loader;
    scrollToBottom();
}

function removeTypingLoader() {
    const loader = document.getElementById("typing-loader");
    if (loader) loader.remove();
}

function scrollToBottom() {
    chatArea.scrollTop = chatArea.scrollHeight;
}

// api call 
let generateResponse = async (prompt) => {
    try {
        const res = await fetch(`${API_URL}?key=${apikey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });
        const data = await res.json();
        const reply = data.candidates?.[0].content?.parts[0]?.text;
        if (reply) {
            addBotMessage(reply);
        }
    } catch (err) {
        removeTypingLoader();
        addBotMessage("Sorry, I couldn't respond. Please try again.");
        console.error(err);
    }
}
