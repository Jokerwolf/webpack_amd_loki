define('component-b', function() {
  console.log('Component b');
  return {
    talk: () => console.log('My name is Component b')
  };
});