const entradaCorrecta = (unPes) => {
  const expresReg = /^\d+\.\d+$|^\d+$/;
  return expresReg.test(unPes);
};

export default entradaCorrecta;