type MusicIconProps = {
  className?: string;
};

export default function MusicIcon({ className = "" }: MusicIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 18V5.5L19 4v12.5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6.5" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="16.5" cy="16.5" r="2.5" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}
