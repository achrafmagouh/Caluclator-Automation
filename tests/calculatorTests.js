var calculatorpage = {}
module.exports = {
    beforeEach: browser => {

        calculatorpage = browser.page.calculatorObject()
        calculatorpage.navigate()
        .waitForElementVisible('body', 5000)
        .maximizeWindow()

        },
        after: browser => {
            browser.end()
        },

        "odds and Evens": browser => {
            calculatorpage

        .setValue('@evenOddInput','29')
        .click('@evenOddBtn')
        .expect.element('@evanoddrslt').text.to.contain('[29]')
    

// "Filter Object"
    calculatorpage   

        .setValue('@filterObjectsInput','hairColor')
        .click('@filterObjectsBtn')
        .expect.element('@filterObjectRslt').text.to.contain('[ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
        

// Filter String
calculatorpage
     
        .setValue('@filterStringInput','Maddy')
        .click('@filterStringBtn')
        .expect.element('@filterStringRslt').text.to.contain('"Maddy"')
       

// Palindrome
calculatorpage
     
        .setValue('@palindromeInput','1234321')
        .click('@palindromeBtn')
        .expect.element('@palindromeRslt').text.to.contain('true')
      

// Sum
calculatorpage

     
        .setValue('@sumInput1','4')
        .setValue('@sumInput2','5')
        .click('@sumAddBtn')
        .expect.element('@sumRslt').text.to.contain('9')
      


        
    }      


    }
    
    
