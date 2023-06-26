class allItems {
    get firstItemTitle() {
        return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > #item_4_title_link > div');
    }
    get firstItemImg() {
        return $('#item_4_img_link > img')
    }
    get firstItemPrice() {
        return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div')
    }
    get firstItemAddButton() {
        return $('#add-to-cart-sauce-labs-backpack')
    }
    get firstItemRemoveButton() {
        return $('#remove-sauce-labs-backpack')
    }
    async firstItemButtonClick() {
        await this.firstItemAddButton.click();
    }
    async firstItemRemoveButtonClick() {
        await this.firstItemRemoveButton.click();
    }
    async firstItemClick() {
        await this.firstItemTitle.click();
    }

    get secondItemTitle() {
        return $('#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.inventory_item_label > #item_0_title_link > div');
    }
    get secondItemImg() {
        return $('#item_0_img_link > img')
    }
    get secondItemPrice() {
        return $('#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.pricebar > div')
    }
    get secondItemAddButton() {
        return $('#add-to-cart-sauce-labs-bike-light')
    }
    get secondItemRemoveButton() {
        return $('#remove-sauce-labs-bike-light')
    }
    async secondItemButtonClick() {
        await this.secondItemAddButton.click();
    }
    async secondItemRemoveButtonClick() {
        await this.secondItemRemoveButton.click();
    }
    async secondItemClick() {
        await this.secondItemTitle.click();
    }


    get thirdItemTitle() {
        return $('#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.inventory_item_label > #item_1_title_link > div');
    }
    get thirdItemImg() {
        return $('#item_1_img_link > img')
    }
    get thirdItemPrice() {
        return $('#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.pricebar > div')
    }
    get thirdItemAddButton() {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }
    get thirdItemRemoveButton() {
        return $('#remove-sauce-labs-bolt-t-shirt')
    }
    async thirdItemButtonClick() {
        await this.thirdItemAddButton.click();
    }
    async thirdItemRemoveButtonClick() {
        await this.thirdItemRemoveButton.click();
    }
    async thirdItemClick() {
        await this.thirdItemTitle.click();
    }

    get fourthItemTitle() {
        return $('#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.inventory_item_label > #item_5_title_link > div');
    }
    get fourthItemImg() {
        return $('#item_5_img_link > img')
    }
    get fourthItemPrice() {
        return $('#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.pricebar > div')
    }
    get fourthItemAddButton() {
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }
    get fourthItemRemoveButton() {
        return $('#remove-sauce-labs-fleece-jacket')
    }
    async fourthItemButtonClick() {
        await this.fourthItemAddButton.click();
    }
    async fourthItemRemoveButtonClick() {
        await this.fourthItemRemoveButton.click();
    }
    async fourthItemClick() {
        await this.fourthItemTitle.click();
    }

    get fifthItemTitle() {
        return $('#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.inventory_item_label > #item_2_title_link > div');
    }
    get fifthItemImg() {
        return $('#item_2_img_link > img')
    }
    get fifthItemPrice() {
        return $('#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.pricebar > div')
    }
    get fifthItemAddButton() {
        return $('#add-to-cart-sauce-labs-onesie')
    }
    get fifthItemRemoveButton() {
        return $('#remove-sauce-labs-onesie')
    }
    async fifthItemButtonClick() {
        await this.fifthItemAddButton.click();
    }
    async fifthItemRemoveButtonClick() {
        await this.fifthItemRemoveButton.click();
    }
    async fifthItemClick() {
        await this.fifthItemTitle.click();
    }


    get sixthItemTitle() {
        return $('#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.inventory_item_label > #item_3_title_link > div');
    }
    get sixthItemImg() {
        return $('#item_3_img_link > img')
    }
    get sixthItemPrice() {
        return $('#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > div')
    }
    get sixthItemAddButton() {
        return $('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    }
    get sixthItemRemoveButton() {
        return $('[id="remove-test.allthethings()-t-shirt-(red)"]')
    }
    async sixthItemButtonClick() {
        await this.sixthItemAddButton.click();
    }
    async sixthItemRemoveButtonClick() {
        await this.sixthItemRemoveButton.click();
    }
    async sixthItemClick() {
        await this.sixthItemTitle.click();
    }
}

export default new allItems();