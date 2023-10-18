export const appearance = ({
    $appearance = undefined
}) =>{
    return `
        ${($appearance) ? `appearance: ${$appearance};` : '' }
    `
}