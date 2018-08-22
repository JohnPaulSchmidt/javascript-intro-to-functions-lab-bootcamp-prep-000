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

function sayHiToGrandma(uppercase) {
  return uppercase
}

function sayHiToGrandma(lowercase) {
  console.log("I can't hear you!")
}


var uppercase = HELLO
uppercase.toUpperCase() === uppercase

var lowercase = "hello"
lowercase.toLowerCase() === lowercase

var mixedcase = "I love you, Grandma."
mixedcase.toLowerCase() === mixedcase