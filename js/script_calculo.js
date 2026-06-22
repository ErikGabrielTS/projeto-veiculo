export const calcularIdadeVeiculo = (anoFabricacao) => {
  const anoAtual = new Date().getFullYear();

  return anoAtual - anoFabricacao;
};
