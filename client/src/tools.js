const formatDate = (date) => {
    const yearArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    //Year-Month-Day
    const dateArray = date.split('-');
    const formattedDate = `${yearArray[dateArray[1] - 1] + ' ' + dateArray[2] + ', ' + dateArray[0]}`;
    return formattedDate;
} 

const formatGenres = (genres) => {

}

export{
    formatDate,
    formatGenres
}