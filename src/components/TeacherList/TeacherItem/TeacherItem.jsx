const TeacherItem = ({onClick,style,className, fullName, department, position}) => {
    return (
    <div onClick={onClick} style={style} className={className}>
        <p className="text-lg font-bold mb-2">{fullName}</p>
        <p className="mb-2">{department}</p>
        <p>{position}</p>
    </div>
)
}
export default TeacherItem;