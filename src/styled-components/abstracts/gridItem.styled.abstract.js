export const gridItem = ({
    $gridColumn = undefined,
    $gridRow = undefined,
    $gridArea = undefined,
}) =>{
    return `
        ${($gridColumn) ? `grid-column : ${$gridColumn};` : ''}
        ${($gridRow) ? `grid-row : ${$gridRow};` : ''}
        ${($gridArea) ? `grid-area : ${$gridArea};` : ''}
    `
}