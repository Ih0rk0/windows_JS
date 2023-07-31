function timer(){
    const days=document.querySelector('#days'),
        hours=document.querySelector('#hours'),
        minutes=document.querySelector('#minutes'),
        seconds=document.querySelector('#seconds')

    const deadline = new Date('2023-08-01')

    function createTimer(date,id){
        const remainingTime=new Date(date)-new Date()

        let days2=Math.round(remainingTime/1000/60/60/24),
            hours2=Math.round((remainingTime/1000/60/60)%60),
            minutes2=Math.round((remainingTime/1000/60)%60),
            seconds2=Math.round((remainingTime/1000)%60)

        days.textContent=days2
        hours.textContent=hours2
        minutes.textContent=minutes2
        seconds.textContent=seconds2

        if(remainingTime<=0){
            clearInterval(id)
        }
        } 
        let timerId=setInterval(() => {
            createTimer(deadline,timerId)
        },1000);

}
export{timer}