function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Icon({ name, className, ...props }) {
  return (
    <svg
      className={classNames(
        "select-none fill-current inline-block text-inherit box-content",
        className
      )}
      focusable="false"
      aria-hidden
      {...props}
    >
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
}
