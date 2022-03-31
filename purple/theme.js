const theme = _Blockly.getMainWorkspace().getTheme();

const component = theme.componentStyles

component.workspaceBackgroundColour = "rgb(41, 45, 62,1)"
component.toolboxBackgroundColour = "rgb(40, 44, 61,1)"
component.toolboxForegroundColour = "#6C739A"
component.flyoutBackgroundColour = "#292D3E"
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
component.fieldDropDownTextHighlightColor = "#ffffff"
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
    colourPrimary: "#C072D8", 
    colourSecondary: "#9257A4", 
    colourTertiary: "#9257A4", 
    hat: "false" 
}

block["condition-block-style"] = { 
    colourPrimary: "#0a4f78", 
    colourSecondary: "#0a0a0a", 
    colourTertiary: "#003a5d", 
    hat: "false" 
}

block["value-block-style"] = { 
    colourPrimary: "#95C174", 
    colourSecondary: "#6D8E55", 
    colourTertiary: "#6D8E55", 
    hat: "false" 
}

block["action-block-style"] = { 
    colourPrimary: "#D29B62", 
    colourSecondary: "#9F754A", 
    colourTertiary: "#9F754A", 
    hat: "false" 
}

block["comment-block-style"] = { 
    colourPrimary: "#141414", 
    colourSecondary: "#0a0a0a", 
    colourTertiary: "#141414", 
    hat: "false" 
}

block["variable-block-style"] = { 
    colourPrimary: "#C33321", 
    colourSecondary: "#0a0a0a", 
    colourTertiary: "#902518", 
    hat: "false" 
}

block["subroutine-block-style"] = { 
    colourPrimary: "#622c07", 
    colourSecondary: "#0a0a0a", 
    colourTertiary: "#461e02", 
    hat: "false" 
}

block["control-block-style"] = { 
    colourPrimary: "#58A3E2", 
    colourSecondary: "#447EAF", 
    colourTertiary: "#447EAF", 
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
    colour: "#C072D8"
}

category["values-category"] = {
    colour: "#95C174"
}

category["subroutines-category"] = {
    colour: "#bd6222"
}

category["actions-category"] = {
    colour: "#D29B62"
}
category["controls-category"] = {
    colour: "#58A3E2"
}


_Blockly.getMainWorkspace().setTheme(theme);
