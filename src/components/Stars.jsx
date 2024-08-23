
const Stars = ({starsCount}) => {
  if (starsCount > 5) starsCount = 5;

  starsCount = Math.floor(starsCount);

  let remainder = 5 - starsCount;

  let stars = [];

  for (let i = 0; i < starsCount; i++) {
    stars.push(
      <i className='fa-solid fa-star' key={i}></i>
    );
  }

  for (let i = 0; i < remainder; i++) {
    stars.push(
      <i className='fa-regular fa-star' key={i + starsCount}></i>
    );
  }

  return (
    <div className='rate d-flex justify-content-between align-items-center'>
      {stars}
    </div>
  )
}

export default Stars