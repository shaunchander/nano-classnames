/**
 * Constructs classnames from multi-type inputs.
 * @param  {...any} classes A multi-type variadic parameter. Accepts strings, array of strings, an object, or a function that returns a string.
 * @example classnames("text-red-500", ["py-5", "px-2"]) ➡️ "text-red-500 py-5 px-2"
 * @example classnames({"rounded-lg": true, "rounded-none": false}) ➡️ "rounded-lg"
 * @example classnames(() => "text-blue-500") ➡️ "text-blue-500"
 *
 */
export const classnames = (...classes) => {
    let workingClassnames = "";
    classes.forEach((className) => {
        workingClassnames = workingClassnames.concat(determine(className), " ");
    });
    return workingClassnames.trim();
};
/**
 * A utility for determining how to append a `className` to `workingClassnames`
 * @param className A variadic type containing classnames to append.
 */
// rome-ignore lint/suspicious/noExplicitAny: <explanation>
const determine = (className) => {
    switch (typeof className) {
        case "string":
            return className;
        case "function":
            return className();
        case "object":
            if (Array.isArray(className)) {
                return className.join(" ");
            }
            else {
                let workingClassnames = "";
                Object.keys(className).forEach((key) => {
                    if (className[key]) {
                        workingClassnames = workingClassnames.concat(key);
                    }
                });
                return workingClassnames;
            }
        default:
            return "";
    }
};
