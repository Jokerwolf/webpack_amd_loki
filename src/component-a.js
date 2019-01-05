define('component-b', function() {
  console.log('Component a');
  return {
    talk: () => console.log('My name is Component a')
  };
});