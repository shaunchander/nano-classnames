type Classnames = string | string[] | {
    [key: string]: boolean;
} | ((workingClassnames?: string) => string);
/**
 * Constructs classnames from multi-type inputs.
 * @param  {...any} classes A multi-type variadic parameter. Accepts strings, array of strings, an object, or a function that returns a string.
 * @example classnames("text-red-500", ["py-5", "px-2"]) ➡️ "text-red-500 py-5 px-2"
 * @example classnames({"rounded-lg": true, "rounded-none": false}) ➡️ "rounded-lg"
 * @example classnames(() => "text-blue-500") ➡️ "text-blue-500"
 *
 */
export declare const classnames: (...classes: Classnames[]) => string;
export {};
