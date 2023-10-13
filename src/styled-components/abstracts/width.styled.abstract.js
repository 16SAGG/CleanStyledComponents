export const width = ({
    $minWidth = undefined, 
    $maxWidth = undefined,
}) =>{
    return `
        ${($minWidth) ? `min-width : ${$minWidth};` : ''}
        ${($maxWidth) ? `max-width : ${$maxWidth};` : ''}
    `
}