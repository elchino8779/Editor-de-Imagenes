export function popOverAparecer(popover){

    popover.style.transform = "translateY(-40px)";
    popover.style.opacity = "1"
    popover.style.visibility = "visible";
}

export function popOverDesaparecer(popover){
    
    popover.style.transform = "translateY(0px)";
    popover.style.opacity = "0"
    popover.style.visibility = "hidden";
}