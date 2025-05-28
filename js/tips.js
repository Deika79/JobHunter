// js/tips.js
import { careerTips } from "./data.js";
import { createTipItem } from "./ui.js";

export function renderTips() {
  const tipsContainer = document.getElementById("tipsList");
  if (!tipsContainer) return;

  tipsContainer.innerHTML = "";

  careerTips.forEach(tip => {
    const tipElement = createTipItem(tip);
    tipsContainer.appendChild(tipElement);
  });
}
