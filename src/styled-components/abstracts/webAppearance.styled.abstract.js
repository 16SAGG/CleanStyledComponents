export const webAppearance = ({
    $webkitAppearance = undefined,
    $mozAppearance = undefined
}) =>{
    return `
        ${($webkitAppearance) ? `-webkit-appearance : ${$webkitAppearance};` : ''}

        ${($mozAppearance) ? `-moz-appearance : ${$mozAppearance};` : ''}
    `
}