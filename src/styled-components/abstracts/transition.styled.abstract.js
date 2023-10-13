export const transition = ({
    $transitionProperty = undefined, 
    $transitionDuration = undefined,
    $transitionTimingFunction = undefined,
    $transitionDelay = undefined,
}) =>{
    return `
        ${($transitionProperty) ? `transition-property : ${$transitionProperty};` : ''}
        ${($transitionDuration) ? `transition-duration : ${$transitionDuration};` : ''}
        ${($transitionTimingFunction) ? `transition-timing-function : ${$transitionTimingFunction};` : ''}
        ${($transitionDelay) ? `transition-delay : ${$transitionDelay};` : ''}
    `
}