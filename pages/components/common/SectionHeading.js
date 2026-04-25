export default function SectionHeading({
  title,
  highlight,
  align = "center",
}) {
  return (
    <h1
      className={`text-3xl md:text-4xl font-bold mb-12 text-primary ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {title}{" "}
      {highlight && (
        <span className="text-secondary font-semibold">{highlight}</span>
      )}
    </h1>
  );
}