const theme = _Blockly.getMainWorkspace().getTheme();

const component = theme.componentStyles

component.workspaceBackgroundColour = "rgb(41, 45, 62,1)"
component.toolboxBackgroundColour = "rgb(33, 36, 50,0.8)"
component.toolboxForegroundColour = "#6C739A"
component.flyoutBackgroundColour = "#212432"
component.flyoutForegroundColour = "#6C739A"
component.flyoutOpacity = 0.2
component.scrollbarColour = "#5C468F"
component.scrollbarOpacity = 0.6
component.insertionMarkerColour = "#26FFFB"
component.insertionMarkerOpacity = .3
component.markerColour = "#d0d0d0"
component.cursorColour = "#d0d0d0"
component.selectedGlowColour = "#26FFFB"
component.selectedGlowOpacity = 1
component.replacementGlowOpacity = .5
component.fieldBorderRectColor = "#a8a8a8"
component.fieldTextColor = "#000000"
component.fieldDropdownTextColor = "#ffffff"
component.fieldDropDownHighlightColor = "#26FFFB"
component.fieldDropDownTextHighlightColor = "#000000"
component.fieldEditableTextHoverColor = "#26FFFB"
component.wsSearchHighlightCurrentColor = "#26FFFB"
component.wsSearchHighlightGroupColor = "#ffffff"
component.blockDisablePatternFillColor = "rgba(20,20,20,0.66)"
component.blockDisablePatternStrokeColor = "#4f4f4f"
component.blockErrorPatternFillColor = "#141414"
component.blockErrorPatternStrokeColor = "#F92BA7"
component.blockErrorHighlightStrokeColor = "#ffe32b"
component.blockDeprecatedPatternFillColor = "#383629"
component.blockDeprecatedPatternStrokeColor = "#a6aa2b"
component.blockDeprecatedHighlightStrokeColor = "#ffe32b"
component.ruleBlockRuleTextColor = "#ffffff"
component.ruleBlockRuleConnectionColor = "#e882ff"
component.ruleBlockConditionTextColor = "#ffffff"
component.ruleBlockConditionConnectionColor = "#0a4f78"
component.ruleBlockActionTextColor = "#ffffff"
component.ruleBlockActionConnectionColor = "#b7a11c"
component.subroutineBlockSubroutineTextColor = "#ed7f33"
component.rulesCategoryColor = "#b45ac7"
component.subroutinesCategoryColor = "#8a4211"
component.valuesCategoryColor = "#1d8c58"
component.actionsCategoryColor = "#b7a11c"
component.controlsCategoryColor = "#2a90d0"


const block = theme.blockStyles

block["mod-block-style"] = {
    colourPrimary: "#737373",
    colourSecondary: "#404040",
    colourTertiary: "#404040",
    hat: "false"
}

block["rule-block-style"] = { 
    colourPrimary: "#004EAF", 
    colourSecondary: "#00377C", 
    colourTertiary: "#00377C", 
    hat: "false" 
}

block["condition-block-style"] = { 
    colourPrimary: "#0a4f78", 
    colourSecondary: "#0a0a0a", 
    colourTertiary: "#003a5d", 
    hat: "false" 
}

block["value-block-style"] = { 
    colourPrimary: "#057855", 
    colourSecondary: "#024530", 
    colourTertiary: "#024530", 
    hat: "false" 
}

block["action-block-style"] = { 
    colourPrimary: "#FFA500", 
    colourSecondary: "#CC8400", 
    colourTertiary: "#CC8400", 
    hat: "false" 
}

block["comment-block-style"] = { 
    colourPrimary: "#141414", 
    colourSecondary: "#0a0a0a", 
    colourTertiary: "#141414", 
    hat: "false" 
}

block["variable-block-style"] = { 
    colourPrimary: "#CC5656", 
    colourSecondary: "#994040", 
    colourTertiary: "#994040", 
    hat: "false" 
}

block["subroutine-block-style"] = { 
    colourPrimary: "#622c07", 
    colourSecondary: "#0a0a0a", 
    colourTertiary: "#461e02", 
    hat: "false" 
}

block["control-block-style"] = { 
    colourPrimary: "#00A5DC", 
    colourSecondary: "#007EA9", 
    colourTertiary: "#007EA9", 
    hat: "false" 
}

block["control-block-alt-style"] = { 
     colourPrimary: "#2b1b71", 
     colourSecondary: "#0a0a0a", 
     colourTertiary: "#2b1b71", 
     hat: "false" 
}


category = theme.categoryStyles

category["rules-category"] = {
    colour: "#004EAF"
}

category["values-category"] = {
    colour: "#057855"
}

category["subroutines-category"] = {
    colour: "#bd6222"
}

category["actions-category"] = {
    colour: "#FFA500"
}
category["controls-category"] = {
    colour: "#00A5DC"
}


_Blockly.getMainWorkspace().setTheme(theme);
