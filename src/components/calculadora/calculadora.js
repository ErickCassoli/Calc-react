import React, { Component } from "react";
import Botao from "../botao";
import '../calculadora/calculadora.css';

class Calculadora extends Component {
  constructor() {
    super();
    this.state = {
      display: "0",
      operandoAnterior: null,
      operadorAnterior: null,
    };
  }

  handleClear = () => {
    this.setState({
      display: "0",
      operandoAnterior: null,
      operadorAnterior: null,
    });
  }

  handleOperator = (operador) => {
    if (this.state.operandoAnterior === null) {
      this.setState({
        operandoAnterior: parseFloat(this.state.display),
        operadorAnterior: operador,
        display: "0",
      });
    } else {
      const resultado = this.calcularResultado();
      this.setState({
        operandoAnterior: resultado,
        operadorAnterior: operador,
        display: resultado.toString(),
      });
    }
  };

  handleNumber = (numero) => {
    const novoDisplay =
      this.state.display === "0" ? numero : this.state.display + numero;
    this.setState({ display: novoDisplay });
  }

  handleEquals = () => {
    if (this.state.operandoAnterior !== null) {
      const resultado = this.calcularResultado();
      this.setState({ display: resultado.toString() });
    }
  }

  calcularResultado = () => {
    const operando1 = this.state.operandoAnterior;
    const operando2 = parseFloat(this.state.display);
    const operador = this.state.operadorAnterior;

    switch (operador) {
      case "+":
        return operando1 + operando2;
      case "-":
        return operando1 - operando2;
      case "*":
        return operando1 * operando2;
      case "/":
        return operando1 / operando2;
      default:
        return operando2;
    }
  };

  render() {
    return (
      <div className="calculadora">
        <input type="text" className="visor" value={this.state.display} readOnly />
        <div className="botoes2">
          <Botao className="botaozin" label="AC" onClick={this.handleClear} />
          <Botao className="botaozin" label="/" onClick={() => this.handleOperator('/')} />
        </div>
        <div className="botoes">
          <Botao className="botaozin"label="1" onClick={() => this.handleNumber('1')} />
          <Botao className="botaozin"label="2" onClick={() => this.handleNumber('2')} />
          <Botao className="botaozin"label="3" onClick={() => this.handleNumber('3')} />
          <Botao className="botaozin"label="*" onClick={() => this.handleOperator('*')} />
        </div>
        <div className="botoes">
          <Botao className="botaozin"label="4" onClick={() => this.handleNumber('4')} />
          <Botao className="botaozin"label="5" onClick={() => this.handleNumber('5')} />
          <Botao className="botaozin"label="6" onClick={() => this.handleNumber('6')} />
          <Botao className="botaozin"label="+" onClick={() => this.handleOperator('+')} />
        </div>
        <div className="botoes">
          <Botao className="botaozin"label="7" onClick={() => this.handleNumber('7')} />
          <Botao className="botaozin"label="8" onClick={() => this.handleNumber('8')} />
          <Botao className="botaozin"label="9" onClick={() => this.handleNumber('9')} />
          <Botao className="botaozin"label="-" onClick={() => this.handleOperator('-')} />
        </div>
        <div className="botoes2">
          <Botao className="botaozin"label="0" onClick={() => this.handleNumber('0')} />
          <Botao className="botaozin"label="=" onClick={this.handleEquals} />
        </div>
      </div>
    );
  }
}

export default Calculadora;
