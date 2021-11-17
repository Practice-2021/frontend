import {useTeachers} from "./hooks/useTeachers";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TeacherItem from "./TeacherItem";
const TeacherList = ({className}) => {
        useTeachers();
        const {search,teachers} = useSelector((state) => state.list);
        const filteredTeachers = teachers && teachers.filter(teacher => `${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`.includes(search));
        const history = useHistory();
        const onTeacherClick = (id) => {
            history.push(`/profile/${id}`);
        }
        return (
        <div className={className}>
            {filteredTeachers.length > 0 ? filteredTeachers.map((teacher) =>
            <TeacherItem
                className="w-full max-w-lg md:max-w-xs lg:max-w-sm
                xl:max-w-md 2xl:max-w-lg p-6 mb-2 bg-saddle-brown
                hover:bg-brown cursor-pointer text-white"
                key={teacher.id}
                onClick={() => onTeacherClick(teacher.id)}
                fullName={`${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`}
                department={teacher.department}
                position={teacher.academicDegree}
            />) : <p className="text-xl font-bold mx-auto">{`Преподавателей по запросу "${search}" не найдено`}</p>}
        </div>
    )
}
export default TeacherList;