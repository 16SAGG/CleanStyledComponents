export const border = ({
    $borderStyle = undefined, 
    $borderColor = undefined, 
    $borderTopWidth = undefined,
    $borderBottomWidth = undefined,
    $borderLeftWidth = undefined,
    $borderRightWidth = undefined,
}) =>{
    return `
        ${($borderStyle) ? `border-style : ${$borderStyle};` : ''}
        
        ${($borderColor) ? `border-color : ${$borderColor};` : ''}

        ${($borderTopWidth) ? `border-top-width : ${$borderTopWidth};` : ''}
        ${($borderBottomWidth) ? `border-bottom-width : ${$borderBottomWidth};` : ''}
        ${($borderLeftWidth) ? `border-left-width : ${$borderLeftWidth};` : ''}
        ${($borderRightWidth) ? `border-right-width : ${$borderRightWidth};` : ''}
    `
}