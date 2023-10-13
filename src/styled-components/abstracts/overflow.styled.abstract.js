export const overflow = ({
    $overflow = undefined,
}) =>{
    return `
        ${($overflow) ? `overflow : ${$overflow};` : ''}
    `
}