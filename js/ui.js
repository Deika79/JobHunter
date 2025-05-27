// js/ui.js

export function showAlert(message, type = "info") {
  const alertBox = document.createElement("div");
  alertBox.className = `alert alert-${type}`;
  alertBox.textContent = message;

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, 3000);
}

export function createJobCard(job) {
  const card = document.createElement("div");
  card.classList.add("job-card");

  card.innerHTML = `
    <h3>${job.title}</h3>
    <p><strong>Empresa:</strong> ${job.company}</p>
    <p>${job.description}</p>
    <p><em>${job.location}</em></p>
  `;

  return card;
}

export function createTipItem(tip) {
  const tipItem = document.createElement("div");
  tipItem.classList.add("tip");
  tipItem.textContent = tip;
  return tipItem;
}
