test("Test B", async () => {
  console.log("test b");
  await new Promise((r) => setTimeout(r, 4000));
  expect(true).toBe(true);
});
