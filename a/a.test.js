test("Test A", async () => {
  console.log("test a");
  await new Promise((r) => setTimeout(r, 4000));
  expect(true).toBe(true);
});
