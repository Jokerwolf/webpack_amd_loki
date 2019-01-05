define('d', function() {
  console.log('Component d');
  return {
    talk: (from) => console.log(`${from}: My name is Component d`)
  };
});