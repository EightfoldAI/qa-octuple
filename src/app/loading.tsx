export default function Loading() {
  return (
    <div aria-busy={true} aria-label="Loading..." aria-live="polite" className="staticLoader">
      <img
        role="presentation"
        src="https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/Loader.gif"
        alt="Loading icon"
      />
    </div>
  );
}
