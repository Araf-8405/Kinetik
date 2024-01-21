import test,{expect } from '../fixtures/pomFixture';

test("verify that a order successfully  placed", async ({ Registration, page, browser,testData,  }) => {

    await test.step("Navigate to Home Screen", async () => {
        await page.goto('', { waitUntil: 'domcontentloaded' })
    })
    await test.step("Verify Successfully navigate to Home Screen & Add to cart a product", async () => {
        await Registration.verifyHomePageISVisible()
        await Registration.clickOnAdddToCartButton()
        await Registration.clickOnContinueShoppingButton()
        await Registration.clickOnCartButton()
    })
    await test.step("Verify Successfully navigate to Cart Screen & Add to cart a product", async () => {
        await Registration.verifyCartPageIsVisible()
        await Registration.clickOnProceedToCheckOutButton()
    })  
    await test.step("Goto Regitration page", async () => {
        await Registration.clickOnRegisterBtnButton() 
        await Registration.inputName("Kinetik")
        await Registration.inputEmailAddress(await testData.generateRandomName())
        await Registration.clickOnSignUpBtn()
    }) 
    await test.step("ENTER ACCOUNT INFORMATION", async () => {
    // ENTER ACCOUNT INFORMATION
        await Registration.inputPassword ()
        await Registration.inputFirstName(await testData.getFirstname())
        await Registration.inputLastName(await testData.getLastname())
        await Registration.inputAddress()
        await Registration.inputState()
        await Registration.inputCity() 
        await Registration.inputZipcode()
        await Registration.inputMobileNumber(testData.getRandomPhoneNumber())
        await Registration.clickOnCreateAccountBtn()
    })
    await test.step("account crated page", async () => {
    // account crated page
        await Registration.verifyAccountCreatedeIsVisible()
        await Registration.clickOnContinueButton()
    })
    await test.step("Go to home page again", async () => {
    // home page
        await Registration.verifyUsernameIsVisible()
        await Registration.clickOnCartButton()
    })
    // Cart page
        await Registration.clickOnProceedToCheckOutButton()
    await test.step("Go to Checkout page & Verify adress & Order item", async () => {
    // Checkout page
        await Registration.verifyAddressDetailsIsVisible()
        await Registration.verifyOrderItemIsVisible()
        await Registration.inputDescription( testData.getRandomText(150))
        await Registration.clickOnPlaceOrderBtn()
    }) 
    await test.step("Make payment & Place Order", async () => {
    // Payment Page
        await Registration.inputNameonCard("Kinetik")
        await Registration.inputCardNumber()
        await Registration.inputCardCVCNumber()
        await Registration.inputCardExpiration()
        await Registration.clickOnPayAndConfirmOrderBtn()
    })    
    await test.step("Verify Order is Successfully placed", async () => {
// ORDER PLACED! Page
        await Registration.verifyOrderconfirmationMsgIsVisible()
    })
})