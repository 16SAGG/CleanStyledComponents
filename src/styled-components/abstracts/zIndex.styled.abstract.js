export const zIndex = ({
    $zIndex = undefined, 
}) =>{
    return `
        ${($zIndex) ? `z-index : ${$zIndex};` : ''}
    `
}