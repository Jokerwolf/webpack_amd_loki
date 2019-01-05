import a from './component-a';

const talk = () => console.log('My name is Components');
const getComponent = (name) => import(`./component-${name}`).then(component => component);

export { a, talk, getComponent };