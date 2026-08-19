export default function Button({ children, className = '', ...props }) {
  return (
    <button
      type="button"
      className={`rounded-full bg-blue px-6 py-3 font-semibold text-off-white transition hover:brightness-110 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}