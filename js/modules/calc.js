let dataObj={
    width:'',
    height:'',
    glazing:'',
    warm: false,
    cold:false,
}
function addData(form){
    for (const key in dataObj) {
        form.append(key, dataObj[key]);
      }
}
function calc(){
    const calcButton=document.querySelectorAll('.glazing_price_btn'),
    calcWindows=document.querySelectorAll('.popup_calc, .popup_calc_profile , .popup_calc_end'),
    nextButtons=document.querySelectorAll('.popup_calc_button, .popup_calc_profile_button'),
    closeButtons=document.querySelectorAll('.popup_calc_close, .popup_calc_profile_close, .popup_calc_end_close'),
    images=document.querySelectorAll('.balcon_icons_img'),
    bigImages=document.querySelectorAll('.big_img img'),
    body=document.querySelector('body'),
    checkCold=document.querySelector('[data-cold]'),
    checkWarm=document.querySelector('[data-warm]'),
    width=document.querySelector('#width'),
    height=document.querySelector('#height')
console.log(calcWindows[0])
bigImages[0].classList.add('show')
let mess=document.createElement('div')

closeButtons[2].addEventListener('click',()=>{
    calcWindows[2].classList.remove('show')
    body.style.overflow=''
    console.log(dataObj)
})
closeButtons[0].addEventListener('click',()=>{
    calcWindows[0].classList.remove('show')
    body.style.overflow=''
})
closeButtons[1].addEventListener('click',()=>{
    calcWindows[1].classList.remove('show')
    body.style.overflow=''
})
nextButtons[0].addEventListener('click',()=>{
    if(width.value.split('').some(item=>isNaN(Number(item)))||height.value.split('').some(item=>isNaN(Number(item)))
    ){
        mess.textContent="Must be only numbers"
        document.querySelector('.popup_calc_content ').append(mess)
        return
    }else if(height.value==""||width.value==""){
        mess.textContent="you cant send nothing"
        document.querySelector('.popup_calc_content ').append(mess)
        return
    }
    mess.remove()
    dataObj.height=height.value
    dataObj.width=width.value
    calcWindows[0].classList.remove('show')
    calcWindows[1].classList.add('show') 
})

nextButtons[1].addEventListener('click',()=>{
    dataObj.glazing=document.querySelector('#view_type').value
    if(checkCold.checked){
        dataObj.cold=true
        console.log('asd')
    }else{
        dataObj.warm=true
    }
    if(!checkCold.checked &&!checkWarm.checked){
        mess.textContent="something must be checked"
        document.querySelector('.popup_calc_profile_content ').append(mess)
        return
    }else if(checkCold.checked &&checkWarm.checked){
        mess.textContent="you cant choose both"
        document.querySelector('.popup_calc_profile_content ').append(mess)
        return
    }
    mess.remove()
    calcWindows[1].classList.remove('show')
    calcWindows[2].classList.add('show')
})
calcButton.forEach(button=>{
    button.addEventListener('click',()=>{
        body.style.overflow='hidden'
        calcWindows[0].classList.add('show')
    })
})

images.forEach((img,i)=>{
    img.addEventListener('click',()=>{
        images.forEach(img=>{
            img.classList.remove('do_image_more')
        })
        bigImages.forEach(big=>{
            big.style.margin="0 auto"
            big.classList.remove('show')
        })
        img.classList.add('do_image_more')
        bigImages[i].classList.add('show')
    })
})
}
export{calc}
export{addData}