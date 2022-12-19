interface TimeObject {
    startTime:string
}
const baseURL = 'https://www.atg.se/services/racinginfo/v1/api';
export const sortByTime = (a:TimeObject, b:TimeObject):number => new Date(b.startTime).valueOf() - new Date(a.startTime).valueOf()
export const formatDate = function (date:string){
    const d = new Date(date);
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const time = (hours<10 ?'0'+hours:hours)+':'+(minutes<10 ?'0'+minutes:minutes)
    
    return `${d.getFullYear()} - ${d.getMonth()} - ${d.getDate()} : ${time}`
};

export const getData = (param:string) => {
    return fetch(`${baseURL}/${param}`).then((resp) => {
      if (resp.status === 200) return resp.json();
      else throw new Error("Invalid response");
    });
};