// js/main.js

import { jobOffers, careerTips } from "./data.js";
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
