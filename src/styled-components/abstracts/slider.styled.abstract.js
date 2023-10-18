export const slider = ({
    $sliderThumbProperties = undefined,
}) =>{
    return `
        ${($sliderThumbProperties) ? 
            `&::-webkit-slider-thumb {
                ${$sliderThumbProperties}
            }
            
            &::-moz-range-thumb {
                ${$sliderThumbProperties}
            }`
        : 
            ''}
    `
}