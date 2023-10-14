export const dispay = ({
    $display = undefined,
}) =>{
    return `
        ${($display) ? `display : ${$display};` : ''}
    `
}