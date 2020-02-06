class BasePage {

    async getTextByLocator(locator) {
        const elm = await element(locator);
        await this.waitForVisible(elm);
        return elm.getText();
    }

    async setTextByLocator(elm, text) {
        await helpers.waitForVisible(elm);
        await elm.clear();
        await elm.sendKeys(text);
    }
}

module.exports = BasePage;
