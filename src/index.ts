type Classnames = string | [boolean, string, string?];
/**
 * Constructs classnames from variadic parameters.
 * @param  {...string | [boolean, string, string?]} classes A variadic parameter. Accepts strings and tuples to combine into classnames.
 * @example classnames("text-red-500", "py-5", "px-2") ➡️ "text-red-500 py-5 px-2"
 * @example classnames([true, "bg-red-500", "bg-blue-500"]) ➡️ "bg-red-500"
 * @example classnames([false, "rounded-none", "rounded-lg"]) ➡️ "rounded-lg"
 *
 *
 */
export const cn = (...classes: Classnames[]) => {
	let workingClassnames = "";

	classes.forEach((className) => {
		workingClassnames = workingClassnames.concat(determine(className), " ");
	});

	return workingClassnames.trim();
};

/**
 * A utility to determine how to append a classname.
 * @param className - A Classnames parameter, can be a string or a tuple.
 * @returns a string to append to the classnames.
 */
const determine = (className: Classnames) => {
	switch (typeof className) {
		case "string":
			return className;
		case "object":
			if (className[0]) {
				return className[1];
			} else if (className[2]) {
				return className[2];
			}
		default:
			return "";
	}
};
