interface Props {
  onRectangleArea: (length: number, width: number) => void;
}

function RectangleArea({ onRectangleArea }: Props) {
  return (
    <div>
      <> {onRectangleArea(2, 9)} </>
    </div>
  );
}

export default RectangleArea;
