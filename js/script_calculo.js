export const calcularIdadeVeiculo = (anoFabricacao) => {
  const anoAtual = new Date().getFullYear();

  return anoAtual - anoFabricacao;
};

export const calcularSeguro = (valorVeiculo) => {
  return valorVeiculo * 0.1;
};

export const calcularIPVA = (veiculo) => {
  if (calcularIdadeVeiculo(veiculo.ano) >= 20) {
    return null;
  } else if (veiculo.combustivel === "gasolina") {
    return veiculo.valor * 0.2;
  } else if (veiculo.combustivel === "etanol") {
    return veiculo.valor * 0.15;
  } else if (veiculo.combustivel === "bio") {
    return veiculo.valor * 0.1;
  } else if (veiculo.combustivel === "hibrido") {
    return veiculo.valor * 0.08;
  } else if (veiculo.combustivel === "eletrico") {
    return veiculo.valor * 0.02;
  } else {
    throw new Error("Tipo de combustível inválido!");
  }
};

export const calcularValorFinal = (veiculo) => {
  return (
    calcularSeguro(veiculo.valor) +
    (calcularIPVA(veiculo) === null ? 0 : calcularIPVA(veiculo))
  );
};
