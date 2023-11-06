export const position = ({
    $position = undefined, 
}) =>{
    return `
        ${($position) ? `position : ${$position};` : ''}
    `
}