// js/form.js

export function handleForm() {
  const form = document.getElementById("cvForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const habilidades = form.habilidades.value.trim();

    if (!nombre || !email || !habilidades) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const cv = { nombre, email, habilidades };
    console.log("CV guardado (simulado):", cv);

    alert("¡Tu CV ha sido guardado correctamente!");

    form.reset();
  });
}
// js/form.js

import { showAlert } from "./ui.js";

export function handleForm() {
  const form = document.getElementById("cvForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const habilidades = form.habilidades.value.trim();

    if (!nombre || !email || !habilidades) {
      showAlert("Por favor, completa todos los campos.", "warning");
      return;
    }

    const cv = { nombre, email, habilidades };
    console.log("CV guardado (simulado):", cv);

    showAlert("¡Tu CV ha sido guardado correctamente!", "success");

    form.reset();
  });
}
