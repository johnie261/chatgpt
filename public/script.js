

const form = document.querySelector(".form");
const chatContainer = document.querySelector("#chat_container");
const freeTry_element = document.getElementById("freeTry");
const remove_element = document.getElementById("form_input_data");

let loadInterval;

const loader = (element) => {
  element.textContent = "";

  loadInterval = setInterval(() => {
    element.textContent += ""

    if(element.textContent === "...") {
      element.textContent =""
    }
  }, 300)
}

const typeText = (element, text) => {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval)
    }
  }, 20)
}

const generateUniqueId = () => {
  const timestamp = Date.now()
  const randomNumber = Math.random();
  const hexa = randomNumber.toString(16)
  return `id-${timestamp}-${hexa}`
}

const chatStripe = (isAi, value, uniqueId) => {
  return `
    <div class="wrapper">
      <div className="chat">
        <div class="profile">
          <img 
            src=${isAi ? "bot.svg" : "user.svg"}
            alt=${isAi ? "bot.svg" : "user.svg"}
          />
        </div>
        <div class="message" id=${uniqueId}>
          ${value}
        </div>
      </div>
    </div>
  `
}

const handleSubmit = async (e) => {
  e.preventDefault()

  const data = new FormData(form);

  chatContainer.innerHTML += chatStripe(false, data.get("prompt"));
  form.reset();

  const uniqueId = generateUniqueId()
  chatContainer.innerHTML += chatStripe(true, "", uniqueId);

  const messageDiv = document.getElementById(uniqueId);

  loader(messageDiv)

  const response = await fetch("https://localhost:4000", {
    method: "POST",
    headers: {
      "Content-Type": "application;json",
    },
    body: JSON.stringify({
      prompt: data.get("prompt")
    })
  });

  clearInterval(loadInterval)
  messageDiv.innerHTML(" ")

  if (response.ok) {
    const data = await response.json()
    const parsedData = data.bot.trim()

    typeText(messageDiv, parsedData);
    const freeTrail = localStorage.getItem("freeTrail");
    const FREE_TRAIL = JSON.parse(freeTrail);

    if (FREE_TRAIL == 1) {
      const freeTrail = JSON.stringify(2);
      localStorage.setItem("freeTrail", freeTrail);
      freeTry_element.innerHTML = 2;
    } else if (FREE_TRAIL == 2) {
      const freeTrail = JSON.stringify(3);
      localStorage.setItem("freeTrail", freeTrail);
      freeTry_element.innerHTML = 3;
    } else if (FREE_TRAIL == 3) {
      const freeTrail = JSON.stringify(4);
      localStorage.setItem("freeTrail", freeTrail);
      freeTry_element.innerHTML = 4;
    } else if (FREE_TRAIL == 4) {
      const freeTrail = JSON.stringify(4);
      localStorage.setItem("freeTrail", freeTrail);
      freeTry_element.innerHTML = 5;
      remove_element.remove()
    } else if (FREE_TRAIL == 5) {
      console.log("Pro Member")
    } else {
      const freeTrail = JSON.stringify(1);
      localStorage.setItem("freeTrail", freeTrail);
      freeTry_element.innerHTML = 1;
    }
  } else {
    const error = await response.text();

    messageDiv.innerHTML = "Something went very wrong, Reload page"
    alert (error)
  }
}