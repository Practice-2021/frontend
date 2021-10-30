const TeacherItem = ({className, fullName, department, position}) => {
    return (
    <div className={className}>
        <p>{fullName}</p>
        <p>{department}</p>
        <p>{position}</p>
    </div>
)
}
export default TeacherItem;