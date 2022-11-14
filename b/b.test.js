test("Test B", async () => {
  await new Promise((r) => setTimeout(r, 4000));
  expect(true).toBe(true);
});
