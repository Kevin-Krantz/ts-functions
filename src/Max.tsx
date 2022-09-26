interface Props {
  onMax: (number1: number, number2: number) => void;
}

function Max({ onMax }: Props) {
  return (
    <div>
      <>{onMax(400, 1000)}</>
    </div>
  );
}

export default Max;

// max, som tar två nummer och returnerar den största av dem
