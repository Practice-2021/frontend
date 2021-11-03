import {useSelector} from "react-redux";
const ProfileImage = ({className, style}) => {
    const {teacher} = useSelector(state=>state.profile);
    return (
        <div className={className} style={style}>
            <img src={teacher?.photo} alt={teacher?.full_name}/>
        </div>
    )
}
export default ProfileImage;