export const numberInput = ({
    $outerSpinNumberInputProperties = undefined,
    $innerSpinNumberInputProperties = undefined,
    $firefoxNumberInputProperties = undefined,
}) =>{
    return `
        ${($outerSpinNumberInputProperties) ? 
            `&::-webkit-outer-spin-button {
                ${$outerSpinNumberInputProperties}
            }`
        : 
            ''}
            
        ${($innerSpinNumberInputProperties) ? 
            `&::-webkit-outer-spin-button {
                ${$innerSpinNumberInputProperties}
            }`
        : 
            ''}

        ${($firefoxNumberInputProperties) ? 
            `&::-webkit-outer-spin-button {
                ${$firefoxNumberInputProperties}
            }`
        : 
            ''}
    `
}