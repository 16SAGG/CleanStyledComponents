export const hover = ({
    $hoverProperties = undefined,
}) =>{
    return `
        ${($hoverProperties) ? 
            `&:hover {
                ${$hoverProperties}
            }`
        : 
            ''}
    `
}