const Scores= (props) =>{
  return(
    <>
    {props.scores.map(score=>
    <p> {props.score.date}</p>,
    <p>{props.score.score}</p>
      )}
    </>
  )
  }
  export default Scores