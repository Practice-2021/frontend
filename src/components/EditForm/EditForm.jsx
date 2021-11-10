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
            <div className="flex flex-col w-4/5 mb-10">
                <label>Общий стаж:</label>
                <input className="w-full h-9 pl-2 border rounded-sm text-lg" placeholder="Введите общий стаж" defaultValue={teacher?.total_exp} {...register("total_exp")} />
            </div>
            <button className="bg-roof-terracotta rounded-md h-10 text-white w-1/5 hover:bg-saddle-brown" type="submit">Отправить</button>
        </form>
    )
}
export default EditForm;