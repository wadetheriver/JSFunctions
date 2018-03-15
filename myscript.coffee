#arguments
  # an elegant way to increment in reverse on cs?
plus = () ->
  console.log "plus v1"
  sum = 0
  `for (var i = arguments.length-1; i>=0; i--) {
    sum += arguments[i]
    }`
  return sum

console.log plus("bird",0,1,2,3,65)

#  iterate forward
plusv2 = () ->
  console.log "plus v2"
  sum=0
  for argument in arguments by 1
    sum += argument
  return sum

console.log plusv2(0,1,2,3,65,"bird")

# iterate reverse as in original js
plusv3 = () ->
  console.log "plus v3"
  sum=0
  for argument in arguments by -1
    sum += argument
  return sum

# type string not cast (see v1)
console.log plusv3(0,1,2,3,65,"bird")
