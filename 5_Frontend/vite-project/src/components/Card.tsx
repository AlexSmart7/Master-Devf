import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;
  return (
    <div
      className="card container"
      style={{
        width: "450px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CarBodyProps {
  tittle: ReactNode;
  text?: string;
}

export function CardBody(props: CarBodyProps) {
  const { tittle, text } = props;

  return (
    <>
      <h5 className="card-title">{tittle}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
