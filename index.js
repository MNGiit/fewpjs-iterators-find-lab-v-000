const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = function(wins) {
  // return wins.find( w => w.result === "W");
  let result = wins.find( win => win.result === "W" )
  return result;
}