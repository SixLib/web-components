class dataType {
  constructor() {
    this.value = 3;
    this.funcAdd3 = (obj) => {
      obj.value += 3
    }
  }
}
const newType = new dataType();
const fn = (obj) => {
  obj.funcAdd3(obj)
  return obj
}
fn(newType)
fn(newType)
fn(newType)
console.log(newType)