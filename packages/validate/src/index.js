/**
 * @param {*} any
 * @return {boolean}
 * @description "isArray" say more than "Array.isArray(any);"
 */
function isArray(any) {
  return Array.isArray(any);
}

/**
 * @param {string}
 * @return {boolean}
 */
function isCep({ length } = '') {
  return length === 8;
}

/**
 * @param {string}
 * @returns {boolean}
 */
function isCpf({ length } = '') {
  return length === 11;
}

/**
 * @param {string} string
 * @returns {boolean}
 */
function isDate(string) {
  // TODO: no momento não valida se o dia existe
  return String(new Date(string)) !== 'Invalid Date';
}

/**
 * @param {string} value
 * @param {string} limit
 * @returns {boolean}
 */
function isDateAbove(value, limit) {
  return limit < value;
}

/**
 * @param {string} value
 * @param {string} limit
 * @returns {boolean}
 */
function isDateBelow(value, limit) {
  return limit > value;
}

/**
 * @param {string} value
 * @param {Object} options
 * @param {string} options.min
 * @param {string} options.max
 * @returns {boolean}
 */
function isDateBetween(value, { min, max } = {}) {
  const date = isDate(value) ? value : new Date(value);

  if (min && date < min) return false;
  if (max && max < date) return false;

  return true;
}

/**
 * @param {string} string
 * @returns {boolean}
 */
function isEmail(string) {
  return new RegExp(/^([\w_.\-+])+@([\w-]+.)+([\w]{2,10})+$/).test(string);
}

/**
 * @param {string} string
 * @return {boolean}
 * @description "isEmptyString" say more than "string === ''"
 */
function isEmptyString(string) {
  return string === '';
}

/**
 * @param {*} any
 * @return {boolean}
 * @description "isFunction" say more than typeof any === 'function'"
 */
function isFunction(any) {
  return typeof any === 'function';
}

function isImageFile(anything) {
  return new RegExp(/^.*\.(jpg|JPG|png|PNG|gif|GIF|bmp|BMP|webp|WEBP)$/).test(
    anything
  );
}

/**
 * @param {*} any
 * @return {boolean}
 * @description "isNumber" say more than typeof any === 'number'"
 */
function isNumber(any) {
  return Number.isInteger(any);
}

function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

/**
 * @param {string}
 * @return {boolean}
 */
function isPhone({ length } = '') {
  return length === 11 || length === 10;
}

/**
 * @param {*} any
 * @return {boolean}
 * @description "isString" say more than "typeof any === 'string'"
 */
function isString(any) {
  return typeof any === 'string';
}

export default {
  isArray,
  isCep,
  isCpf,
  isDate,
  isDateAbove,
  isDateBelow,
  isDateBetween,
  isEmail,
  isEmptyString,
  isFunction,
  isImageFile,
  isNumber,
  isOverflown,
  isPhone,
  isString,
};
