export class WikipediaPage {
    constructor(page) {
        this.page = page;
        this.searchInput = 'input[name="search"]';
        this.heading = '#firstHeading';
        this.body = 'body';
    }

    async gotoHome() {
        await this.page.goto('https://www.wikipedia.org/');
    }

    async gotoArticle(articleSlug) {
        await this.page.goto(`https://en.wikipedia.org/wiki/${articleSlug}`);
    }

    async search(term) {
        await this.page.fill(this.searchInput, term);
        await this.page.keyboard.press('Enter');
        await this.page.waitForSelector(this.heading);
    }

    async getHeadingText() {
        return this.page.innerText(this.heading);
    }

    async getTitle() {
        return this.page.title();
    }

    async getBodyText() {
        return this.page.textContent(this.body);
    }
}
