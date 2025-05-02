export default function Card({ title, children }) {
    return (
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
        {children}
      </div>
    );
  }