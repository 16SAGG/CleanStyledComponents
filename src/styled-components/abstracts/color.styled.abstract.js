export const color = ({
    $color = undefined, 
}) =>{
    return `
        ${($color) ? `color : ${$color};` : ''}
    `
}