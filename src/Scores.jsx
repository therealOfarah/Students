
const Score = ({scores}) => {
return (  
  <>
  <div>
    {scores.map(score =>
    <p>Score:{score.score}</p>

      )}
  </div>
  </>
);
}

export default Score;