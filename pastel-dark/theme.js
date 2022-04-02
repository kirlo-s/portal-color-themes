const theme = _Blockly.getMainWorkspace().getTheme();

const component = theme.componentStyles

component.workspaceBackgroundColour = "rgb(41, 45, 62,1)"
component.toolboxBackgroundColour = "rgb(33, 36, 50,0.8)"
component.toolboxForegroundColour = "#7F86B3"
component.flyoutBackgroundColour = "#212432"
component.flyoutForegroundColour = "#7F86B3"
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
component.fieldBorderRectColor = "#E8E8E8"
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
    colourPrimary: "#222b2d",
    colourSecondary: "#0a0a0a",
    colourTertiary: "#161d1e",
    hat: "false"
}

block["rule-block-style"] = { 
    colourPrimary: "#8D42F4", 
    colourSecondary: "#6F34C1", 
    colourTertiary: "#6F34C1", 
    hat: "false" 
}

block["condition-block-style"] = { 
    colourPrimary: "#4F58AB", 
    colourSecondary: "#373D77", 
    colourTertiary: "#373D77", 
    hat: "false" 
}

block["value-block-style"] = { 
    colourPrimary: "#34A853", 
    colourSecondary: "#247539", 
    colourTertiary: "#247539", 
    hat: "false" 
}

block["action-block-style"] = { 
    colourPrimary: "#FE9F01", 
    colourSecondary: "#BE7600", 
    colourTertiary: "#BE7600", 
    hat: "false" 
}
// before #FBBA00/#C79503

block["comment-block-style"] = { 
    colourPrimary: "#141414", 
    colourSecondary: "#0a0a0a", 
    colourTertiary: "#141414", 
    hat: "false" 
}

block["variable-block-style"] = { 
    colourPrimary: "#EA4335", 
    colourSecondary: "#B63429", 
    colourTertiary: "#B63429", 
    hat: "false" 
}

block["subroutine-block-style"] = { 
    colourPrimary: "#EF5A29", 
    colourSecondary: "#BC4620", 
    colourTertiary: "#BC4620", 
    hat: "false" 
}

block["control-block-style"] = { 
    colourPrimary: "#4285F4", 
    colourSecondary: "#3469C1", 
    colourTertiary: "#3469C1", 
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
    colour: "#8D42F4"
}

category["values-category"] = {
    colour: "#34A853"
}

category["subroutines-category"] = {
    colour: "#EF5A29"
}

category["actions-category"] = {
    colour: "#FE9F01"
}
category["controls-category"] = {
    colour: "#4285F4"
}


_Blockly.getMainWorkspace().setTheme(theme);