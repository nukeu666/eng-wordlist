// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
  test.equal(true, true);
});
Tinytest.add('exists', function (test) {
  test.isTrue(Wordlist.exists('ABACINATION'));
});
Tinytest.add('notexists', function (test) {
  test.isFalse(Wordlist.exists('ABCINATION'));
});
Tinytest.add('smallexists', function (test) {
  test.isTrue(Wordlist.exists('abaca'));
});
Tinytest.add('smallnotexists', function (test) {
  test.isFalse(Wordlist.exists('abaa'));
});
