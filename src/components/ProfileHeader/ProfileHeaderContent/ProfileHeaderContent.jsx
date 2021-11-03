import {useSelector} from "react-redux";
const ProfileHeaderContent = () => {
    const {teacher} = useSelector(state=>state.profile);
    const onButtonClick = (link) => {
        window.open(link, '_blank');
    }
    return (
        <div>
            <p>{teacher.full_name}</p>
            <p>{teacher.position}</p>
            <p>{teacher.department}</p>
            <p>{teacher.email}</p>
            <div className="flex">
                <button onClick={() => onButtonClick(teacher.pure)}>Pure</button>
                <button onClick={() => onButtonClick(teacher.timetable)}>Расписание</button>
            </div>
        </div>
    )
}
export default ProfileHeaderContent;