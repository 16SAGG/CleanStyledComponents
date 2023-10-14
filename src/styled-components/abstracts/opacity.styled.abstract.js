export const opacity = ({
    $opacity = undefined,
}) =>{
    return `
        ${($opacity) ? `opacity : ${$opacity};` : ''}
    `
}