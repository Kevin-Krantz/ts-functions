interface Props {
  onDaysOfSupplies: (
    totalResources: number,
    usedRecoursesPerDay: number
  ) => void;
}

function DaysOfSupplies({ onDaysOfSupplies }: Props) {
  return (
    <div>
      <> {onDaysOfSupplies(100, 4)} </>
    </div>
  );
}

export default DaysOfSupplies;
