export const gridContainer = ({
    $gridTemplateAreas = undefined,
    $gridTemplateColumns = undefined,
    $gridTemplateRows = undefined,
    $justifyContent = undefined,
    $alignContent = undefined,
}) =>{
    return `
        display : grid; 
        
        ${($gridTemplateAreas) ? `grid-template-areas : ${$gridTemplateAreas};` : ''}
        ${($gridTemplateColumns) ? `grid-template-columns : ${$gridTemplateColumns};` : ''}
        ${($gridTemplateRows) ? `grid-template-rows : ${$gridTemplateRows};` : ''}
        
        ${($justifyContent) ? `justify-content : ${$justifyContent};` : ''}
        ${($alignContent) ? `align-content : ${$alignContent};` : ''}
    `
}