export const background = ({
    $backgroundAttachment = undefined,
    $backgroundClip = undefined,
    $backgroundOrigin = undefined,
    $backgroundColor = undefined,
    $backgroundImage = undefined,
    $backgroundPosition = undefined,
    $backgroundRepeat = undefined,
    $backgroundSize = undefined,
}) =>{
    return `
        ${($backgroundAttachment) ? `background-attachment : ${$backgroundAttachment};` : ''}
        
        ${($backgroundClip) ? `background-clip : ${$backgroundClip};` : ''}
        ${($backgroundOrigin) ? `background-origin : ${$backgroundOrigin};` : ''}
        

        ${($backgroundColor) ? `background-color : ${$backgroundColor};` : ''}
        ${($backgroundImage) ? `background-image : ${$backgroundImage};` : ''}
        
        ${($backgroundPosition) ? `background-position : ${$backgroundPosition};` : ''}

        ${($backgroundRepeat) ? `background-Repeat : ${$backgroundRepeat};` : ''}

        ${($backgroundSize) ? `background-Size : ${$backgroundSize};` : ''}
    `
}