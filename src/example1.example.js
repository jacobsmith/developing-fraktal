let app = global.Fraktal();

app.test = [
    [(i) => i === '123', () => 'You passed 123'],
    [(i) => i === '456', () => 'You passed 456'],
]

return app.test('123')