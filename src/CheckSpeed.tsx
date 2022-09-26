interface Props {
  onCheckSpeed: (speed: number) => void;
}

function CheckSpeed({ onCheckSpeed }: Props) {
  return (
    <div>
      <> {onCheckSpeed(130)} kora bil </>
    </div>
  );
}

export default CheckSpeed;
