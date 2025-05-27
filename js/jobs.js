// js/jobs.js

import { jobOffers } from "./data.js";

export function renderJobs() {
  const jobsContainer = document.getElementById("jobsList");

  if (!jobsContainer) return;

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
// js/jobs.js

import { jobOffers } from "./data.js";
import { createJobCard } from "./ui.js";

export function renderJobs() {
  const jobsContainer = document.getElementById("jobsList");

  if (!jobsContainer) return;

  jobsContainer.innerHTML = "";

  jobOffers.forEach(job => {
    const card = createJobCard(job);
    jobsContainer.appendChild(card);
  });
}
