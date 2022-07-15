const { app, BrowserWindow } = require("electron")

require('@electron/remote').initialize()

function createWindow() {
    //create browser window
    const win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            enableRemotuModule: true
        }
    })

    win.loadURL("http://172.19.223.175:3000")
}

app.on("ready", createWindow)

//quit when all windows are closed.
app.on("window-all-closed", function(){
    // On OS-X it is common for applications and thei menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", function () {
    // On OS-X it is common to re create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})