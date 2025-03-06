import Card, { CardBody } from "../../components/Card";
import Titulo from "../../components/Titulo";
import List from "../../components/List";
import Button from "../../components/Button";
import { Component, useState } from "react";
import logo from "../../assets/react.svg";
import InputValue from "../../components/InputValue";

function Counter() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const list = ["Goku", "Vegeta", "Piccoro"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin Elementos para Mostrar"
  );

  return (
    <Card>
      <CardBody tittle={<Titulo />} text="Lista de Personajes" />

      {contenido}

      <br />
      <Button isLoading={isLoading} onClick={handleClick}>
        Ejecutar
      </Button>
    </Card>
  );
}

interface State {
  contador: number;
  limiteInf: number;
  limiteSup: number;
  isLoading: boolean;
}

export class AppCont extends Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      contador: 0,
      limiteInf: 0,
      limiteSup: 0,
      isLoading: false,
    };

    //Botones
    this.aumentarContador = this.aumentarContador.bind(this);
    this.disminuirContador = this.disminuirContador.bind(this);
    this.resetContador = this.resetContador.bind(this);
    this.establecerLimiteInf = this.establecerLimiteInf.bind(this);
    this.establecerLimiteSup = this.establecerLimiteSup.bind(this);
  }

  // Funciones de los Botones

  aumentarContador() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      if (this.state.contador < this.state.limiteSup) {
        console.log("Aumenta");
        this.setState({ contador: this.state.contador + 1 });
      }
      this.setState({ isLoading: false });
    }, 100);
  }

  disminuirContador() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      if (this.state.contador > this.state.limiteInf) {
        console.log("Disminuye");
        this.setState({ contador: this.state.contador - 1 });
      }
      this.setState({ isLoading: false });
    }, 100);
  }

  resetContador() {
    console.log("Reset");
    this.setState({ contador: 0 });
  }

  establecerLimiteInf(nuevoLimiteI: number) {
    this.setState({ limiteInf: nuevoLimiteI || 0 });
  }

  establecerLimiteSup(nuevoLimiteS: number) {
    this.setState({ limiteSup: nuevoLimiteS || 0 });
  }

  render() {
    return (
      <Card>
        <div className="App App-header text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>CONTADOR</h3>

          <InputValue
            label="Limite Inferior"
            placeholder="Ingresa el Limite Inferior"
            setLimit={this.establecerLimiteInf}
          />
          <br />
          <br />
          <InputValue
            label="Limite Superior"
            placeholder="Ingresa el Limite Superior"
            setLimit={this.establecerLimiteSup}
          />
          <br />
          <br />

          <Button
            isLoading={this.state.isLoading}
            onClick={this.aumentarContador}
          >
            UP
          </Button>
          <br />
          <br />
          <p className="h2">{this.state.contador}</p>
          <Button
            isLoading={this.state.isLoading}
            onClick={this.disminuirContador}
          >
            BACK
          </Button>
          <br />
          <br />
          <button className={`btn btn-warning`} onClick={this.resetContador}>
            RESET
          </button>
          <br />
          <br />

          <p>{JSON.stringify(this.state)}</p>
        </div>
      </Card>
    );
  }
}

export default Counter;
