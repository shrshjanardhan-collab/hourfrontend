function PropertyCard({
  title,
  location,
  description,
  price,
  contact,
  image,
}) {
  return (
    <div className="group cursor-pointer">

      {/* Image */}
      <div className="relative overflow-hidden rounded-xl mb-5">
        <img
          src={image}
          className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">

        {/* Location */}
        <p className="text-xs uppercase text-primary tracking-widest">
          {location}
        </p>

        {/* Title */}
        <h3 className="text-xl font-headline font-bold">
          {title}
        </h3>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Contact */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm font-medium">
            📞 {contact}
          </span>

          <button className="text-primary font-semibold hover:underline">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
}

export default PropertyCard;