# Return new object from function
# Adding method to calc prototype will not work,
# since it is added to constructor function's object prototype and not
# the returned object's obect prototype
Calc = (num1=3, num2=4) ->
  num1 : num1
  num2 : num2
  add : (a,b) ->
    # a=this.num1
    # b=this.num2
    console.log "this", this
    console.log "numbers", this.num1, this.num2
    console.log "args", arguments
    console.log(this.num1+this.num2)

calc1 = new Calc(76, 24)

console.log calc1.add()

# A couple functions to be added to prototypes
getInfo = () ->
  console.log "getInfo's this", this
  console.log "The Pets name is #{this.name} and is a #{this.breed}"

speak = (sayWhat) ->
  console.log "speak's this", this
  console.log(sayWhat)


# simple constructor and add prototype
Dog = () ->
Dog.prototype.getInfo = getInfo
Dog.prototype.speak = speak

#instantiate dog with parameters on the fly
dog1 = new Dog()
dog1.name = "Ellie"
dog1.breed = "Redbone"
dog1.says = "woof"
dog1.info = () ->
  console.log("this", this)
  console.dir("dog1", dog1)
  console.log "dog1's name is #{dog1.name} and is a #{dog1.breed}"

# dog1.info()
dog1.getInfo()
dog1.speak("woof")



# use return so coffeescript does not return last statement...
Cat = (name, breed, says) ->
  this.name = name
  this.breed = breed
  this.says = says
  return

Cat.prototype.getInfo = getInfo
Cat.prototype.speak = speak

barnabas = new Cat('Barnabas', 'Orange Tabby', 'meow')

barnabas.getInfo()
barnabas.speak(barnabas.says)


for property of barnabas
  console.log "#{property} : #{barnabas[property]}"
