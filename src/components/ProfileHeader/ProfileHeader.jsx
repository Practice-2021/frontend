import ProfileImage from "./ProfileImage";
import ProfileHeaderContent from "./ProfileHeaderContent";
const ProfileHeader = () => {
    return (
        <div className="flex">
            <ProfileImage />
            <ProfileHeaderContent />
        </div>
    )
}
export default ProfileHeader;