// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
  let newObj = { [key]: value };
  const driver = Object.assign({}, obj, newObj);
  return driver;
}
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value});
}
function deleteFromDriverByKey(obj, key) {
  const driver = Object.assign({}, obj);
  delete driver[key];
  return driver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}