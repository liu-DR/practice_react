const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
let mainWindow = null;
const isDev = process.env.NODE_ENV === 'development'


//判断命令行脚本的第二参数是否含--debug
const debug = /--debug/.test(process.argv[2]);
function makeSingleInstance () {
    if (process.mas) return;
    app.requestSingleInstanceLock();
    app.on('second-instance', () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore()
            mainWindow.focus()
        }
    })
}

const createWindow = () => {
    mainWindow = new BrowserWindow({
        show: false,
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            allowRunningInsecureContent: true
        }
    })

    mainWindow.setMenu(null);

    globalShortcut.register('CommandOrControl+F12', () => {
        console.log(__dirname,'__dirname', __filename,'__filename');
        if(mainWindow.isFocused()) {
            mainWindow.webContents.openDevTools()
        }
    });

    mainWindow.on('ready-to-show', () => {
        if(!mainWindow) {
            throw new Error('BrowserWindow is not defined')
        }
        // mainWindow.maximize();
        mainWindow.show();
    });

    if(!isDev) {
        mainWindow.loadURL("http://localhost:8085/");
    } else {
        mainWindow.loadURL(path.join('file://', __dirname, '/build/index.html'));
    }
    

    //接收渲染进程的信息
    const ipc = require('electron').ipcMain;
    ipc.on('min', function () {
        mainWindow.minimize();
    });
    ipc.on('max', function () {
        mainWindow.maximize();
    });
    ipc.on("login",function () {
        mainWindow.maximize();
    });
    
    //如果是--debug 打开开发者工具，窗口最大化，
    if (debug) {
        mainWindow.webContents.openDevTools();
        require('devtron').install();
    }

    mainWindow.on('closed', () => {
        mainWindow.destroy();
        mainWindow = null
    })
}

makeSingleInstance();

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});