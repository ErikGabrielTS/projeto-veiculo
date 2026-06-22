import {
  calcularIPVA,
  calcularIdadeVeiculo,
  calcularSeguro,
  calcularValorFinal,
} from "./script_calculo.js";

const form = document.getElementById("form");
const divCards = document.getElementById("cards-container");

const veiculosList = [];

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formData = new FormData(form);

  const veiculo = {
    modelo: formData.get("modelo"),
    marca: formData.get("marca"),
    placa: formData.get("placa"),
    ano: Number(formData.get("ano")),
    valor: Number(formData.get("valor")),
    combustivel: formData.get("combustivel"),
  };

  veiculosList.push(veiculo);

  listarCardsVeiculo(veiculosList);

  form.reset();
});

const listarCardsVeiculo = (veiculos) => {
  if (veiculos.length === 0) {
    divCards.innerHTML = "<p>Ainda não há veículos cadastrados.</p>";
    return;
  }

  divCards.innerHTML = "";

  veiculos.forEach((veiculo) => {
    const templateCard = `
    <div class="card">
    <h3>${veiculo.modelo}</h3>
    <ul>
      <li><span>Marca</span><strong>${veiculo.marca}</strong></li>
      <li><span>Placa</span><strong>${veiculo.placa}</strong></li>
      <li><span>Idade do Veículo</span><strong>${calcularIdadeVeiculo(
        veiculo.ano
      )} anos</strong></li>
      <li>
        <span>Valor do Seguro a Pagar</span><strong>R$ ${calcularSeguro(
          veiculo.valor
        )}</strong>
      </li>
      <li>
        <span>Valor do IPVA a Pagar</span><strong>${
          calcularIPVA(veiculo) === null
            ? "Isento de IPVA"
            : `R$ ${calcularIPVA(veiculo)}`
        }</strong>
      </li>
      <li><span>Valor Final</span><strong>R$ ${calcularValorFinal(
        veiculo
      )}</strong></li>
    </ul>
  </div>`;

    divCards.innerHTML += templateCard;
  });
};
