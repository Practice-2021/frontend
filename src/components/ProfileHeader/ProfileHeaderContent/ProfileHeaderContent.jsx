import {useSelector} from "react-redux";
import { FaBullhorn } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProfileHeaderContent = () => {
    const {teacher} = useSelector(state=>state.profile);
    const onButtonClick = (link) => {
        window.open(link, '_blank');
    }
    const getId = () => window.location.pathname.split("profile/")[1];
    return (
        <div className="ml-48 md:ml-12">
            <div className="flex items-center">
                <p className="text-xl md:text-4xl">{`${teacher?.lastName} ${teacher?.firstName} ${teacher?.middleName}`}</p>
                <Link to={`/edit/${getId()}`}><FaBullhorn className="ml-1 w-0 h-0 md:w-5 md:h-5 cursor-pointer text-roof-terracotta"/></Link>
            </div>
            <p className="mt-2 md:mt-4 text-xl">{teacher?.academicDegree}</p>
            <p onClick={() => onButtonClick(teacher?.dep_link)} className="mt-2 text-lg cursor-pointer underline text-roof-terracotta">{teacher?.department}</p>
            <p className="mt-2 text-lg">{teacher?.email}</p>
            <div className="flex mt-8 flex-col md:flex-row">
                <button className="h-8 mb-2 md:mb-0 md:w-32 md:h-10 bg-seashell text-roof-terracotta text-lg" onClick={() => onButtonClick(teacher?.pureLink)}>Pure</button>
                <button className="h-8 mb-2 md:w-32 md:h-10 bg-seashell text-roof-terracotta md:ml-4 text-lg" onClick={() => onButtonClick(teacher?.timetable)}>Расписание</button>
            </div>
        </div>
    )
}
export default ProfileHeaderContent;