export const padding = ({
    $paddingTop = undefined, 
    $paddingBottom = undefined, 
    $paddingLeft = undefined,
    $paddingRight = undefined,
}) =>{
    return `
        ${($paddingTop) ? `padding-top : ${$paddingTop};` : ''}
        ${($paddingBottom) ? `padding-bottom : ${$paddingBottom};` : ''}
        ${($paddingLeft) ? `padding-left : ${$paddingLeft};` : ''}
        ${($paddingRight) ? `padding-right : ${$paddingRight};` : ''}
    `
}