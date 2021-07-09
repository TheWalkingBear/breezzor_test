export default function dateFormat(date) {
    const monthsRu = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const dateConterting = new Date(date);
    
    return `${monthsRu[dateConterting.getMonth()]} ${dateConterting.getFullYear()}`;
}
