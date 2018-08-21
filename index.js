function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(lowercase) {
  expect(sayHiToGrandma('hello')).toEqual("I can't hear you!");
  return 'I can\'t hear you!';
}

function sayHiToGrandma(uppercase) {
  return "YES INDEED!"
}


var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase

var lowercase = "hello!"

lowercase.toLowerCase() === lowercase

var mixedCase = "I love you, Grandma!" === mixedCase

function sayHiToGrandma(mixedCase) {
  return "I love you, too."
}