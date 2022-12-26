import { classnames } from "./index";

let example = "text-red-500 text-lg rounded-2xl bg-blue-500";

describe("nano-classnames", () => {
	it("should accept a list of strings", () => {
		expect(
			classnames("text-red-500", "text-lg", "rounded-2xl", "bg-blue-500")
		).toBe(example);
	});
});
