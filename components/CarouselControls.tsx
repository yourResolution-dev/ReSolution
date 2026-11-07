import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./CarouselControls.module.css";

type CarouselControlsProps = {
  label: string;
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
  disabledPrevious?: boolean;
  disabledNext?: boolean;
};

export function CarouselControls({
  label,
  onPrevious,
  onNext,
  className = "",
  disabledPrevious = false,
  disabledNext = false,
}: CarouselControlsProps) {
  return (
    <div
      className={`${styles.controls} ${className}`.trim()}
      role="group"
      aria-label={`${label} navigation`}
    >
      <button
        type="button"
        className="iconButton"
        onClick={onPrevious}
        disabled={disabledPrevious}
        aria-label={`Previous ${label}`}
      >
        <ArrowLeft size={16} aria-hidden="true" />
      </button>
      <button
        type="button"
        className="iconButton"
        onClick={onNext}
        disabled={disabledNext}
        aria-label={`Next ${label}`}
      >
        <ArrowRight size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
