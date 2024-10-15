console.log("Welcome to Javelin Web Design!");

const button = document.querySelector(".enter-button");
const nameBox = document.querySelector("#name-box");
const emailBox = document.querySelector("#email-box");
const messageBox = document.querySelector("#message-box");

function sendMessage() {
    if (emailBox.value === "" || nameBox.value === "" || messageBox.value === "") {
        alert("Please fill out empty inputs.");
        return
    }

    const webhookUrl = "https://discordapp.com/api/webhooks/1295690344482209792/1MkSbSIhBT7fTgg0-JtNEqaphJLW8dijdic3Hpuo7-x_Ym9dEIp2pQMO6oqY9ZZt82HE";
    const message = {
        embeds: [
            {
                title: nameBox.value,
                description: `Email: ${emailBox.value}\nMessage: ${messageBox.value}`
            }
        ]
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", webhookUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    const payload = JSON.stringify(message);
    xhr.send(payload);
}

button.addEventListener('click', sendMessage)
