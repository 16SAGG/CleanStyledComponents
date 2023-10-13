import { background } from "./abstracts/background.styled.abstract"
import { border } from "./abstracts/border.styled.abstract"
import { color } from "./abstracts/color.styled.abstract"
import { cursor } from "./abstracts/cursor.styled.abstract"
import { height } from "./abstracts/height.styled.abstract"
import { hover } from "./abstracts/hover.styled.abstract"
import { margin } from "./abstracts/margin.styled.abstract"
import { outline } from "./abstracts/outline.styled.abstract"
import { overflow } from "./abstracts/overflow.styled.abstract"
import { padding } from "./abstracts/padding.styled.abstract"
import { scrollBar } from "./abstracts/scrollBar.styled.abstract"
import { text } from "./abstracts/text.styled.abstract"
import { transition } from "./abstracts/transition.styled.abstract"
import { width } from "./abstracts/width.styled.abstract"

export const template = ({

    $backgroundAttachment = undefined,
    $backgroundClip = undefined,
    $backgroundOrigin = undefined,
    $backgroundColor = undefined,
    $backgroundImage = undefined,
    $backgroundPosition = undefined,
    $backgroundRepeat = undefined,
    $backgroundSize = undefined,

    $borderStyle = undefined, 
    $borderColor = undefined, 
    $borderTopWidth = undefined,
    $borderBottomWidth = undefined,
    $borderLeftWidth = undefined,
    $borderRightWidth = undefined,

    $color = undefined, 

    $cursor = undefined,

    $minHeight = undefined, 
    $maxHeight = undefined,

    $hoverProperties = undefined,

    $marginTop = undefined, 
    $marginBottom = undefined, 
    $marginLeft = undefined,
    $marginRight = undefined,

    $outlineStyle = undefined,
    $outlineColor = undefined,
    $outlineWidth = undefined, 
    $outlineOffset = undefined,

    $overflow = undefined,

    $paddingTop = undefined, 
    $paddingBottom = undefined, 
    $paddingLeft = undefined,
    $paddingRight = undefined,

    $scrollBarProperties = undefined,
    $scrollBarHoverProperties = undefined,
    $scrollBarButtonProperties = undefined,
    $scrollBarButtonHoverProperties = undefined,
    $scrollBarThumbProperties = undefined,
    $scrollBarThumbHoverProperties = undefined,
    $scrollBarTrackProperties = undefined,
    $scrollBarTrackHoverProperties = undefined,

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

    $transitionProperty = undefined, 
    $transitionDuration = undefined,
    $transitionTimingFunction = undefined,
    $transitionDelay = undefined,

    $minWidth = undefined, 
    $maxWidth = undefined,
}) =>{
    return `
        ${background({
            $backgroundAttachment : $backgroundAttachment,
            $backgroundClip : $backgroundClip,
            $backgroundColor : $backgroundColor,
            $backgroundImage : $backgroundImage,
            $backgroundOrigin : $backgroundOrigin,
            $backgroundPosition : $backgroundPosition,
            $backgroundRepeat : $backgroundRepeat,
            $backgroundSize : $backgroundSize,
        })}

        ${border({
            $borderStyle : $borderStyle,
            $borderColor : $borderColor, 
            $borderTopWidth : $borderTopWidth,
            $borderBottomWidth : $borderBottomWidth,
            $borderLeftWidth : $borderLeftWidth,
            $borderRightWidth : $borderRightWidth,
        })}

        ${color({
            $color : $color,
        })}

        ${cursor({
            $cursor : $cursor,
        })}

        ${height({
            $minHeight : $minHeight,
            $maxHeight : $maxHeight,
        })}

        ${hover({
            $hoverProperties : $hoverProperties,
        })}

        ${margin({
            $marginTop : $marginTop,
            $marginBottom : $marginBottom,
            $marginLeft : $marginLeft,
            $marginRight : $marginRight,
        })}

        ${outline({
            $outlineStyle : $outlineStyle,
            $outlineColor : $outlineColor,
            $outlineWidth : $outlineWidth,
            $outlineOffset : $outlineOffset,
        })}

        ${overflow({
            $overflow : $overflow,
        })}

        ${padding({
            $paddingTop : $paddingTop,
            $paddingBottom : $paddingBottom,
            $paddingLeft : $paddingLeft,
            $paddingRight : $paddingRight,
        })}

        ${scrollBar({
            $scrollBarProperties : $scrollBarProperties,
            $scrollBarHoverProperties : $scrollBarHoverProperties,
            $scrollBarButtonProperties : $scrollBarButtonProperties,
            $scrollBarButtonHoverProperties : $scrollBarButtonHoverProperties,
            $scrollBarThumbProperties : $scrollBarThumbProperties,
            $scrollBarThumbHoverProperties : $scrollBarThumbHoverProperties,
            $scrollBarTrackProperties : $scrollBarTrackProperties,
            $scrollBarTrackHoverProperties : $scrollBarTrackHoverProperties,
        })}

        ${text({
            $textAlign : $textAlign,
            $textAlignLast : $textAlignLast,
            $textDirection : $textDirection,
            $unicodeBidi : $unicodeBidi,
            $verticalAlign : $verticalAlign,
            $textDecorationLine : $textDecorationLine,
            $textDecorationColor : $textDecorationColor,
            $textDecorationStyle : $textDecorationStyle,
            $textDecorationThickness : $textDecorationThickness,
            $textTransform : $textTransform,
            $textIndent : $textIndent,
            $letterSpacing : $letterSpacing,
            $lineHeight : $lineHeight,
            $wordSpacing : $wordSpacing,
            $whiteSpace : $whiteSpace,
            $textShadow : $textShadow,
        })}

        ${transition({
            $transitionProperty : $transitionProperty,
            $transitionDuration : $transitionDuration,
            $transitionTimingFunction : $transitionTimingFunction,
            $transitionDelay : $transitionDelay,
        })}

        ${width({
            $minWidth : $minWidth,
            $maxWidth : $maxWidth,
        })}
    `
}