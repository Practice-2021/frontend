import {useTeachers} from "./hooks/useTeachers";
import { useSelector } from "react-redux";
import TeacherItem from "./TeacherItem";

const TeacherList = ({className}) => {
        useTeachers();
        const {search,teachers} = useSelector((state) => state.list);
        const filteredTeachers = teachers && teachers.filter(teacher => teacher.full_name.includes(search));
        return (
        <div className={className}>
            {filteredTeachers.length > 0 ? filteredTeachers.map((teacher) =>
            <TeacherItem
                className="w-full max-w-lg md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg p-6 mb-2 bg-seashell"
                key={teacher.id}
                fullName={teacher.full_name}
                department={teacher.department}
                position={teacher.position}
            />) : <p className="text-xl font-bold mx-auto">{`Преподавателей по запросу "${search}" не найдено`}</p>}
        </div>
    )
}
export default TeacherList;