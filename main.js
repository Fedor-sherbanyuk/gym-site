const animItems=document.querySelectorAll('.activeNew');
if(animItems.length>0){
    window.addEventListener('scroll',animOnScroll);
    function  animOnScroll(params){
        for (let i = 0; i < animItems.length; i++) {
            const anmItem=animItems[i];
            //высота объекта
            const animItemHeight=anmItem.offsetHeight;
            //позиция объекта относительно сверху страницы
            const animItemOffset =offset(anmItem).top;
            //Коэффициент старта анимации
            const animStart=4;
//Высота окна браузера минус высота объекта деленная на наш коэффициент
            let animItemPoint=window.innerHeight - animItemHeight/animStart;

            //Если анимированный объект выше окна браузера
            if(animItemHeight>window.innerHeight){
                //Высота окна браузера минус высота окна браузера на наш коэффициент
                animItemPoint=window.innerHeight - window.innerHeight/animStart;
            }
            //Если прокрутили больше чем позиция объекта точка старта, но при этом прокрутили меньше позиция объекта +его высота
            if((pageYOffset>animItemOffset-animItemPoint)&&
                pageYOffset<(animItemOffset+animItemHeight)){
                anmItem.classList.add("full_active_text")
            }else{
                if(!anmItem.classList.contains('anim-no-hide')){
                    anmItem.classList.remove("full_active_text");
                }

            }
        }
    }
    function offset(e){
        const rect=e.getBoundingClientRect(),
            scrollLeft=window.pageXOffset||document.documentElement.scrollLeft,
            scrollTop=window.pageYOffset||document.documentElement.scrollTop;
            return{ top:rect.top +scrollTop, left:rect.left+scrollLeft}
    }
    setTimeout(()=>{
        animOnScroll();
    },400);

}