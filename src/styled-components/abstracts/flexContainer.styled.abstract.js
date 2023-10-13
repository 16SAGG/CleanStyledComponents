export const flexContainer = ({
    $flexDirection = undefined,
    $flexWrap = undefined,
    $justifyContent = undefined,
    $alignItems = undefined,
    $alignContent = undefined,
}) =>{
    return `
        display : flex; 
        
        ${($flexDirection) ? `flex-direction : ${$flexDirection};` : ''}
        ${($flexWrap) ? `flex-wrap : ${$flexWrap};` : ''}
        
        ${($justifyContent) ? `justify-content : ${$justifyContent};` : ''}
        ${($alignItems) ? `align-items : ${$alignItems};` : ''}
        ${($alignContent) ? `align-content : ${$alignContent};` : ''}
    `
}