if(theme == 'undefined'){
const theme = _Blockly.getMainWorkspace().getTheme();
}

const component = theme.componentStyles

component.fieldDropDownTextColor	 = "#161d1e"
component.fieldDropDownHighlightColor	 = "#ffffff"
component.fieldDropDownTextHighlightColor = "#F0F8FF"

const block = theme.blockStyles

block["mod-block-style"] = { 
    colourPrimary:"#ffffff",
    colourSecondary:"#0a0a0a",
    colourTertiary:"#161d1e",
    hat:"false"
    }

const category = theme.categoryStyles

category["rules-category"] = {
    colour: "#847000"
}


_Blockly.getMainWorkspace().setTheme(theme);