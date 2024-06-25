const assert = require('chai').assert;

describe('Image Resizer App', () => {
    it('should open the app and check the title', () => {
        browser.url('/');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Image Resizer');
    });

    it('should load the main page and check elements', () => {
        const header = $('#header');
        const inputFile = $('#input-file');
        const resizeButton = $('#resize-btn');

        assert.isTrue(header.isDisplayed());
        assert.isTrue(inputFile.isDisplayed());
        assert.isTrue(resizeButton.isDisplayed());
    });

    it('should resize an image', () => {
        const inputFile = $('#input-file');
        const resizeButton = $('#resize-btn');
        
        inputFile.setValue('/path/to/test/image.jpg');
        resizeButton.click();

        const successMessage = $('#success-msg');
        browser.waitUntil(() => successMessage.isDisplayed(), {
            timeout: 5000,
            timeoutMsg: 'expected success message to be displayed after 5s'
        });

        assert.isTrue(successMessage.isDisplayed());
    });
});
