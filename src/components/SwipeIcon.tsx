type SwipeIconProps = {
  className?: string;
};

export default function SwipeIcon({ className = "" }: SwipeIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path
        d="M8 8l-4 4 4 4"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
