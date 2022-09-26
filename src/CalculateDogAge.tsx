interface Props {
  onCalculateDogAge: (humanAge: number, conversionFactor: number) => void;
}

function CalculateDogAge({ onCalculateDogAge }: Props) {
  return (
    <div>
      <> {onCalculateDogAge(2, 7)} </>
    </div>
  );
}

export default CalculateDogAge;
