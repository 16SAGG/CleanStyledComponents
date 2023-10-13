export const cursor = ({
    $cursor = undefined, 
}) =>{
    return `
        ${($cursor) ? `cursor : ${$cursor};` : ''}
    `
}