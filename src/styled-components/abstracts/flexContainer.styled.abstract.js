export const flexContainer = ({
    $flexDirection = undefined,
    $flexWrap = undefined,
}) =>{
    return `
        ${($flexDirection) ? `flex-direction : ${$flexDirection};` : ''}
        ${($flexWrap) ? `flex-wrap : ${$flexWrap};` : ''}
    `
}