let width: number
//width = getWidth()

if (width === undefined) {

}
function getWidth(): number {
  if (Math.random() > 0.3) {
    return undefined
  } else if (Math.random() > 0.6) {
    return null
  }
  return 0
}