export const slider = ({
    $sliderThumbProperties = undefined,
}) =>{
    return `
        ${($sliderProperties) ? 
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