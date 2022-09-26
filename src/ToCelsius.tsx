interface Props {
  onToCelsius: (fahrenheit: number) => void;
}

function ToCelsius({ onToCelsius }: Props) {
  return (
    <div>
      <> {onToCelsius(24)} </>
    </div>
  );
}

export default ToCelsius;
