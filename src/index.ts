/* Extensions */
import "./extensions/array"
import "./extensions/console"
import "./extensions/date"
import "./extensions/number"
import "./extensions/string"

/* Helpers */
import { isEqualArrays, removeElement } from "./helpers/array"
export { isEqualArrays, removeElement }

import { logEx } from "./helpers/console"
export { logEx }

import { isLeapYear, isValidDate } from "./helpers/date"
export { isLeapYear, isValidDate }

import { isIntegerNumber, toStringWithZeroPadding } from "./helpers/number"
export { isIntegerNumber, toStringWithZeroPadding }

import { emptyPlaceholder, isEndingWith, isInteger, isStartingWith, svgStringToImageSource, toCamelCase, toCapitalizedWord, trimLeadingZeroes } from "./helpers/string"
export { emptyPlaceholder, isEndingWith, isInteger, isStartingWith, svgStringToImageSource, toCamelCase, toCapitalizedWord, trimLeadingZeroes }