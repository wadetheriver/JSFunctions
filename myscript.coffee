calc =
  num1 : 3
  num2 : 4
  # this will be the object
  add : (a,b) ->
    a=this.num1
    b=this.num2
    console.log "this", this
    console.log "numbers", this.num1, this.num2
    console.log "args", arguments
    console.log(this.num1+this.num2)
