export const countYears = (age) => {
    if (age === 0){
        return "Опыт отсутствует";
    }
    if (age % 10 === 1) {
        return `${age} год`;
    }
    if ([2,3,4].indexOf(age % 10) !== -1){
        return `${age} года`;
    }
    return `${age} лет`;
}