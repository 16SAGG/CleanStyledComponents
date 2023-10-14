export const dispay = ({
    $display = undefined,
}) =>{
    return `
        ${($minWidth) ? `display : ${$minWidth};` : ''}
    `
}