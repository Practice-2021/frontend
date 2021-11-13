import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    teacherEmail: yup.string().email,
}).required();


const EditForm = ({className}) => {
    const {teacher} = useSelector(state=>state.profile);
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    const onSubmit = data => console.log(data);
    return (
        <form className="flex flex-col items-center" onSubmit={() => handleSubmit(onSubmit)}>
            <p className="text-3xl text-center mb-8">Заполните форму об ошибке</p>
            <div className="flex flex-col w-4/5 mb-3">
                <label>ФИО преподавателя:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите ФИО преподавателя" defaultValue={teacher?.full_name} {...register("full_name")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Email:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите email преподавателя" defaultValue={teacher?.email} {...register("teacherEmail")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Занимаемая должность:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите занимаемую должность" defaultValue={teacher?.position} {...register("position")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Страница на Pure:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите ссылку на страницу преподавателя" defaultValue={teacher?.pure} {...register("pure")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Расписание:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите ссылку на расписание преподавателя" defaultValue={teacher?.timetable} {...register("timetable")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Уровень образования:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите уровень образования" defaultValue={teacher?.education_level} {...register("education_level")} />
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
                <label>Уровень образования:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите уровень образования" defaultValue={teacher?.education_level} {...register("education_level")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Общий стаж:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите общий стаж" defaultValue={teacher?.total_exp} {...register("total_exp")} />
            </div>
            <div className="flex flex-col w-4/5 mb-10">
                <label>Стаж работы по специальности:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите стаж работы по специальности" defaultValue={teacher?.exp_spec} {...register("exp_spec")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Публикации:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите количество публикаций" defaultValue={teacher?.publications} {...register("publications")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Заявки:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите количество заявок" defaultValue={teacher?.applications} {...register("applications")} />
            </div>
            <div className="flex flex-col w-4/5 mb-3">
                <label>Гранты:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите количество грантов" defaultValue={teacher?.grants} {...register("grants")} />
            </div>
            <div className="flex flex-col w-4/5 mb-10">
                <label>Проекты:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите количество проектов" defaultValue={teacher?.projects} {...register("projects")} />
            </div>
            <button className="bg-roof-terracotta rounded-md h-10 text-white w-1/5 hover:bg-saddle-brown" type="submit">Отправить</button>
        </form>
    )
}
export default EditForm;