import ProfileImage from "./ProfileImage";
import ProfileHeaderContent from "./ProfileHeaderContent";
import ProfileBackButton from "./ProfileBackButton";
const ProfileHeader = () => {
    return (
        <div className="flex">
            <ProfileBackButton />
            <ProfileImage className="pr-5"/>
            <ProfileHeaderContent />
        </div>
    )
}
export default ProfileHeader;