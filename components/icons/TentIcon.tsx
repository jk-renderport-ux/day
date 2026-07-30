export default function TentIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3L22 20H2L12 3Z"
        fill="currentColor"
      />
      <path d="M12 3L15 20H9L12 3Z" fill="#fff" fillOpacity="0.25" />
      <rect x="10.5" y="16" width="3" height="4" fill="#14180f" />
    </svg>
  );
}
