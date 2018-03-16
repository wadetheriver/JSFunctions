# module
# can be invoked anywhere, see index.html
wade = do () ->
  speak: () ->
    console.log "this: ", this
    console.log "hello"

wade.speak();
