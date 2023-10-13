export const flexItem = ({
    $order = undefined,
    $flexGrow = undefined,
    $flexShrink = undefined,
    $flexBasis = undefined, 
    $alignSelf = undefined,
}) =>{
    return `
        ${($order) ? `order : ${$order};` : ''}
        
        ${($flexGrow) ? `flex-grow : ${$flexGrow};` : ''}
        ${($flexShrink) ? `flex-shrink : ${$flexShrink};` : ''}
        ${($flexBasis) ? `flex-basis : ${$flexBasis};` : ''}
        
        ${($alignSelf) ? `align-self : ${$alignSelf};` : ''}
    `
}