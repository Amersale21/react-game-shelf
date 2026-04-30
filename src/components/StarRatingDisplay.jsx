function StarRatingDisplay({ rating = 4 }) {
  const roundedRating = Math.round(rating);

  return (
    <div
      className="star-rating-display"
      aria-label={`Community rating: ${roundedRating} out of 5 stars`}
    >
      <p className="star-rating-label mb-1">Community Rating</p>

      <div className="star-rating-stars" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= roundedRating ? "filled-star" : "empty-star"}
          >
            ★
          </span>
        ))}
      </div>

      <p className="star-rating-number mb-0">{roundedRating}/5</p>
    </div>
  );
}

export default StarRatingDisplay;
