export const scrollBar = ({
    $scrollBarProperties = undefined,
    $scrollBarHoverProperties = undefined,
    $scrollBarButtonProperties = undefined,
    $scrollBarButtonHoverProperties = undefined,
    $scrollBarThumbProperties = undefined,
    $scrollBarThumbHoverProperties = undefined,
    $scrollBarTrackProperties = undefined,
    $scrollBarTrackHoverProperties = undefined,
}) =>{
    return `
        ${($scrollBarProperties) ? 
            `&::-webkit-scrollbar {
                ${$scrollBarProperties}
            }`
        : 
            ''}
        
        ${($scrollBarHoverProperties) ? 
            `&::-webkit-scrollbar:hover {
                ${$scrollBarHoverProperties}
            }`
        : 
            ''}
        
        ${($scrollBarButtonProperties) ? 
            `&::-webkit-scrollbar-button {
                ${$scrollBarButtonProperties}
            }`
        : 
            ''}
        
        ${($scrollBarButtonHoverProperties) ? 
            `&::-webkit-scrollbar-button:hover {
                ${$scrollBarButtonHoverProperties}
            }`
        : 
            ''}
        
        ${($scrollBarThumbProperties) ? 
            `&::-webkit-scrollbar-thumb {
                ${$scrollBarThumbProperties}
            }`
        : 
            ''}
        
        ${($scrollBarThumbHoverProperties) ? 
            `&::-webkit-scrollbar-thumb:hover {
                ${$scrollBarThumbHoverProperties}
            }`
        : 
            ''}
        
        ${($scrollBarTrackProperties) ? 
            `&::-webkit-scrollbar-track {
                ${$scrollBarTrackProperties}
            }`
        : 
            ''}
        
        ${($scrollBarTrackHoverProperties) ? 
            `&::-webkit-scrollbar-track:hover {
                ${$scrollBarTrackHoverProperties}
            }`
        : 
            ''}
    `
}