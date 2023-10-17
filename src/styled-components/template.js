import { background } from "./abstracts/background.styled.abstract"
import { border } from "./abstracts/border.styled.abstract"
import { color } from "./abstracts/color.styled.abstract"
import { contentAlignment } from "./abstracts/contentAlignment.styled.abstract"
import { cursor } from "./abstracts/cursor.styled.abstract"
import { dispay } from "./abstracts/display.styled.abstract"
import { flexContainer } from "./abstracts/flexContainer.styled.abstract"
import { flexItem } from "./abstracts/flexItem.styled.abstract"
import { focus } from "./abstracts/focus.styled.abstract"
import { gap } from "./abstracts/gap.styled.abstract"
import { gridContainer } from "./abstracts/gridContainer.styled.abstract"
import { gridItem } from "./abstracts/gridItem.styled.abstract"
import { height } from "./abstracts/height.styled.abstract"
import { hover } from "./abstracts/hover.styled.abstract"
import { margin } from "./abstracts/margin.styled.abstract"
import { opacity } from "./abstracts/opacity.styled.abstract"
import { outline } from "./abstracts/outline.styled.abstract"
import { overflow } from "./abstracts/overflow.styled.abstract"
import { padding } from "./abstracts/padding.styled.abstract"
import { scrollBar } from "./abstracts/scrollBar.styled.abstract"
import { text } from "./abstracts/text.styled.abstract"
import { transition } from "./abstracts/transition.styled.abstract"
import { width } from "./abstracts/width.styled.abstract"
import { zIndex } from "./abstracts/zIndex.styled.abstract"

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

    $justifyContent = undefined,
    $alignItems = undefined,
    $alignContent = undefined,

    $cursor = undefined,

    $display = undefined,

    $flexDirection = undefined,
    $flexWrap = undefined,

    $order = undefined,
    $flexGrow = undefined,
    $flexShrink = undefined,
    $flexBasis = undefined, 
    $alignSelf = undefined,

    $focusProperties = undefined,

    $gap = undefined,
    $gridRowGap = undefined,
    $gridColumnGap = undefined,

    $gridTemplateAreas = undefined,
    $gridTemplateColumns = undefined,
    $gridTemplateRows = undefined,

    $gridColumn = undefined,
    $gridRow = undefined,
    $gridArea = undefined,

    $height = undefined,
    $minHeight = undefined, 
    $maxHeight = undefined,

    $hoverProperties = undefined,

    $marginTop = undefined, 
    $marginBottom = undefined, 
    $marginLeft = undefined,
    $marginRight = undefined,

    $opacity = undefined,

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

    $width = undefined,
    $minWidth = undefined, 
    $maxWidth = undefined,

    $zIndex = undefined,
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

        ${contentAlignment({
            $justifyContent : $justifyContent,
            $alignItems : $alignItems,
            $alignContent : $alignContent,
        })}

        ${cursor({
            $cursor : $cursor,
        })}

        ${dispay({
            $display : $display,
        })}

        ${flexContainer({
            $flexDirection : $flexDirection,
            $flexWrap : $flexWrap,
        })}

        ${flexItem({
            $order : $order,
            $flexGrow : $flexGrow,
            $flexShrink : $flexShrink,
            $flexBasis : $flexBasis,
            $alignSelf : $alignSelf,
        })}

        ${focus({
            $focusProperties : $focusProperties,
        })}

        ${gap({
            $gap : $gap,
            $gridColumnGap : $gridColumnGap,
            $gridRowGap : $gridRowGap,
        })}

        ${gridContainer({
            $gridTemplateAreas : $gridTemplateAreas,
            $gridTemplateColumns : $gridTemplateColumns,
            $gridTemplateRows : $gridTemplateRows,
        })}

        ${gridItem({
            $gridColumn : $gridColumn,
            $gridRow : $gridRow,
            $gridArea : $gridArea,
        })}

        ${height({
            $height : $height,
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

        ${opacity({
            $opacity : $opacity,
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
            $width : $width,
            $minWidth : $minWidth,
            $maxWidth : $maxWidth,
        })}

        ${zIndex({
            $zIndex : $zIndex,
        })}
    `
}