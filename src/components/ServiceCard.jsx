function ServiceCard({ title, description, action, icon }) {
  return (
    <div className="bg-surface-container-low p-8 rounded-2xl hover:shadow-md transition">

      {/* Icon */}
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-primary">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-headline text-xl font-semibold mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-secondary text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Action */}
      <button className="text-primary text-sm font-semibold hover:underline">
        {action} →
      </button>

    </div>
  );
}

export default ServiceCard;