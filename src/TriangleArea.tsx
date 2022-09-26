interface Props {
  onTriangleArea: (height: number, width: number) => void;
}

function TriangleArea({ onTriangleArea }: Props) {
  return (
    <div>
      <> {onTriangleArea(3, 100)} </>
    </div>
  );
}

export default TriangleArea;
