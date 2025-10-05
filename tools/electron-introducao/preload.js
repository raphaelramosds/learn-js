/**
 * Using Preload Scripts
 * Reference: https://www.electronjs.org/docs/latest/tutorial/tutorial-preload
 */
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
    // we can also expose variables, not just functions
})