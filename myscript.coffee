speak = (sayWhat) ->
  console.log this
  console.log this.says
  console.log sayWhat

barnabas =
  species: "cat"
  says:"meow"

speak.call(barnabas, barnabas.says)

speak.apply(barnabas, ["purr"])

meowme = speak.bind(barnabas)
meowme()
