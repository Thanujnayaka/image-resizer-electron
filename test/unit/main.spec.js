const assert = require('chai').assert;
const main = require('../../src/main');

describe('Main Process', () => {
    it('should create a browser window', () => {
        const win = main.createWindow();
        assert.isNotNull(win);
    });

    it('should load the index.html file', () => {
        const win = main.createWindow();
        const url = win.webContents.getURL();
        assert.match(url, /index\.html$/);
    });
});
