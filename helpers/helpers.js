const helpers = {
    async waitForVisible(element) {
        const EC = protractor.ExpectedConditions;
        return browser.driver.wait(EC.visibilityOf(element), 10000);
    },

    async waitForNotVisible(element) {
        const EC = protractor.ExpectedConditions;
        return browser.driver.wait(EC.invisibilityOf(element));
    }
};

module.exports = helpers;
