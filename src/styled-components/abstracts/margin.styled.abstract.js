export const margin = ({
    $marginTop = undefined, 
    $marginBottom = undefined, 
    $marginLeft = undefined,
    $marginRight = undefined,
}) =>{
    return `
        ${($marginTop) ? `margin-top : ${$marginTop};` : ''}
        ${($marginBottom) ? `margin-bottom : ${$marginBottom};` : ''}
        ${($marginLeft) ? `margin-left : ${$marginLeft};` : ''}
        ${($marginRight) ? `margin-right : ${$marginRight};` : ''}
    `
}