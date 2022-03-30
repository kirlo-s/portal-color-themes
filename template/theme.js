const theme = _Blocky.getMainWorkspace().getheme();

const component = theme.componentStyles

component.workspaceBackgroundColour = "rgba(0,0,0,1)"
component.toolboxBackgroundColour = "rgba(0,0,0,1)"

_Blocky.getMainWorkspace().setTheme(theme);