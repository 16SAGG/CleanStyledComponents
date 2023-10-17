export const height = ({
    $height = undefined,
    $minHeight = undefined, 
    $maxHeight = undefined,
}) =>{
    return `
        ${($height) ? `height : ${$height};` : ''}
        ${($minHeight) ? `min-height : ${$minHeight};` : ''}
        ${($maxHeight) ? `max-height : ${$maxHeight};` : ''}
    `
}