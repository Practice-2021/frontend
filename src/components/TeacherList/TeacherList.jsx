import {useTeachers} from "./hooks/useTeachers";
import { useSelector } from "react-redux";
import TeacherItem from "./TeacherItem";

const TeacherList = ({className}) => {
        useTeachers();
        const {teachers} = useSelector((state) => state.list);
        return (
        <div className={className}>
            {teachers && teachers.map((teacher) => <TeacherItem className="w-1/2" key={teacher.id} fullName={teacher.full_name} department={teacher.department} position={teacher.position}/>)}
        </div>
    )
}
export default TeacherList;