export const gridContainer = ({
    $gridTemplateAreas = undefined,
    $gridTemplateColumns = undefined,
    $gridTemplateRows = undefined,
}) =>{
    return `
        ${($gridTemplateAreas) ? `grid-template-areas : ${$gridTemplateAreas};` : ''}
        ${($gridTemplateColumns) ? `grid-template-columns : ${$gridTemplateColumns};` : ''}
        ${($gridTemplateRows) ? `grid-template-rows : ${$gridTemplateRows};` : ''}
    `
}