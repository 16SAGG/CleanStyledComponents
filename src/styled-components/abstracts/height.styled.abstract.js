export const height = ({
    $minHeight = undefined, 
    $maxHeight = undefined,
}) =>{
    return `
        ${($minHeight) ? `min-height : ${$minHeight};` : ''}
        ${($maxHeight) ? `max-height : ${$maxHeight};` : ''}
    `
}