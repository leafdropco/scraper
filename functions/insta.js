const puppeteer = require(`puppeteer`);

class Insta {

    constructor(path) {
        this.path = path,
        this.host = 'https://instagram.com/',
        this.insta = {url: `${this.host}${this.path}`};
    }

    async findPostImages() {
        const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']})
        const page = await browser.newPage()
        await page.goto(this.insta.url, {waitUntil: `networkidle0`});
        await page.waitForSelector('div.KL4Bh > img');

        const postPics = await page.evaluate(() => {
            const images = document.querySelectorAll(`a > div > div.KL4Bh > img`)
            const imgArr = [].map.call(images, img => img.src)
            return imgArr;
        })

        await page.close();
        await browser.close();
        return postPics;
    }

    async analyze() {
        const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox']})
        const page = await browser.newPage()
        await page.goto(this.insta.url, {waitUntil: `networkidle0`});
        await page.waitForSelector('span.g47SY');
        await page.waitForSelector('div.eLAPa');
        await page.waitFor(2000);

        const postCount = 6;

        // GET THE USERS FOLLOWER COUNT
        const myFollowersText = await page.evaluate(() => {
            const el = document.querySelectorAll('span.g47SY')[1];
            return el.getAttribute('title');
        })
        this.insta.followers = myFollowersText;

        // GET THE USERS FOLLOWING COUNT
        const imFollowingText = await page.evaluate(() => {
            return document.querySelectorAll('span.g47SY')[2].textContent;
        })
        this.insta.following = imFollowingText;

        // GET THE USERS POST COUNT
        const postsText = await page.evaluate(() => {
            return document.querySelectorAll('span.g47SY')[0].textContent;
        })
        this.insta.posts = postsText;

        // WAIT FOR 1ST POST SELECTOR TO BE FOUND
        const clickPost = await page.waitForSelector('div.eLAPa');

        // CLICK 1ST POST
        await clickPost.click();
        
        await page.waitFor(2000);

        await page.close();
        await browser.close();
        return this.insta;
    }

}

module.exports = Insta;
