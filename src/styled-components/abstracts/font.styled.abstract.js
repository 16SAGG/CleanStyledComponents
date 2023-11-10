export const font = ({
    $font = undefined,
    $fontVariant = undefined,
    $fontWeight = undefined,
    $fontSize = undefined,
    $fontFamily = undefined,
}) =>{
    return `
        ${($font) ? `font : ${$font};` : '' }
        ${($fontVariant) ? `font-variant : ${$fontVariant};` : '' }
        ${($fontWeight) ? `font-weight : ${$fontWeight};` : '' }
        ${($fontSize) ? `font-size : ${$fontSize};` : '' }
        ${($fontFamily) ? `font-family : ${$fontFamily};` : '' }
    `
}