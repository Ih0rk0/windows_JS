import { postData } from "../servises/servises"
import { addData } from "./calc"
function forms(){
    const popapClose = document.querySelectorAll('.popup_close'),
        forms = document.querySelectorAll('form')

    forms.forEach(item => {
        let messages = {
            loading: "Loading...",
            error: 'ERROR, TRY LATER',
            succesful: "successfully"
        }
        let infoMessage=document.createElement('div')
        item.addEventListener('submit', (e) => {
            e.preventDefault()
            for (let child of item.children) {
                if (child.getAttribute('placeholder') == 'Введите телефон'&&child.value.split('').some(item=>isNaN(Number(item)))) {
                    infoMessage.textContent="Must be a number"
                    child.after(infoMessage)
                    child.style.border = "solid red 1px"
                    return
                }else if(child.getAttribute('placeholder') == 'Введите телефон'){
                    child.style.border = "solid #ccc 1px"
                }
            }
            infoMessage.textContent=messages.loading
            infoMessage.style.fontSize="20px"
            item.append(infoMessage)
            const formData = new FormData(item)
            if(item.hasAttribute('data-endButt')){
                addData(formData)
            }
            const jsonData = JSON.stringify(Object.fromEntries(formData.entries()))
            let btn =Array.from(item.children).filter(item=>item.tagName=='BUTTON')[0]
            postData('http://localhost:3000/requests', jsonData)
                .then(data=>{
                    infoMessage.textContent=messages.succesful
                    item.reset()
                } )
                .catch(error=>{
                    infoMessage.textContent=messages.error
                    btn.style.display='none'
                })
                .finally(()=>{
                    setTimeout(()=>{
                        btn.style.display='block'
                        infoMessage.remove()
                        },3400)
                })

        })
    })

    popapClose.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.popup_engineer').classList.remove('show')
            document.querySelector('.popup').classList.remove('show')
        })
    })
    document.querySelector('.popup_engineer_btn').addEventListener('click', () => {
        document.querySelector('.popup_engineer').classList.add('show')
    })
    document.querySelector('.contact_us_wrap').addEventListener('click', (e) => {
        if (e.target.tagName==="A") {
            document.querySelector('.popup').classList.add('show')
        }
    })
}

export{forms}