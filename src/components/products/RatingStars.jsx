const RatingStars = ({ averageRating }) => {
  // Calculate the number of filled stars (scaling from 0-13 to 0-5)
  const filledStars = Math.round(averageRating / 2.6);
  
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-4 h-4"
          fill={star <= filledStars ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          color={star <= filledStars ? "#fbbf24" : "#d1d5db"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  );
};
export default RatingStars;