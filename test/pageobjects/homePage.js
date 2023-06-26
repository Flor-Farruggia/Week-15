class homeHeaderFooter {
    get logoTitle() {
        return $('#header_container > div.primary_header > div.header_label > div');
    }
    get cartIcon() {
        return $('#shopping_cart_container > a');
    }
    get twitterIcon() {
        return $('#page_wrapper > footer > ul > li.social_twitter > a');
    }
    get facebookIcon() {
        return $('#page_wrapper > footer > ul > li.social_facebook > a');
    }
    get linkedinIcon() {
        return $('#page_wrapper > footer > ul > li.social_linkedin > a');
    }
    async cartIconClick() {
        await this.cartIcon.click();
    }
}
export default new homeHeaderFooter();
