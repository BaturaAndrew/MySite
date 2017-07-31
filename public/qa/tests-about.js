suite('Тесты страницы "О..."', function(){
test('страница должна содержать ссылку на страницу about', function(){
assert($('a[href="/about"]').length);
});
});