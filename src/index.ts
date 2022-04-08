/* Extensions */
import "./extensions/array"
import "./extensions/console"
import "./extensions/date"
import "./extensions/number"
import "./extensions/string"

/* Helpers */
import { isEqualArrays } from "./helpers/array"
export { isEqualArrays }

import { logEx } from "./helpers/console"
export { logEx }

import { isLeapYear, isValidDate } from "./helpers/date"
export { isLeapYear, isValidDate }

import { emptyPlaceholder, isInteger, toCamelCase, toCapitalizedWord } from "./helpers/string"
export { emptyPlaceholder, isInteger, toCamelCase, toCapitalizedWord }