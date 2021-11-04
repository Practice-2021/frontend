import {useSelector} from "react-redux";
const ProfileImage = ({className, style}) => {
    const {teacher} = useSelector(state=>state.profile);
    return (
        <div className={className} style={style}>
            <img className="w-full md:w-48 md:min-w-full" src={teacher?.photo} alt={teacher?.full_name}/>
        </div>
    )
}
export default ProfileImage;