if(theme == 'undefined'){
const theme = _Blockly.getMainWorkspace().getTheme();
}

const component = theme.componentStyles

component.blockDisablePatternFillColor = "rgba(255,255,255,0.5)"
component.blockDisablePatternStrokeColor = "#F8D7DA"

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