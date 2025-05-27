// js/main.js

import { jobOffers, careerTips } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  renderJobs();
  renderTips();
  handleForm();
});

function renderJobs() {
  const jobsContainer = document.getElementById("jobsList");
  jobsContainer.innerHTML = "";

  jobOffers.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("job-card");

    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Empresa:</strong> ${job.company}</p>
      <p>${job.description}</p>
      <p><em>${job.location}</em></p>
    `;

    jobsContainer.appendChild(card);
  });
}

function renderTips() {
  const tipsContainer = document.getElementById("tipsList");
  tipsContainer.innerHTML = "";

  careerTips.forEach(tip => {
    const tipItem = document.createElement("div");
    tipItem.classList.add("tip");
    tipItem.textContent = tip;
    tipsContainer.appendChild(tipItem);
  });
}

function handleForm() {
  const form = document.getElementById("cvForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.nombre.value;
    const email = form.email.value;
    const habilidades = form.habilidades.value;

    console.log("CV guardado:", { nombre, email, habilidades });

    alert("¡Tu CV se ha guardado (de forma simulada) correctamente!");

    form.reset();
  });
}




import { careerTips } from "./data.js";
import { renderJobs } from "./jobs.js";
import { handleForm } from "./form.js";
import { createTipItem } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  renderJobs();
  renderTips();
  handleForm();
});

function renderTips() {
  const tipsContainer = document.getElementById("tipsList");

  if (!tipsContainer) return;

  tipsContainer.innerHTML = "";

  careerTips.forEach(tip => {
    const tipItem = createTipItem(tip);
    tipsContainer.appendChild(tipItem);
  });
}

