const theme = _Blockly.getMainWorkspace().getTheme();

const component = theme.componentStyles



const block = theme.blockStyles


block["variable-block-style"] = { 
    colourPrimary:"#ff0000",
    colourSecondary:"#00ff00",
    colourTertiary:"#0000ff",
    hat:"true"
    }

const category = theme.categoryStyles

category["rules-category"] = {
    colour: "#000000"
}


_Blockly.getMainWorkspace().setTheme(theme);