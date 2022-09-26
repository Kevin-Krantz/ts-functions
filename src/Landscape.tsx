interface Props {
  onLandscape: (width: number, height: number) => void;
}

function Landscape({ onLandscape }: Props) {
  return (
    <div>
      <>{`${onLandscape(200, 20)}`}</>
    </div>
  );
}

export default Landscape;
