import { cn } from "./index";

let template = "text-red-500 text-lg rounded-2xl bg-blue-500";

describe("nano-classnames", () => {
	it("should accept a list of strings", () => {
		expect(cn("text-red-500", "text-lg", "rounded-2xl", "bg-blue-500")).toBe(
			template
		);
	});
	it("should accept a tuple parameter when set to true", () => {
		expect(cn([true, "text-red-500 text-lg rounded-2xl bg-blue-500", ""])).toBe(
			template
		);
	});
	it("should accept a tuple parameter when set to false", () => {
		expect(
			cn([false, "", "text-red-500 text-lg rounded-2xl bg-blue-500"])
		).toBe(template);
	});

	it("should only render the second item in a tuple when the third item is not supplied", () => {
		expect(cn([true, "text-red-500 text-lg rounded-2xl bg-blue-500"])).toBe(
			template
		);
	});
	it("should not render classnames when tuple is set to false", () => {
		expect(cn([false, "text-red-500 text-lg rounded-2xl bg-blue-500"])).toBe(
			""
		);
	});
	it("should render classnames when a string, variable, and tuple are applied", () => {
		let classname = "rounded-2xl";
		expect(cn("text-red-500 text-lg", classname, [true, "bg-blue-500"])).toBe(
			template
		);
	});
});
