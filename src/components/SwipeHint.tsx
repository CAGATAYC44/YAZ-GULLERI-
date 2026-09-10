import SwipeIcon from "./SwipeIcon";

export default function SwipeHint() {
  return (
    <div className="mb-3 flex items-center justify-end gap-1.5 text-light/35">
      <span className="text-[9px] font-medium uppercase tracking-[0.1em]">Kaydırın</span>
      <SwipeIcon className="h-3.5 w-3.5" />
    </div>
  );
}
