test("Test C", async () => {
  console.log("test c");
  await new Promise((r) => setTimeout(r, 4000));
  expect(true).toBe(true);
});
