interface Props {
  onTellFortune: (
    kids: number,
    name: string,
    city: string,
    profession: string
  ) => void;
}

function TellFortune({ onTellFortune }: Props) {
  return (
    <div>
      <>{onTellFortune(5, "Sarah", "Los Angeles", "advokat")}</>
    </div>
  );
}

export default TellFortune;
