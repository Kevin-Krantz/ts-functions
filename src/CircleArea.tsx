interface Props {
  onCircleArea: (radius: number) => void;
}

function CircleArea({ onCircleArea }: Props) {
  return (
    <div>
      <> {onCircleArea(20)} </>
    </div>
  );
}

export default CircleArea;
