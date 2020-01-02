const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = function(wins) {
  // return wins.find( w => w.result === "W");
  let found = wins.find( win => win.result === "W" )
  let year = undefined;
  if !found {
    return undefined;
  }
  else {
    return found.year;
  }
}