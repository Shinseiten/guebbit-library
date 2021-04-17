import { matrixTranspose } from '../../';


describe("(matrixTranspose) Transpose a matrix. Invert rows and columns", () => {
	test("", () => {
		expect(
			matrixTranspose([
				[1,2,3],
				[1,2,3],
				[1,2,3]
			])
		).toEqual([
			[1,1,1],
			[2,2,2],
			[3,3,3]
		]);
	});
});
