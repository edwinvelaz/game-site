const base_url = 'https://api.rawg.io/api/';

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`
    } else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDay();
    if(day < 10){
        return `0${day}`
    } else {
        return day;
    }
}

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0');
const currentDay = String(new Date().getDate()).padStart(2, '0');

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;


//Popular Games
const popular_games = `games?key=c4043cdc77214985a0e41abc9ba0c954&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`