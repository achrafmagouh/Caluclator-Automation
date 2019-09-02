module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {

    evenOddInput: {
        selector: '//input[@name="evenOddInput"]',
        locateStrategy: 'xpath'
    },
    evenOddBtn: {
        selector:'//button[@name="evenOddButton"]',
        locateStrategy: 'xpath'
    },
    evanoddrslt:{
        selector:'//span[@name="oddResults"]',
        locateStrategy: 'xpath'
    },

    filterObjectsInput: {
        selector: '//input[@name="objectFilterInput"]',
        locateStrategy: 'xpath'
    },
    filterObjectsBtn: {
        selector: '//button[@name="objectFilterButton"]',
        locateStrategy: 'xpath'
    },
    filterObjectRslt: {
        selector: '//span[@name="objectFilterResults"]',
        locateStrategy: 'xpath'
    },

    filterStringInput: {
        selector: '//input[@id="nameFilterInput"]',
        locateStrategy: 'xpath'
    },
    filterStringBtn: {
        selector: '//button[@id="nameFilterButton"]',
        locateStrategy: 'xpath'
    },
    filterStringRslt: {
        selector: '//span[@name="nameFilterResults"]',
        locateStrategy: 'xpath'
    },

    palindromeInput: {
        selector: '//input[@name="palindromeInput"]',
        locateStrategy: 'xpath'
    },
    palindromeBtn:{
        selector: '//button[@name="palindromeButton"]',
        locateStrategy: 'xpath'
    },
    palindromeRslt:{
        selector: '//span[@name="palindromeResults"]',
        locateStrategy: 'xpath'
    },

    sumInput1:{
        selector: '//input[@name="sumInput1"]',
        locateStrategy: 'xpath'
    },
    sumInput2: {
        selector: '//input[@name="sumInput2"]',
        locateStrategy: 'xpath'
    },
    sumAddBtn: {
        selector:'//button[@name="sumButton"]',
        locateStrategy: 'xpath'
    },
    sumRslt: {
        selector:'//span[@name="sumResults"]',
        locateStrategy: 'xpath'
    }
},
}
