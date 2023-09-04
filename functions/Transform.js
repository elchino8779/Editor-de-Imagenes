export function transform(img, resize, rotate, skew, border, radius, shadow, hue, opacity, saturate, brightness, contrast, invert, sepia, greyScale, blur, flipX, flipY, borderColor, shadowColor, ejeX, ejeY) {

    if (img.getAttribute("src") != "") {

        img.style.transform = `scale(${resize}) rotate(${rotate}deg) skew(${skew}deg) scaleX(${flipX}) scaleY(${flipY}) translate(${ejeX}px, ${ejeY}px)`;
        img.style.border = `${border}px solid ${borderColor}`;
        img.style.borderRadius = `${radius}%`;

        if (shadow == 0) {
            
            img.style.filter = `hue-rotate(${hue}deg) opacity(${opacity}) saturate(${saturate}) brightness(${brightness}) contrast(${contrast}) invert(${invert}) sepia(${sepia}) grayscale(${greyScale}) blur(${blur}px) drop-shadow(0px 0px 0px ${shadowColor})`;
        }
        else {
            
            img.style.filter = `hue-rotate(${hue}deg) opacity(${opacity}) saturate(${saturate}) brightness(${brightness}) contrast(${contrast}) invert(${invert}) sepia(${sepia}) grayscale(${greyScale}) blur(${blur}px) drop-shadow(${shadow}px ${shadow}px 20px ${shadowColor})`;
        }

    }


}