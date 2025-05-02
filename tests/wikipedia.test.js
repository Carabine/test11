import { test, expect } from '@playwright/test';
import { WikipediaPage } from '../pages/WikipediaPage.js';

test.describe('Wikipedia UI Tests with POM', () => {
    let wikipedia;

    test.beforeEach(async ({ page }) => {
        wikipedia = new WikipediaPage(page);
    });

    test('Searches for a term and checks heading', async () => {
        await wikipedia.gotoHome();
        await wikipedia.search('Automation');

        const heading = await wikipedia.getHeadingText();
        expect(heading).toMatch(/Automation/i);
    });

    test('Should load the correct content for JavaScript page', async () => {
        await wikipedia.gotoArticle('JavaScript');

        const title = await wikipedia.getTitle();
        const body = await wikipedia.getBodyText();

        expect(title).toContain('JavaScript');
        expect(body).toContain('JavaScript is a high-level');
    });
});
