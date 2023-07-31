function tabs(){
    //tab1
    const glazingBlock=document.querySelectorAll('.glazing_block'),
        links=document.querySelectorAll('.glazing_block a'),
        aluminum =document.querySelector('.aluminum'),
        plastic  =document.querySelector('.plastic'),
        french  =document.querySelector('.french'),
        rise  =document.querySelector('.rise'),
        tree   =document.querySelector('.tree')

    let tabContentArr=[tree,rise,french,plastic,aluminum]
    
    glazingBlock.forEach((triggers,i)=>{
        triggers.addEventListener('click',(e)=>{
            links.forEach(link=>{
                link.classList.remove('active')
            })
            links[i].classList.add('active')
            if(e.target.tagName==="A"||e.target.tagName==="IMG"){
                tabContentArr.forEach(blocks=>{
                    blocks.classList.add('hide')
                    blocks.classList.remove('show')
                })
            }
            tabContentArr[i].classList.add('show')
        })
    })

    //tab2
    const buttons=document.querySelectorAll('.decoration_item div'),
        internal=document.querySelector('.internal'),
        externa=document.querySelector('.external'),
        rising=document.querySelector('.rising'),
        roof=document.querySelector('.roof')

    let tabContentArr2=[internal,externa,rising,roof]

    buttons.forEach((button,i)=>{
        button.addEventListener('click',()=>{
            tabContentArr2.forEach(item=>{
                item.classList.remove('show')
                item.classList.add('hide')
            })
            buttons.forEach(item=>{
                item.classList.remove('after_click')
            })
            button.classList.add('after_click')
            tabContentArr2[i].classList.add('show')
        })
    })
}
export{tabs}