export const contentAlignment = ({
    $justifyContent = undefined,
    $alignItems = undefined,
    $alignContent = undefined,
}) =>{
    return `
        ${($justifyContent) ? `justify-content : ${$justifyContent};` : ''}
        ${($alignItems) ? `align-items : ${$alignItems};` : ''}
        ${($alignContent) ? `align-content : ${$alignContent};` : ''}
    `
}