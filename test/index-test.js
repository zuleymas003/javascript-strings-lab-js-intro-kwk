/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})

it('Uses the greeting variable and writes to the HTML page with the answer.', function() {
  expect(writeGreetingToDocument).toEqual(`document.getElementById('greeting').innerHTML = greeting;`)
})

it('Logs custom celebration to the console.', function() {
  expect(consoleCelebration).toEqual(`console.log(customCelebration);`)
})

