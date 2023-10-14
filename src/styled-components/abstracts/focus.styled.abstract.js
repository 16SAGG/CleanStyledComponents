export const focus = ({
    $focusProperties = undefined,
}) =>{
    return `
        ${($focusProperties) ? 
            `&:focus {
                ${$focusProperties}
            }`
        : 
            ''}
    `
}