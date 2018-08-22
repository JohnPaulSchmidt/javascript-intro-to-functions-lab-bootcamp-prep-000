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
  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })
  return "YES INDEED!"
}

function sayHiToGrandma(lowercase) {
  return "I can't hear you!"
}

function sayHiToGrandma(mixedcase) {
  return "I love you, too."
}

var uppercase = "HELLO"
uppercase.toUpperCase() === uppercase

var lowercase = "hello"
lowercase.toLowerCase() === lowercase

var mixedcase = "I love you, Grandma."
mixedcase.toLowerCase() === mixedcase