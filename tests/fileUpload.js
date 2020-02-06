const DownloadPage = require('../pages/downloadPage');

describe('Upload', function () {
    const downloadPage = new DownloadPage();
    const url = 'https://the-internet.herokuapp.com/upload';
    const nameFile = 'test.txt';

    it('upload file', async () => {
        await browser.get(url);
        await downloadPage.downloadFile(__dirname + '/' + nameFile);

        const statusFile = await downloadPage.checkDownloadFile(nameFile);
        expect(statusFile).to.equal(true);
    });
});
