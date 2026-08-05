function SectionHeading({
  label,
  title,
  description,
  align = "left",
  dark = false,
}) {
  return (
    <div
      className={`section-heading section-heading--${align} ${
        dark ? "section-heading--dark" : ""
      }`}
    >
      <div className="section-label">
        <span />
        {label}
      </div>

      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default SectionHeading;

