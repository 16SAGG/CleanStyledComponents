export const outline = ({
    $outlineStyle = undefined,
    $outlineColor = undefined,
    $outlineWidth = undefined, 
    $outlineOffset = undefined,
}) =>{
    return `
        ${($outlineStyle) ? `outline-style : ${$outlineStyle};` : ''}
        ${($outlineColor) ? `outline-color : ${$outlineColor};` : ''}
        ${($outlineWidth) ? `outline-width : ${$outlineWidth};` : ''}
        ${($outlineOffset) ? `outline-offset : ${$outlineOffset};` : ''}
    `
}