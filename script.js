let currentUser = {

  id: null,

  name: null,

  icon: null

};

const icons = ["🦊 Fox", "🐔 Hen", "🦤 Ostrich"];

function registerUser() {

  const name = document.getElementById("nameInput").value.trim();

  if (!name) {

    alert("Please enter your name.");

    return;

  }

  const randomIcon = icons[Math.floor(Math.random() * icons.length)];

  const generatedId = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

  currentUser = {

    name,

    icon: randomIcon,

    id: generatedId

  };

  document.getElementById("userIcon").textContent = `Assigned Icon: ${randomIcon}`;

  document.getElementById("userIdDisplay").textContent = `Your ID: ${generatedId}`;

}

function invest() {

  const amount = parseFloat(document.getElementById("amount").value);

  const crypto = document.getElementById("crypto").value;

  if (!currentUser.name || !currentUser.id) {

    alert("Please register your name first.");

    return;

  }

  if (!amount || amount <= 0) {

    alert("Enter a valid investment amount.");

    return;

  }

  const loading = document.getElementById("loadingMsg");

  const result = document.getElementById("result");

  loading.textContent = "Loading...";

  result.textContent = "";

  const waitTime = Math.ceil(amount / 50) + 2; // delay logic

  const doubled = amount * 2;

  setTimeout(() => {

    loading.textContent = "";

    result.innerHTML = `

      <p>Thank you, ${currentUser.name} (${currentUser.icon})</p>

      <p>You invested ${amount} ${crypto}</p>

      <p>Expected Return: ${doubled} ${crypto}</p>

      <p>Return Time: ${waitTime} minutes</p>

      <p>Keep your ID safe: <strong>${currentUser.id}</strong></p>

    `;

  }, 2000);

}