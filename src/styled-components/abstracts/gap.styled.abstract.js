export const gap = ({
    $gap = undefined,
    $gridRowGap = undefined,
    $gridColumnGap = undefined,
}) =>{
    return `
        ${($gap) ? `gap : ${$gap};` : ''}
        ${($gridRowGap) ? `grid-row-gap : ${$gridRowGap};` : ''}
        ${($gridColumnGap) ? `grid-column-gap : ${$gridColumnGap};` : ''}
    `
}