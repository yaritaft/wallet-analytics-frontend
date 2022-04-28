interface Properties {
  onClick?: () => void;
}

export const CrossIcon = ({ onClick }: Properties) => (
  <svg
    className="cross-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="24px"
    height="24px"
    baseProfile="basic"
    onClick={onClick}
  >
    <circle cx="8" cy="8" r="8" fill="#fe3155" />
    <polygon
      fill="#fff"
      points="11.536,10.121 9.414,8 11.536,5.879 10.121,4.464 8,6.586 5.879,4.464 4.464,5.879 6.586,8 4.464,10.121 5.879,11.536 8,9.414 10.121,11.536"
    />
  </svg>
);
