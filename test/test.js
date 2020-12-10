const assert = require("assert");

// DESCRIBE é onde vai todos os testes
describe("file to be tested", () => {
  context("function to be tested", () => {
    it("should do something", () => {
      assert.strictEqual(1, 1);
    });
    it("other test", () => {
      assert.strictEqual("json", "json");
    });
  });
});
