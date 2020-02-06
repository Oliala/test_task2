class DownloadPage extends BasePag {
    constructor() {
        this.fileUploadInput = by.id('file-upload');
        this.uploadButton = by.id('file-submit');
        this.uploadedFiles = by.id('uploaded-files');
    }

    async downloadFile(path) {
        const elm = await element(this.fileUploadInput);
        const button = await element(this.uploadButton);
        await this.setTextByLocator(elm, path);
        await button.click();
    }

    async checkDownloadFile(nameFile) {
        const elm = await element(this.uploadedFiles);
        await helpers.waitForVisible(elm);
        const nameUploadFile = await elm.getText();
        if(nameFile === nameUploadFile) {
            return true;
        } else {
            throw new Error('Invalid file name');
        }
    }
}

module.exports = DownloadPage;
