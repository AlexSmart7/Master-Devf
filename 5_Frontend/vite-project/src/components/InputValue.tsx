type Props = {
  label: string;
  placeholder: string;
  setLimit: (value: number) => void;
};

function InputValue({ label, placeholder, setLimit }: Props) {
  return (
    <>
      <label>
        {label}
        <input
          className="form-control text-center"
          style={{
            width: "300px",
          }}
          type="number"
          onChange={(e) => setLimit(Number(e.target.value))}
          placeholder={placeholder}
        />
      </label>
    </>
  );
}

export default InputValue;
