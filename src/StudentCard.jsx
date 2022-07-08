import Scores from "./Scores"
const StudentCard= ({student}) =>{
  return(
    <>
    <h3>{student.name}</h3>
    <h3>{student.bio}</h3>
    <Scores scores= {student.scores}/>
    </>
  )
  }
  export default StudentCard