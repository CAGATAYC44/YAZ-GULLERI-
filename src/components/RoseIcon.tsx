type RoseIconProps = {
  className?: string;
};

export default function RoseIcon({ className = "" }: RoseIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3.2c-2.4 1-3.3 3-1.9 4.9c-2-1-3.9 0-3.9 2.1c0 2.2 2.6 3.2 4.3 2.2c-1.1 1.6-.9 3.4 1 4.2c1.9-.8 2.1-2.6 1-4.2c1.7 1 4.3 0 4.3-2.2c0-2.1-1.9-3.1-3.9-2.1c1.4-1.9.5-3.9-1.9-4.9z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M12 16.6V21" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path
        d="M12 19.2c1-.15 1.7-.8 1.9-1.7"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
