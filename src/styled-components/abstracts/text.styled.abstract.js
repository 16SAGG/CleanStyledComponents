export const text = ({
    $textAlign = undefined, 
    $textAlignLast = undefined, 
    $textDirection = undefined,
    $unicodeBidi = undefined,
    $verticalAlign = undefined,
    $textDecorationLine = undefined,
    $textDecorationColor = undefined,
    $textDecorationStyle = undefined,
    $textDecorationThickness = undefined, 
    $textTransform = undefined,
    $textIndent = undefined,
    $letterSpacing = undefined,
    $lineHeight = undefined,
    $wordSpacing = undefined,
    $whiteSpace = undefined,
    $textShadow = undefined,
}) =>{
    return `
        ${($textAlign) ? `text-align : ${$textAlign};` : ''}
        ${($textAlignLast) ? `text-align-last : ${$textAlignLast};` : ''}
        ${($textDirection) ? `text-direction : ${$textDirection};` : ''}
        ${($unicodeBidi) ? `unicode-bidi : ${$unicodeBidi};` : ''}
        ${($verticalAlign) ? `vertical-align : ${$verticalAlign};` : ''}

        ${($textDecorationLine) ? `text-decoration-line : ${$textDecorationLine};` : ''}
        ${($textDecorationColor) ? `text-decoration-color : ${$textDecorationColor};` : ''}
        ${($textDecorationStyle) ? `text-decoration-style : ${$textDecorationStyle};` : ''}
        ${($textDecorationThickness) ? `text-decoration-thickness : ${$textDecorationThickness};` : ''}
        
        ${($textTransform) ? `text-dTransform : ${$textTransform};` : ''}

        ${($textIndent) ? `text-indent : ${$textIndent};` : ''}
        ${($letterSpacing) ? `letter-spacing : ${$letterSpacing};` : ''}
        ${($lineHeight) ? `line-height : ${$lineHeight};` : ''}
        ${($wordSpacing) ? `word-spacing : ${$wordSpacing};` : ''}
        ${($whiteSpace) ? `white-space : ${$whiteSpace};` : ''}

        ${($textShadow) ? `textShadow : ${$textShadow};` : ''}
    `
}