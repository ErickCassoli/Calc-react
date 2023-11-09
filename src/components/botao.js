import React from 'react';

const Botao = ({ label, onClick }) => (
  <button onClick={() => onClick(label)}>{label}</button>
);

export default Botao;
