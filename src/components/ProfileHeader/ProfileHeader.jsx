import ProfileImage from "./ProfileImage";
import ProfileHeaderContent from "./ProfileHeaderContent";
import BackButton from "../BackButton";
const ProfileHeader = () => {
    return (
        <div className="flex">
            <BackButton />
            <ProfileImage className="pr-5"/>
            <ProfileHeaderContent />
        </div>
    )
}
export default ProfileHeader;