const faqData = [
    {
        question: "Hi",
        answer: "Hello! How can I help you today?"
    },
    {
        question: "Hello",
        answer: "Hi there! Let me know what you need help with."
    },
    {
        question: "Plz help me",
        answer: "Sure! Tell me your question and I’ll try my best to assist."
    },
    {
        question: "today date",
        answer: `Aajker tarikh holo: ${new Date().toLocaleDateString("en-IN", { day: '2-digit', month: '2-digit', year: 'numeric' })}`
    },
    {
        question: "Ki bhabe ChatGPT use korbo?",
        answer: "Just type your question in the chatbox. ChatGPT will try to give you helpful answers instantly."
    },
    {
        question: "how are u?",
        answer: "Ami ekta AI chatbot, developed by OpenAI. Ami tomake onek rokomer prosno-te help korte pari."
    },
    {
        question: "Free te AI use korar kono way ache?",
        answer: "Yes, ChatGPT free version available ache at https://chat.openai.com. You can also try Google Bard, Microsoft Copilot etc."
    },
    {
        question: "Mobile theke ki coding shikha jabe?",
        answer: "Absolutely! Tumi apps like Sololearn, Programming Hero, or web platforms like W3Schools use korte paro."
    },
    {
        question: "How to delete my Instagram account permanently?",
        answer: "Go to https://www.instagram.com/accounts/remove/request/permanent/ > Login > Select reason > Re-enter password > Tap 'Delete account'."
    },
    {
        question: "How to recover deleted photos on Android?",
        answer: "Open Google Photos > Tap 'Library' > 'Trash' > Select photos > Tap 'Restore'."
    },
    {
        question: "How to create a UPI ID?",
        answer: "Install any UPI app (like Google Pay, PhonePe) > Link bank account > UPI ID auto-creates during setup."
    },
    {
        question: "How to check if PAN card is linked to Aadhaar?",
        answer: "Visit https://www.incometax.gov.in/ > Click 'Link Aadhaar' > Enter PAN & Aadhaar > Status will show."
    },
    {
        question: "How to record a phone call on Android?",
        answer: "Use Google Phone app > Tap 3-dots during call > Tap 'Record' (if supported). Otherwise, use third-party apps."
    },
    {
        question: "How to find lost phone using Google?",
        answer: "Go to https://www.google.com/android/find > Login with same Google ID > Locate your phone on map."
    },
    {
        question: "How to check PF balance with UAN number?",
        answer: "Visit https://www.epfindia.gov.in/ > Services > For Employees > Member Passbook > Login with UAN."
    },
    {
        question: "How to download COVID vaccine certificate?",
        answer: "Go to https://www.cowin.gov.in/ > Login with mobile OTP > Download certificate from dashboard."
    },
    {
        question: "How to recharge mobile from Google Pay?",
        answer: "Open Google Pay > Tap 'Mobile Recharge' > Enter number > Select plan > Pay."
    },
    {
        question: "How to stop spam calls and messages?",
        answer: "Activate DND via TRAI: SMS 'START 0' to 1909 or use your carrier’s DND page."
    },
    {
        question: "How to transfer contacts from old phone to new?",
        answer: "Use Google Account sync > Sign in with same account on new phone > Contacts auto-sync."
    },
    {
        question: "How to enable dark mode in Chrome browser?",
        answer: "Open Chrome > Tap 3 dots > Settings > Theme > Select 'Dark'."
    },
];


// user input logic here key down and onclick
let btn = document.querySelector("#btn");
let inputField = document.querySelector("#user-input");
let chatArea = document.querySelector("#chat-area");

btn.addEventListener("click", () => handleUserInput());
inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleUserInput()
    }
});
function handleUserInput() {
    let userText = inputField.value.trim();
    console.log("usertxt", userText);

    if (!userText) {
        alert("plz filled this box......");
    }
    else if (userText.length < 2) {
        alert("plz enter more than 2 character");
    }
    else {
        displayUserMessage(userText)
        let reply = faqData.find(faq => faq.question.toLowerCase().includes(userText.toLowerCase()));
        console.log(reply);
        if (reply) {
            displayBoatAnswer(reply)
        }
        inputField.value = "";
    }
}

// user sms dispaly logic here
let displayUserMessage = (text) => {
    let clutter = ` <div class="flex items-end justify-end gap-3">
            <div class="bg-green-500 text-white px-4 py-2 rounded-2xl max-w-xs">
                <p>${text}</p>
            </div>
            <div class="w-8 h-8 bg-green-700 rounded-full overflow-hidden">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" class="w-full h-full object-cover">
            </div>
        </div>`
    chatArea.innerHTML += clutter;

}


// resutl sms logic here
let displayBoatAnswer = (data) => {
    let clutter = ` <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-blue-700 rounded-full overflow-hidden">
                <img src="https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg" alt="bot" class="w-full h-full object-cover">
            </div>
            <div class="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs">
                <p>${data.answer}</p>
            </div>
        </div>`
    chatArea.innerHTML += clutter;
}