import StudentCard from "./StudentCard"
import Scores from "./Scores"
const Student= ({students}) =>{
return(
  <>
  {students.map(student =>
    <StudentCard key = {student.name} student= {student}  />
    
  )}
  </>
)
}
export default Student