import { mostrarMenus, ocultarMenus } from "./functions/MostrarOcultarMenus.js";
import { popOverAparecer, popOverDesaparecer } from "./functions/PopOver.js";
import { transform } from "./functions/Transform.js";

const file = document.getElementById("input-imagen");
const contenedorImg = document.querySelector(".contenedor-imagen");
const img = document.querySelector(".imagen");
const imgDefault = document.querySelector(".imagen-default");
const leyendaContenedor = document.querySelector(".leyenda-contenedor");
const popover = document.querySelectorAll(".popover");
const botonPropiedades = document.querySelectorAll(".boton-propiedades");
const menuTransformar = document.querySelector(".menu-transformar");
const menuColor = document.querySelector(".menu-color");
const menuEffects = document.querySelector(".menu-effects");
const menuFilters = document.querySelector(".menu-filters");
const valorRangoResize = document.querySelector(".rango-resize");
const valorRangoRotate = document.querySelector(".rango-rotate");
const valorRangoSkew = document.querySelector(".rango-skew");
const valorRangoBorder = document.querySelector(".rango-border");
const valorRangoRadius = document.querySelector(".rango-radius");
const valorRangoShadow = document.querySelector(".rango-shadow");
const valorRangoHue = document.querySelector(".rango-hue-rotate");
const valorRangoOpacity = document.querySelector(".rango-opacity");
const valorRangoSaturate = document.querySelector(".rango-saturate");
const valorRangoBrightness = document.querySelector(".rango-brightness");
const valorRangoContrast = document.querySelector(".rango-contrast");
const valorRangoInvert = document.querySelector(".rango-invert");
const valorRangoSepia = document.querySelector(".rango-sepia");
const valorRangoGreyScale = document.querySelector(".rango-grey-scale");
const valorRangoBlur = document.querySelector(".rango-blur");
const flipHorizontalBtn = document.querySelector(".flip-horizontal");
const flipVerticalBtn = document.querySelector(".flip-vertical");
const valorRangoBorderColor = document.querySelector(".border-color");
const valorRangoShadowColor = document.querySelector(".shadow-color");
const containersMenus = document.querySelector(".container-menus");

let $resize = document.getElementById("input-resize").value;
let $rotate = document.getElementById("input-rotate").value;
let $skew = document.getElementById("input-skew").value;
let $border = document.getElementById("input-border").value;
let $radius = document.getElementById("input-radius").value;
let $shadow = document.getElementById("input-shadow").value;
let $hue = document.getElementById("input-hue-rotate").value;
let $opacity = document.getElementById("input-opacity").value;
let $saturate = document.getElementById("input-saturate").value;
let $brightness = document.getElementById("input-brightness").value;
let $contrast = document.getElementById("input-contrast").value;
let $invert = document.getElementById("input-invert").value;
let $sepia = document.getElementById("input-sepia").value;
let $greyScale = document.getElementById("input-grey-scale").value;
let $blur = document.getElementById("input-blur").value;
let $flipX = 1;
let $flipY = 1;
let $ejeX = 0;
let $ejeY = 0;
let $borderColor = document.querySelector(".border-color").value;
let $shadowColor = document.querySelector(".shadow-color").value;
let widthDocument = document.body.clientWidth;

window.addEventListener("resize", (e) => {
    widthDocument = e.target.innerWidth;
})

window.addEventListener("load", (e) => {

    file.addEventListener("change", (e) => {

        if ((e.target.files[0])) {

            const reader = new FileReader();

            reader.readAsDataURL(e.target.files[0]);

            reader.onload = function (e) {
                img.src = e.target.result;
            }

            imgDefault.style.opacity = "0";
            imgDefault.style.visibility = "hidden";
            leyendaContenedor.style.display = "none";
        }
    })

    contenedorImg.addEventListener('dragover', (e) => {
        e.preventDefault();
        contenedorImg.style.animationName = "fondo-contenedor-img";
    });

    contenedorImg.addEventListener('dragleave', (e) => {
        contenedorImg.style.animationName = "none";
    });

    contenedorImg.addEventListener('drop', (e) => {
        e.preventDefault();
        contenedorImg.style.animationName = "none";

        const file = e.dataTransfer.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = (e) => {
                img.src = e.target.result;
                imgDefault.style.opacity = "0";
                imgDefault.style.visibility = "hidden";
                leyendaContenedor.style.display = "none";
            };

            reader.readAsDataURL(file);
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target.matches("body") || e.target.matches(".contenedor-imagen") || e.target.matches(".form-imagen") || e.target.matches(".label-imagen") || e.target.matches("#input-imagen") || e.target.matches(".bi-scissors") || e.target.matches(".leyenda-contenedor")) {

            ocultarMenus(menuTransformar);
            botonPropiedades[0].classList.remove("boton-active");
            desplegarMenuTransferir = true;

            ocultarMenus(menuColor);
            botonPropiedades[1].classList.remove("boton-active");
            desplegarMenuColor = true;

            ocultarMenus(menuEffects);
            botonPropiedades[2].classList.remove("boton-active");
            desplegarMenuEffects = true;

            ocultarMenus(menuFilters);
            botonPropiedades[3].classList.remove("boton-active");
            desplegarMenuFilters = true;

        }
    })


    botonPropiedades[0].addEventListener("mouseover", () => {
        popOverAparecer(popover[0]);
    })

    botonPropiedades[1].addEventListener("mouseover", () => {
        popOverAparecer(popover[1]);
    })

    botonPropiedades[2].addEventListener("mouseover", () => {
        popOverAparecer(popover[2]);
    })

    botonPropiedades[3].addEventListener("mouseover", () => {
        popOverAparecer(popover[3]);
    })

    botonPropiedades[4].addEventListener("mouseover", () => {
        popOverAparecer(popover[4]);
    })


    botonPropiedades[0].addEventListener("mouseout", () => {
        popOverDesaparecer(popover[0]);
    })

    botonPropiedades[1].addEventListener("mouseout", () => {
        popOverDesaparecer(popover[1]);
    })

    botonPropiedades[2].addEventListener("mouseout", () => {
        popOverDesaparecer(popover[2]);
    })

    botonPropiedades[3].addEventListener("mouseout", () => {
        popOverDesaparecer(popover[3]);
    })

    botonPropiedades[4].addEventListener("mouseout", () => {
        popOverDesaparecer(popover[4]);
    })

    let desplegarMenuTransferir = true;

    botonPropiedades[0].addEventListener("click", (e) => {
        if (desplegarMenuTransferir) {
            mostrarMenus(menuTransformar, 450);
            botonPropiedades[0].classList.add("boton-active");
            desplegarMenuTransferir = false;

            ocultarMenus(menuColor);
            botonPropiedades[1].classList.remove("boton-active");
            desplegarMenuColor = true;

            ocultarMenus(menuEffects);
            botonPropiedades[2].classList.remove("boton-active");
            desplegarMenuEffects = true;

            ocultarMenus(menuFilters);
            botonPropiedades[3].classList.remove("boton-active");
            desplegarMenuFilters = true;
        }
        else {
            ocultarMenus(menuTransformar);
            botonPropiedades[0].classList.remove("boton-active");
            desplegarMenuTransferir = true;
        }

    })

    let desplegarMenuColor = true;

    botonPropiedades[1].addEventListener("click", (e) => {

        if (desplegarMenuColor) {
            mostrarMenus(menuColor, 230);
            botonPropiedades[1].classList.add("boton-active");
            desplegarMenuColor = false;

            ocultarMenus(menuTransformar);
            botonPropiedades[0].classList.remove("boton-active");
            desplegarMenuTransferir = true;

            ocultarMenus(menuEffects);
            botonPropiedades[2].classList.remove("boton-active");
            desplegarMenuEffects = true;

            ocultarMenus(menuFilters);
            botonPropiedades[3].classList.remove("boton-active");
            desplegarMenuFilters = true;
        }
        else {
            ocultarMenus(menuColor);
            botonPropiedades[1].classList.remove("boton-active");
            desplegarMenuColor = true;
        }

    })

    let desplegarMenuEffects = true;

    botonPropiedades[2].addEventListener("click", () => {

        if (desplegarMenuEffects) {
            mostrarMenus(menuEffects, 175);
            botonPropiedades[2].classList.add("boton-active");
            desplegarMenuEffects = false;

            ocultarMenus(menuTransformar);
            botonPropiedades[0].classList.remove("boton-active");
            desplegarMenuTransferir = true;

            ocultarMenus(menuColor);
            botonPropiedades[1].classList.remove("boton-active");
            desplegarMenuColor = true;

            ocultarMenus(menuFilters);
            botonPropiedades[3].classList.remove("boton-active");
            desplegarMenuFilters = true;

        }
        else {
            ocultarMenus(menuEffects);
            botonPropiedades[2].classList.remove("boton-active");
            desplegarMenuEffects = true;
        }

    })

    let desplegarMenuFilters = true;

    botonPropiedades[3].addEventListener("click", () => {

        if (desplegarMenuFilters) {
            mostrarMenus(menuFilters, 285);
            botonPropiedades[3].classList.add("boton-active");
            desplegarMenuFilters = false;

            ocultarMenus(menuTransformar);
            botonPropiedades[0].classList.remove("boton-active");
            desplegarMenuTransferir = true;

            ocultarMenus(menuColor);
            botonPropiedades[1].classList.remove("boton-active");
            desplegarMenuColor = true;

            ocultarMenus(menuEffects);
            botonPropiedades[2].classList.remove("boton-active");
            desplegarMenuEffects = true;
        }
        else {
            ocultarMenus(menuFilters);
            botonPropiedades[3].classList.remove("boton-active");
            desplegarMenuFilters = true;
        }

    })

    botonPropiedades[4].addEventListener("click", () => {

        window.location.reload();

    })

    valorRangoBorderColor.addEventListener("change", (e) => {
        $borderColor = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);

    })

    valorRangoShadowColor.addEventListener("change", (e) => {
        $shadowColor = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);

    })

})

document.addEventListener("mousemove", (e) => {
    if (e.target.matches("#input-resize")) {
        valorRangoResize.textContent = e.target.value;
        $resize = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-rotate")) {
        valorRangoRotate.textContent = e.target.value;
        $rotate = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-skew")) {
        valorRangoSkew.textContent = e.target.value;
        $skew = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-border")) {
        valorRangoBorder.textContent = e.target.value;
        $border = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-radius")) {
        valorRangoRadius.textContent = e.target.value;
        $radius = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-shadow")) {
        valorRangoShadow.textContent = e.target.value;
        $shadow = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-hue-rotate")) {
        valorRangoHue.textContent = e.target.value;
        $hue = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-opacity")) {
        valorRangoOpacity.textContent = e.target.value;
        $opacity = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-saturate")) {
        valorRangoSaturate.textContent = e.target.value;
        $saturate = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-brightness")) {
        valorRangoBrightness.textContent = e.target.value;
        $brightness = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-contrast")) {
        valorRangoContrast.textContent = e.target.value;
        $contrast = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-invert")) {
        valorRangoInvert.textContent = e.target.value;
        $invert = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-sepia")) {
        valorRangoSepia.textContent = e.target.value;
        $sepia = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-grey-scale")) {
        valorRangoGreyScale.textContent = e.target.value;
        $greyScale = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-blur")) {
        valorRangoBlur.textContent = e.target.value;
        $blur = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }

})

// ------------------------------------------------------------------------

document.addEventListener("click", (e) => {
    if (e.target.matches("#input-resize")) {
        valorRangoResize.textContent = e.target.value;
        $resize = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-rotate")) {
        valorRangoRotate.textContent = e.target.value;
        $rotate = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-skew")) {
        valorRangoSkew.textContent = e.target.value;
        $skew = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-border")) {
        valorRangoBorder.textContent = e.target.value;
        $border = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-radius")) {
        valorRangoRadius.textContent = e.target.value;
        $radius = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-shadow")) {
        valorRangoShadow.textContent = e.target.value;
        $shadow = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-hue-rotate")) {
        valorRangoHue.textContent = e.target.value;
        $hue = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-opacity")) {
        valorRangoOpacity.textContent = e.target.value;
        $opacity = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-saturate")) {
        valorRangoSaturate.textContent = e.target.value;
        $saturate = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-brightness")) {
        valorRangoBrightness.textContent = e.target.value;
        $brightness = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-contrast")) {
        valorRangoContrast.textContent = e.target.value;
        $contrast = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-invert")) {
        valorRangoInvert.textContent = e.target.value;
        $invert = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-sepia")) {
        valorRangoSepia.textContent = e.target.value;
        $sepia = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-grey-scale")) {
        valorRangoGreyScale.textContent = e.target.value;
        $greyScale = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }


    if (e.target.matches("#input-blur")) {
        valorRangoBlur.textContent = e.target.value;
        $blur = e.target.value;
        transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
    }

})




flipHorizontalBtn.addEventListener("click", (e) => {
    if ($flipX == 1) {
        $flipX = -1;
    }
    else {
        $flipX = 1;
    }
    transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);

})


flipVerticalBtn.addEventListener("click", (e) => {
    if ($flipY == 1) {
        $flipY = -1
    }
    else {
        $flipY = 1;
    }
    transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
})

window.addEventListener("keydown", (e) => {
    e.preventDefault();

    switch (e.key) {
        case "ArrowUp":
            $ejeY -= 5;
            transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
            break;

        case "ArrowDown":
            $ejeY += 5;
            transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
            break;

        case "ArrowLeft":
            $ejeX -= 5;
            transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
            break;

        case "ArrowRight":
            $ejeX += 5;
            transform(img, $resize, $rotate, $skew, $border, $radius, $shadow, $hue, $opacity, $saturate, $brightness, $contrast, $invert, $sepia, $greyScale, $blur, $flipX, $flipY, $borderColor, $shadowColor, $ejeX, $ejeY);
            break;
    }
})


containersMenus.addEventListener("mousedown", (e) => {
    if(e.target.matches("[type=range]") && widthDocument < 700){
        e.target.closest(".menu").style.opacity = "0.5";
    }
})

containersMenus.addEventListener("mouseup", (e) => {
    if(e.target.matches("[type=range]") && widthDocument < 700){
        e.target.closest(".menu").style.opacity = "1";
    }
})









