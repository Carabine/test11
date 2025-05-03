class WikipediaPage {
    constructor(page) {
        this.page = page;
        this.searchInput = 'input[name="search"]';
        this.heading = 'h1';
        this.body = 'body';
    }

    async open(url) {
        await this.page.goto(url);
    }

    async search(text) {
        await this.page.fill(this.searchInput, text);
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState();
    }

    async getHeadingText() {
        return await this.page.textContent(this.heading);
    }

    async getTitle() {
        return await this.page.title();
    }

    async getBodyText() {
        return await this.page.textContent(this.body);
    }
}

module.exports = { WikipediaPage };
