let weight: number | undefined
weight = undefined

// ? 相当于string| undefined
function getPeople(name?: string) {
  return name || ''
}

getPeople('liuyi')
getPeople(undefined)
getPeople(null)

// any
let school: any
school = null // success
school = undefined // success
school = 'hello' // success
school = 3 // success