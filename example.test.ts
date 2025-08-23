import { expect, test } from "vitest";

// 测试是否相等toBe
test("test common matcher", () => {
  const name = "viking";
  expect(name).toBe("viking");
  expect(2 + 2).toBe(4);
  expect(2 + 2).not.toBe(5);
});

// 测试是否为true或false toBeTruthy和toBeFalsy
test("test to be true or false", () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});

// 测试比较两个数字的大小
test("test number", () => {
  expect(4).toBeGreaterThan(3);
  expect(2).toBeLessThan(3);
});

// 测试对象是否相等toEqual
test("test object", () => {
  expect({ name: "viking" }).toEqual({ name: "viking" });
});
