suite('’есты страницы "About ..."', function(){
test('страница должна содержать ссылку на страницу контактов', function(){
assert($('a[href="/contact1"]').length);
});
});