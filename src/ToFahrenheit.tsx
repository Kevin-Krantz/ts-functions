interface Props {
  onToFahrenheit: (celsius: number) => void;
}

function ToFahrenheit({ onToFahrenheit }: Props) {
  return (
    <div>
      <> {onToFahrenheit(9)} </>
    </div>
  );
}

export default ToFahrenheit;
