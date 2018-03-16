# module
# can be invoked anywhere, see index.html
wade = do () ->
  DEFAULTS =
    say: "hello"

  speak: () ->
    firstArg = arguments[0] or ''
    statement = firstArg.say or DEFAULTS.say
    console.log "Wade Says: #{statement}"

wade.speak();
