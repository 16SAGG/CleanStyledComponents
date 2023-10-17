export const width = ({
    $width = undefined,
    $minWidth = undefined, 
    $maxWidth = undefined,
}) =>{
    return `
        ${($width) ? `width : ${$width};` : '' }
        ${($minWidth) ? `min-width : ${$minWidth};` : ''}
        ${($maxWidth) ? `max-width : ${$maxWidth};` : ''}
    `
}