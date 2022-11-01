const polyfills = require("./polyfills");

describe("Custom polyfills testing", () => {
  beforeAll(() => {
    polyfills();
  });

  describe("Testing myMap", () => {
    it("Check — wrong type", () => {
      function badFn() {
        Array.prototype.myMap.call(true, (value) => value);
      }
      expect(badFn).toThrow(TypeError);
    });

    it("Check — no callback", () => {
      function badFn() {
        [1, 2, 3].myMap();
      }
      expect(badFn).toThrow(TypeError);
    });

    it("Check — simple loop", () => {
      expect([1, 2, 3, 4].myMap((item) => item + 10)).toEqual(
        [1, 2, 3, 4].map((item) => item + 10)
      );
    });

    it("Check — string", () => {
      expect(
        Array.prototype.myMap.call("test", (value) => `${value},`)
      ).toEqual(Array.prototype.map.call("test", (value) => `${value},`));
    });

    it("Check — properties", () => {
      const arr = [1, 2, 3, 4];
      expect(arr.myMap((item, index, arr) => [item, index, arr])).toEqual(
        arr.map((item, index, arr) => [item, index, arr])
      );
    });
  });

  describe("Testing myReduce", () => {
    it("Check — wrong type", () => {
      function badFn() {
        Array.prototype.myReduce.call(true, (acc, value) => acc + value);
      }
      expect(badFn).toThrow(TypeError);
    });

    it("Check — no callback", () => {
      function badFn() {
        [1, 2, 3].myReduce();
      }
      expect(badFn).toThrow(TypeError);
    });

    it("Check — sum", () => {
      const arr = [1, 2, 3, 4];
      expect(arr.myReduce((acc, value) => acc + value)).toEqual(
        arr.reduce((acc, value) => acc + value)
      );
    });

    it("Check — string", () => {
      expect(
        Array.prototype.myReduce.call(
          "test",
          (acc, value) => {
            acc[value] = value + 1;
            return acc;
          },
          {}
        )
      ).toEqual(
        Array.prototype.reduce.call(
          "test",
          (acc, value) => {
            acc[value] = value + 1;
            return acc;
          },
          {}
        )
      );
    });

    it("Check — properties", () => {
      expect(
        [1, 2, 3, 4].myReduce((acc, value, index, arr) => {
          acc.push([value, index, arr]);
          return acc;
        }, [])
      ).toEqual(
        [1, 2, 3, 4].reduce((acc, value, index, arr) => {
          acc.push([value, index, arr]);
          return acc;
        }, [])
      );
    });
  });
});
