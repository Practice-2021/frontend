const teachers = [
    {
        id: 1,
        full_name: "Потапов Дмитрий Константинович",
        department: "Высшая математика",
        position: "Доцент"
    },
    {
        id: 2,
        full_name: "Басков Олег Владимирович",
        department: "Высшая математика",
        position: "Доцент"
    },
    {
        id: 3,
        full_name: "Бочкарёв Анатолий Олегович",
        department: "Высшая математика",
        position: "Доцент"
    },
    {
        id: 4,
        full_name: "Евстафьева Виктория Викторовна",
        department: "Высшая математика",
        position: "Доцент"
    },
    {
        id: 5,
        full_name: "Кривошеин Александр Владимирович",
        department: "Высшая математика",
        position: "Доцент"
    }
];

export const getTeachersTest = () => {
    return new Promise((res, rej) => res(teachers))
}
