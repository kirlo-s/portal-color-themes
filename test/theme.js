const theme = _Blockly.getMainWorkspace().getheme();

const component = theme.componentStyles

component.workspaceBackgroundColour = "rgba(0,0,0,1)"
component.toolboxBackgroundColour = "rgba(255,255,255,0.5)"

_Blockly.getMainWorkspace().setTheme(theme);