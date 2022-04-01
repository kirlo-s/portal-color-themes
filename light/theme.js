const theme = _Blockly.getMainWorkspace().getTheme();

const component = theme.componentStyles

component.workspaceBackgroundColour = "rgb(248, 249, 250,1)"
component.toolboxBackgroundColour = "rgb(236, 236, 236,1)"
component.toolboxForegroundColour = "#3C4043"
component.flyoutBackgroundColour = ""
component.flyoutForegroundColour = "#3C4043"
component.flyoutOpacity = 0.2
component.scrollbarColour = "#A8A8A8"
component.scrollbarOpacity = 1
component.insertionMarkerColour = "#26ffdf"
component.insertionMarkerOpacity = .3
component.markerColour = "#d0d0d0"
component.cursorColour = "#d0d0d0"
component.selectedGlowColour = "#26ffdf"
component.selectedGlowOpacity = 1
component.replacementGlowOpacity = .5
component.fieldBorderRectColor = "#EBECEC"
component.fieldTextColor = "#767676"
component.fieldDropdownTextColor = "#ffffff"
component.fieldDropDownHighlightColor = "#26ffdf"
component.fieldDropDownTextHighlightColor = "#000000"
component.fieldEditableTextHoverColor = "#26ffdf"
component.wsSearchHighlightCurrentColor = "#26ffdf"
component.wsSearchHighlightGroupColor = "#ffffff"
component.blockDisablePatternFillColor = "rgba(20,20,20,0.66)"
component.blockDisablePatternStrokeColor = "#4f4f4f"
component.blockErrorPatternFillColor = "#141414"
component.blockErrorPatternStrokeColor = "#aa2b3f"
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
    colourPrimary: "#FBBC05", 
    colourSecondary: "#C79503", 
    colourTertiary: "#C79503", 
    hat: "false" 
}

block["comment-block-style"] = { 
    colourPrimary: "#141414", 
    colourSecondary: "#0a0a0a", 
    colourTertiary: "#141414", 
    hat: "false" 
}

block["variable-block-style"] = { 
    colourPrimary: "#EA4335", 
    colourSecondary: "#EA4335", 
    colourTertiary: "#EA4335", 
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
    colour: "#FBBC05"
}
category["controls-category"] = {
    colour: "#4285F4"
}


_Blockly.getMainWorkspace().setTheme(theme);