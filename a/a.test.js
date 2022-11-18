test("Test A", async () => {
  console.log("testing A");
  await new Promise((r) => setTimeout(r, 4000));
  expect(true).toBe(true);
});
