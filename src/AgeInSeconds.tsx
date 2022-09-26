interface Props {
  onAgeInSeconds: (age: number) => void;
}

function AgeInSeconds({ onAgeInSeconds }: Props) {
  return (
    <div>
      <> {onAgeInSeconds(20)} </>
    </div>
  );
}

export default AgeInSeconds;
