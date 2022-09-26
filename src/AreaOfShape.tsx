interface Props {
  onAreaOfShape: (shape: string, width: number, height: number) => void;
}

function AreaOfShape({ onAreaOfShape }: Props) {
  return (
    <div>
      <> {onAreaOfShape("triangle", 3, 7)} </>
    </div>
  );
}

export default AreaOfShape;
