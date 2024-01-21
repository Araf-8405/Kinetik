import {expect,Page} from "@playwright/test";
export default class register{

    private PageElements={
        policyCheckbox:"//input[@type='checkbox']",
        nameInputField:"//input[@placeholder='Name']",
        nameonCardInputField:"//input[@data-qa='name-on-card']",
        cardNumber:"//input[@data-qa='card-number']",
        cardCvcNumber:"//input[@data-qa='cvc']",
        expirationMM:"//input[@data-qa='expiry-month']",
        expirationYYYY:"//input[@data-qa='expiry-year']",
        lastNameInputField:"//input[@data-qa='last_name']",
        firstNameInputField:"//input[@data-qa='first_name']",
        addtressInputField:"//input[@data-qa='address']",
        stateInputField:"//input[@data-qa='state']",
        cityInputField:"//input[@data-qa='city']",
        zipcodeInputField:"//input[@data-qa='zipcode']",
        mobileNumberInputField:"//input[@data-qa='mobile_number']",
        passwordInputField:"//input[@data-qa='password']",
        emailAddressInputField:"(//input[@placeholder='Email Address'])[2]",
        descriptionInputField:"//div[@id='ordermsg']//textarea[1]",
        signUpBtn:"//button[text()='Signup']",
        createAccountBtn:"//button[@data-qa='create-account']",
        placeOrderBtn:"//a[contains(text(),'Place Order')]",
        payAndConfirmOrderBtn:"//button[@data-qa='pay-button']",
        homeBtn:"//a[contains(text(),'Home')]",
        hoverOnproduct:"(//div[@class='productinfo text-center']//img)[1]",
        addToCartBtn:".btn.btn-default.add-to-cart",
        cartBtn:"//a[contains(text(),'Cart')]",
        accountCreatedText:"//b[text()='Account Created!']",
        usernameText:"//i[@class='fa fa-user']/following-sibling::b[1]",
        orderConfirmationMsg:"//p[text()='Congratulations! Your order has been confirmed!']",
        addressDetails:"(//li[@class='address_address1 address_address2'])[2]",
        orderItem:"//a[contains(text(),'Blue Top')]",
        continueShoppingButton:"//button[text()='Continue Shopping']",
        registerBtn:"//u[text()='Register / Login']",
        proceedToCheckOutBtn:"//a[contains(text(),'Proceed To Checkout')]",
        continueButton:"//a[contains(text(),'Continue')]",
    }
    constructor(public page:Page){

    }
    
    async verifyHomePageISVisible() {
        const ele = this.page.locator(this.PageElements.homeBtn)
        try {
                await expect(ele).toHaveCSS('color', 'rgb(255, 165, 0)')
                await this.page.waitForTimeout(3000)
        } catch (error) {
                throw new Error(`Home page is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnAdddToCartButton() {
        const ele = this.page.locator(this.PageElements.hoverOnproduct)
        const ele1=this.page.locator(this.PageElements.addToCartBtn).first()
        try {
                await ele.hover()
                await this.page.waitForTimeout(1000)
                await ele1.click({ button: "left", delay: 1000 ,force:true})
                await this.page.waitForTimeout(3000)
        } catch (error) {
                throw new Error(`Add to cart button is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnContinueShoppingButton() {
        const ele = this.page.locator(this.PageElements.continueShoppingButton)

        try {

                await ele.click({ button: "left", delay: 1000 ,force:true})
                await this.page.waitForTimeout(1000)
        } catch (error) {
                throw new Error(`continue Shopping button is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnCartButton() {
        const ele = this.page.locator(this.PageElements.cartBtn)

        try {

                await ele.click({ button: "left", delay: 1000 ,force:true})
                await this.page.waitForTimeout(3000)
        } catch (error) {
                throw new Error(`Cart button is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async verifyCartPageIsVisible() {
        const ele = this.page.locator(this.PageElements.cartBtn)
        try {
                await expect(ele).toHaveCSS('color', 'rgb(255, 165, 0)')
                await this.page.waitForTimeout(3000)
        } catch (error) {
                throw new Error(`Cart page is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async verifyAccountCreatedeIsVisible() {
        const ele = this.page.locator(this.PageElements.accountCreatedText)
        try {
                await expect(ele).toContainText('Account Created!')
                await this.page.waitForTimeout(3000)
        } catch (error) {
                throw new Error(`Account Created msg is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async verifyUsernameIsVisible() {
        const ele = this.page.locator(this.PageElements.usernameText)
        try {
                await expect(ele).toContainText('Kinetik')
                await this.page.waitForTimeout(3000)
        } catch (error) {
                throw new Error(`Username Text is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async verifyOrderconfirmationMsgIsVisible() {
        const ele = this.page.locator(this.PageElements.orderConfirmationMsg)
        try {
                await expect(ele).toContainText('Congratulations! Your order has been confirmed!')
                await this.page.waitForTimeout(3000)
        } catch (error) {
                throw new Error(`Order confirmation Text is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async verifyAddressDetailsIsVisible() {
        const ele = this.page.locator(this.PageElements.addressDetails)
        try {
                await expect(ele).toContainText('2999 Tuscarora Trail, Middleburg, United States')
                await this.page.waitForTimeout(3000)
        } catch (error) {
                throw new Error(`Address Details Text is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async verifyOrderItemIsVisible() {
        const ele = this.page.locator(this.PageElements.orderItem)
        try {
                await expect(ele).toContainText('Blue Top')
                await this.page.waitForTimeout(3000)
        } catch (error) {
                throw new Error(` Order Item is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnContinueButton() {
        const ele = this.page.locator(this.PageElements.continueButton)

        try {
                await ele.click({ button: "left", delay: 1000 ,force:true})
                await this.page.waitForTimeout(3000)
        } catch (error) {
                throw new Error(`Continue button is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnProceedToCheckOutButton() {
        const ele = this.page.locator(this.PageElements.proceedToCheckOutBtn)

        try {
                await ele.click({ button: "left", delay: 1000 ,force:true})
                await this.page.waitForTimeout(3000)
        } catch (error) {
                throw new Error(`Proceed To CheckOut button is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnRegisterBtnButton() {
        const ele = this.page.locator(this.PageElements.registerBtn)

        try {

                await ele.click({ button: "left", delay: 1000 ,force:true})
                await this.page.waitForTimeout(3000)
        } catch (error) {
                throw new Error(`Register/Login button is not Successfully visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnPolicyCheckbox() {
        const ele = this.page.locator(this.PageElements.policyCheckbox)
        try {
            await ele.click({ button: "left", delay: 1000 ,force:true})
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            throw new Error(` Policy Checkbox Is Not Visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnSignUpBtn() {
        const ele =this.page.locator(this.PageElements.signUpBtn)
        try {

            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`SignUp Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnCreateAccountBtn() {
        const ele =this.page.locator(this.PageElements.createAccountBtn)
        try {

            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Create Account Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnPlaceOrderBtn() {
        const ele =this.page.locator(this.PageElements.placeOrderBtn)
        try {

            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Place Order Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnPayAndConfirmOrderBtn() {
        const ele =this.page.locator(this.PageElements.payAndConfirmOrderBtn)
        try {

            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Pay And Confirm Order Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }
    async inputDescription(msg: string) {
        const ele = this.page.locator(this.PageElements.descriptionInputField)
        try {
            await ele.scrollIntoViewIfNeeded()
            await ele.fill(msg)
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(` Description Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }
    async inputEmailAddress(email: string) {
        const ele = this.page.locator(this.PageElements.emailAddressInputField)
        try {
            await ele.fill(email)
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(` Email Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }
    async inputNameonCard(firstName: string) {
        const ele = this.page.locator(this.PageElements.nameonCardInputField)
        try {
            await ele.fill(firstName)
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Name on Card Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }
    async inputCardNumber() {
        const ele = this.page.locator(this.PageElements.cardNumber)
        try {
            await ele.fill("4242 4242 4242 4242")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(` Card Number Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }
    async inputCardCVCNumber() {
        const ele = this.page.locator(this.PageElements.cardCvcNumber)
        try {
            await ele.fill("424")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(` Card CVC Number Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }
    async inputCardExpiration() {
        const ele = this.page.locator(this.PageElements.expirationMM)
        const ele1 = this.page.locator(this.PageElements.expirationYYYY)
        try {
            await ele.fill("06")
            await this.page.waitForTimeout(1000)
            await ele1.fill("2030")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(` Card Expiration Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }
    async inputName(firstName: string) {
        const ele = this.page.locator(this.PageElements.nameInputField)
        try {
            await ele.fill(firstName)
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Name Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }
    async inputFirstName(lastName: string) {
        const ele = this.page.locator(this.PageElements.firstNameInputField)
        try {
            await ele.fill(lastName)
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(` First Name Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }
    async inputLastName(lastName: string) {
        const ele = this.page.locator(this.PageElements.lastNameInputField)
        try {
            await ele.fill(lastName)
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(` Last Name Input Field Is Not Visible | Could not find locator:"${error}"`)
        }
    }

        async inputAddress() {
            const ele = this.page.locator(this.PageElements.addtressInputField)
            try {
                await ele.fill("2999 Tuscarora Trail, Middleburg, United States")
                await this.page.waitForTimeout(3000)
            } catch (error) {
                throw new Error(` Address Input Field Is Not Visible | Could not find locator:"${error}"`)
            }
    
        }
        async inputState() {
            const ele = this.page.locator(this.PageElements.stateInputField)
            try {
                await ele.fill("Texas")
                await this.page.waitForTimeout(3000)
            } catch (error) {
                throw new Error(` State Input Field Is Not Visible | Could not find locator:"${error}"`)
            }
    
        }
        async inputCity() {
            const ele = this.page.locator(this.PageElements.cityInputField)
            try {
                await ele.fill("Middleburg")
                await this.page.waitForTimeout(3000)
            } catch (error) {
                throw new Error(` City Input Field Is Not Visible | Could not find locator:"${error}"`)
            }
    
        }
        async inputZipcode() {
            const ele = this.page.locator(this.PageElements.zipcodeInputField)
            try {
                await ele.fill("75240")
                await this.page.waitForTimeout(3000)
            } catch (error) {
                throw new Error(` Zipcode Input Field Is Not Visible | Could not find locator:"${error}"`)
            }
    
        }
        async inputMobileNumber(number:string) {
            const ele = this.page.locator(this.PageElements.mobileNumberInputField)
            try {
                await ele.fill(number)
                await this.page.waitForTimeout(3000)
            } catch (error) {
                throw new Error(` Mobile Number Input Field Is Not Visible | Could not find locator:"${error}"`)
            }
    
        }
        async inputPassword () {
            const ele = this.page.locator(this.PageElements.passwordInputField)
            try {
                await ele.fill("123456")
                await this.page.waitForTimeout(3000)
            } catch (error) {
                throw new Error(` Password Input Field Is Not Visible | Could not find locator:"${error}"`)
            }
    
        }
    
}
