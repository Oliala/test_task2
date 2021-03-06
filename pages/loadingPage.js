class LoadingPage  extends BasePag {
    constructor() {
        this.loadingBar = by.id('loading');
        this.resultDownload = by.css('#finish h4');
        this.startButton = by.buttonText('Start');
    }

    async loadingInformation() {
        const elm = await element(this.loadingBar);
        const button = await element(this.startButton);
        await button.click();
        await helpers.waitForNotVisible(elm);
    }

    async getLoadedInformation() {
        const elm = await element(this.resultDownload);
        await helpers.waitForVisible(elm);
        return elm.getText();
    }

    async isPresentStatusLoadingInformation() {
        const elm = await element(this.resultDownload);
        return elm.isPresent();
    }
}

module.exports = LoadingPage;
