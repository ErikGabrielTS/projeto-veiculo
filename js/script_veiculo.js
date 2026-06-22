const form = document.getElementById("form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formData = new FormData(form);

  const modelo = formData.get("modelo");
  const marca = formData.get("marca");
  const placa = formData.get("placa");
  const ano = formData.get("ano");
  const valor = formData.get("valor");
  const combustivel = formData.get("combustivel");
});
