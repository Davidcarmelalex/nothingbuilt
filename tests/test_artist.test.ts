describe('Artist validation', () => {
  it('requires name', () => {
    const valid = (a: any) => !!a.name;
    expect(valid({ name: 'KIRA', genre: 'Electronic' })).toBe(true);
    expect(valid({ genre: 'Electronic' })).toBe(false);
  });
});
