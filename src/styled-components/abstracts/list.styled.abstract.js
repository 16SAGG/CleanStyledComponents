export const list = ({
    $listStyleImage = undefined,
    $listStyleType = undefined,
    $listStylePosition = undefined, 
}) =>{
    return `
        ${($listStyleImage) ? `list-style-image : ${$listStyleImage};` : ''}
        ${($listStyleType) ? `list-style-type : ${$listStyleType};` : ''}
        ${($listStylePosition) ? `list-style-position : ${$listStylePosition};` : ''}
    `
}