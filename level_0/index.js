const puppeteer = require('puppeteer') // import the puppeteer module

// asynchronous function (similar to function pointer in C)
// IIFE (Immediately Invoked Function Expression)
;(async function(){
  const browser = await puppeteer.launch({args: ['--no-sandbox']}) // launch browser

  const arr = new Array(128).fill(new Array(8).fill(1)) // create an array of 128 array of 8 elements
  
  // Iterate through the big array (opens 8 pages at a time)
  for (elem of arr) {
    await cheat(elem, browser)
    console.log(arr.indexOf(elem))
  }

  await browser.close() // close browser
})()

// Iterating function for each array inside the array
// For each element of smolArr, return the async function
// The async executes the batch
// Return when all promises are resolved
const cheat = (smolArr, myBrowser) => {
  return Promise.all(smolArr.map(async () => {
    const page = await myBrowser.newPage() // open an empty page
    await page.goto('http://158.69.76.135/level0.php') // goto the desired URL
    await page.type('body > form > input[type=text]:nth-child(1)', '652') // write my id in the field
    await page.click('body > form > input[type=submit]:nth-child(2)') // click on 'submit' button
    await page.close()
  }))
}

// Same function, but sequentially
const cheatSeq = async (smolArr, myBrowser) => {
  for (elem of smolArr) {
    const page = await myBrowser.newPage() // open an empty page
    await page.goto('http://158.69.76.135/level0.php') // goto the desired URL
    await page.type('body > form > input[type=text]:nth-child(1)', '652') // write my id in the field
    await page.click('body > form > input[type=submit]:nth-child(2)') // click on 'submit' button
    await page.close()
  }
}
