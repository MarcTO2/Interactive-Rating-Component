import { useState } from 'react';
import { ReactSVG } from 'react-svg';


const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating !== null) {
      setSubmitted(true);
    }
  };

  const handleRateAgain = () => {
    setSelectedRating(null);
    setSubmitted(false);
  };

  return (
    <div className="bg-gray-700 text-white mt-8 rounded overflow-hidden p-8">
      {!submitted ? (
        <>
          <ReactSVG src="./images/icon-star.svg" className="mb-4" />
          <h1 className="text-2xl font-semibold">How did we do?</h1>

          <p className="mt-4">
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our product.
          </p>

          <ul className="flex space-x-2 mt-6">
            {[1, 2, 3, 4, 5].map((rating) => (
              <li key={rating}>
                <button
                  className={`border px-3 py-2 ${selectedRating === rating ? 'bg-orange-500' : 'bg-gray-800'} rounded-full`}
                  onClick={() => handleRatingClick(rating)}
                >
                  {rating}
                </button>
              </li>
            ))}
          </ul>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded" onClick={handleSubmit}>
            Submit
          </button>
        </>
      ) : (
        <div className="thank-you text-center">
         <ReactSVG src="./images/illustration-thankyou.svg" className="mb-4" />
          <p className="bg-gray-800 p-2 inline-block">
            You selected <span id="rating">{selectedRating}</span> out of 5
          </p>

          <h2 className="text-xl font-semibold mt-4">Thank you!</h2>

          <p className="mt-2">
            We appreciate you taking the time to give feedback. If you ever need more support, don't hesitate to get in touch!
          </p>

          <button className="mt-4 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded" onClick={handleRateAgain}>
            Rate Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Rating;
