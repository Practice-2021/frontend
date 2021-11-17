import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useHistory } from "react-router-dom";
// const schema = yup.object({
//     teacherEmail: yup.string().email,
// }).required();


const EditForm = ({className,path}) => {
    const {teacher} = useSelector(state=>state.profile);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const mySubmit =(e) => {
        e.preventDefault();
        // do your early validation here

        handleSubmit((data) => {
            console.log(data);
          // do you stuff in here;
        })(e);
        history.push(path);
    }
    return (
        <form className="flex flex-col items-center" onSubmit={mySubmit}>
            <p className="text-3xl text-center mb-8">Заполните форму об ошибке</p>
            <div className="flex flex-col w-4/5 mb-3">
                <label>ФИО преподавателя:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите ФИО преподавателя" defaultValue={`${teacher?.lastName} ${teacher?.firstName} ${teacher?.middleName}`} {...register("full_name")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Email преподавателя:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите email преподавателя" defaultValue={teacher?.email} {...register("teacherEmail")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Занимаемая должность:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите занимаемую должность" defaultValue={teacher?.academicDegree} {...register("academicDegree")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Страница на Pure:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите ссылку на страницу преподавателя" defaultValue={teacher?.pureLink} {...register("pureLink")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Расписание:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите ссылку на расписание преподавателя" defaultValue={teacher?.timetable} {...register("timetable")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Уровень образования:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите уровень образования" defaultValue={teacher?.educationLevel} {...register("educationLevel")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Квалификация:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите квалификацию преподавателя" defaultValue={teacher?.qualification} {...register("qualification")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Специальность:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите специальность преподавателя" defaultValue={teacher?.speciality} {...register("speciality")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Общий стаж:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите общий стаж" defaultValue={teacher?.experience} {...register("experience")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Стаж работы по специальности:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите стаж работы по специальности" defaultValue={teacher?.professionalExperience} {...register("professionalExperience")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Публикации:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите количество публикаций" defaultValue={teacher?.publications.length} {...register("publications")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Заявки:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите количество заявок" defaultValue={teacher?.applications} {...register("applications")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Гранты:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите количество грантов" defaultValue={teacher?.grants.length} {...register("grants")} />
            </div>
            <div className="flex flex-col w-4/5 mb-10">
                <label>Проекты:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите количество проектов" defaultValue={teacher?.projects.length} {...register("projects")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Email:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите ваш Email" {...register("email")} />
            </div>
            <div className="flex flex-col w-4/5 mb-10">
                <label>Информация об ошибке:</label>
                <textarea className="w-full h-32 pl-2 border rounded-sm text-lg" placeholder="Опишите некорректные данные" {...register("errorsInfo")} />
            </div>
            <button type="submit" className="bg-roof-terracotta rounded-md h-10 text-white w-1/5 hover:bg-saddle-brown">Отправить</button>
        </form>
    )
}
export default EditForm;