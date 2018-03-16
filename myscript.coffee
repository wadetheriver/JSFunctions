# module
# can be invoked anywhere, see index.html
action = do () ->
  DEFAULTS =
    say: "hello"
    speed: "fast"


  speak: () ->
    firstArg = arguments[0] or ''
    statement = firstArg.say or DEFAULTS.say
    console.log "Speaking: #{statement}"
    # 'this' is the outer function object not this one!
    return this

  run: () ->
    firstArg = arguments[0] or ''
    running = firstArg.speed or DEFAULTS.speed
    console.log "Running... #{running}"
    # 'this' is the outer function object not this one!
    return this

action.speak({say: "hello"}).run({speed:"slow"});
