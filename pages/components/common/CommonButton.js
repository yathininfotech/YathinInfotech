
import { FaArrowRight } from "react-icons/fa";

export default function CommonButton({
  text = "Enroll Now",
  onClick,
  className = "",
}) {
  return (
    <button onClick={onClick} className={`common-btn ${className}`}>
      <span>{text}</span>

      <span className="arrow">
        <FaArrowRight size={14} />
      </span>
    </button>
  );
}