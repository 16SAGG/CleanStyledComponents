export const slider = ({
    $sliderProperties = undefined,
}) =>{
    return `
        ${($sliderProperties) ? 
            `&::-webkit-slider-thumb {
                ${$sliderProperties}
            }
            
            &::-moz-range-thumb {
                ${$sliderProperties}
            }`
        : 
            ''}
    `
}