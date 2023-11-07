import { appearance } from "./abstracts/appearance.styled.abstract"
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
import { list } from "./abstracts/list.styled.abstract"
import { margin } from "./abstracts/margin.styled.abstract"
import { numberInput } from "./abstracts/numberInput.styled.abstract"
import { opacity } from "./abstracts/opacity.styled.abstract"
import { outline } from "./abstracts/outline.styled.abstract"
import { overflow } from "./abstracts/overflow.styled.abstract"
import { padding } from "./abstracts/padding.styled.abstract"
import { position } from "./abstracts/position.styled.abstract"
import { scrollBar } from "./abstracts/scrollBar.styled.abstract"
import { slider } from "./abstracts/slider.styled.abstract"
import { text } from "./abstracts/text.styled.abstract"
import { transition } from "./abstracts/transition.styled.abstract"
import { webAppearance } from "./abstracts/webAppearance.styled.abstract"
import { width } from "./abstracts/width.styled.abstract"
import { zIndex } from "./abstracts/zIndex.styled.abstract"

export const template = ({
    $appearance = undefined,

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

    $listStyleImage = undefined,
    $listStyleType = undefined,
    $listStylePosition = undefined, 

    $marginTop = undefined, 
    $marginBottom = undefined, 
    $marginLeft = undefined,
    $marginRight = undefined,

    $outerSpinNumberInputProperties = undefined,
    $innerSpinNumberInputProperties = undefined,
    $firefoxNumberInputProperties = undefined,

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

    $position = undefined,

    $scrollBarProperties = undefined,
    $scrollBarHoverProperties = undefined,
    $scrollBarButtonProperties = undefined,
    $scrollBarButtonHoverProperties = undefined,
    $scrollBarThumbProperties = undefined,
    $scrollBarThumbHoverProperties = undefined,
    $scrollBarTrackProperties = undefined,
    $scrollBarTrackHoverProperties = undefined,
    $scrollBarCornerProperties = undefined,

    $sliderThumbProperties = undefined,

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

    $webkitAppearance = undefined,
    $mozAppearance = undefined,

    $width = undefined,
    $minWidth = undefined, 
    $maxWidth = undefined,

    $zIndex = undefined,
}) =>{
    return `
        ${appearance({
            $appearance,
        })}

        ${background({
            $backgroundAttachment,
            $backgroundClip,
            $backgroundColor,
            $backgroundImage,
            $backgroundOrigin,
            $backgroundPosition,
            $backgroundRepeat,
            $backgroundSize,
        })}

        ${border({
            $borderStyle,
            $borderColor, 
            $borderTopWidth,
            $borderBottomWidth,
            $borderLeftWidth,
            $borderRightWidth,
        })}

        ${color({
            $color,
        })}

        ${contentAlignment({
            $justifyContent,
            $alignItems,
            $alignContent,
        })}

        ${cursor({
            $cursor,
        })}

        ${dispay({
            $display,
        })}

        ${flexContainer({
            $flexDirection,
            $flexWrap,
        })}

        ${flexItem({
            $order,
            $flexGrow,
            $flexShrink,
            $flexBasis,
            $alignSelf,
        })}

        ${focus({
            $focusProperties,
        })}

        ${gap({
            $gap,
            $gridColumnGap,
            $gridRowGap,
        })}

        ${gridContainer({
            $gridTemplateAreas,
            $gridTemplateColumns,
            $gridTemplateRows,
        })}

        ${gridItem({
            $gridColumn,
            $gridRow,
            $gridArea,
        })}

        ${height({
            $height,
            $minHeight,
            $maxHeight,
        })}

        ${hover({
            $hoverProperties,
        })}

        ${list({
            $listStyleImage,
            $listStyleType,
            $listStylePosition,
        })}

        ${margin({
            $marginTop,
            $marginBottom,
            $marginLeft,
            $marginRight,
        })}

        ${numberInput({
            $outerSpinNumberInputProperties,
            $innerSpinNumberInputProperties,
            $firefoxNumberInputProperties,
        })}

        ${opacity({
            $opacity,
        })}

        ${outline({
            $outlineStyle,
            $outlineColor,
            $outlineWidth,
            $outlineOffset,
        })}

        ${overflow({
            $overflow,
        })}

        ${padding({
            $paddingTop,
            $paddingBottom,
            $paddingLeft,
            $paddingRight,
        })}

        ${position({
            $position,
        })}

        ${scrollBar({
            $scrollBarProperties,
            $scrollBarHoverProperties,
            $scrollBarButtonProperties,
            $scrollBarButtonHoverProperties,
            $scrollBarThumbProperties,
            $scrollBarThumbHoverProperties,
            $scrollBarTrackProperties,
            $scrollBarTrackHoverProperties,
            $scrollBarCornerProperties,
        })}

        ${slider({
            $sliderThumbProperties,
        })}

        ${text({
            $textAlign,
            $textAlignLast,
            $textDirection,
            $unicodeBidi,
            $verticalAlign,
            $textDecorationLine,
            $textDecorationColor,
            $textDecorationStyle,
            $textDecorationThickness,
            $textTransform,
            $textIndent,
            $letterSpacing,
            $lineHeight,
            $wordSpacing,
            $whiteSpace,
            $textShadow,
        })}

        ${transition({
            $transitionProperty,
            $transitionDuration,
            $transitionTimingFunction,
            $transitionDelay,
        })}

        ${webAppearance({
            $webkitAppearance,
            $mozAppearance,
        })}
        
        ${width({
            $width,
            $minWidth,
            $maxWidth,
        })}

        ${zIndex({
            $zIndex,
        })}
    `
}