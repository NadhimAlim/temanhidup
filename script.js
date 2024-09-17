function openEnvelope() {
  const message = document.getElementById("message");
  message.classList.remove("hidden");
  message.classList.add("show");

  const heart = document.querySelector(".heart");
  heart.style.display = "none"; // Hide the heart button after clicking
}

function openEnvelope() {
  const message = document.getElementById("message");
  message.classList.remove("hidden");
  message.classList.add("show");

  const heart = document.querySelector(".heart");
  heart.style.display = "none"; // Hide the heart button after clicking
}

function accept() {
  window.open(
    "https://wa.me/?text=Kak,%20saya%20mau%20jadi%20teman%20hidup%20kaka",
    "_blank"
  );
  // This will open WhatsApp with a pre-filled message
}

function reject() {
  const rejectButton = document.getElementById("reject");
  const acceptButton = document.getElementById("accept");

  rejectButton.classList.add("fade-out");
  acceptButton.classList.add("fade-out");

  setTimeout(() => {
    rejectButton.style.display = "none";
    acceptButton.style.display = "none";
  }, 500); // Hide buttons after fade-out animation
}
