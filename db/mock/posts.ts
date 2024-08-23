export const postsMockData = [
  {
    title: 'Getting Started with Svelte',
    slug: 'getting-started-with-svelte',
    tag: 'framework',
    content: `
# Introduction to Svelte

Svelte is a modern JavaScript framework that allows developers to build user interfaces with less code. Unlike traditional frameworks like React or Vue, Svelte shifts much of the work to compile time, resulting in faster and more efficient apps.

## Why Svelte?

- **No Virtual DOM**: Svelte directly updates the DOM when the state changes, leading to better performance.
- **Simple Syntax**: It has a clean and straightforward syntax that makes it easy to learn.
- **Reactive Programming**: Svelte has built-in reactivity, making state management a breeze.

\`\`\`javascript
<script>
  let count = 0;
  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>Clicked {count} times</button>
\`\`\`
    `,
  },
  {
    title: 'A Guide to Responsive Web Design',
    slug: 'guide-to-responsive-web-design',
    tag: 'design',
    content: `
# Responsive Web Design

Responsive Web Design (RWD) is an approach to web design that makes web pages render well on various devices and window or screen sizes. It ensures a good user experience regardless of the device being used.

## Key Concepts

- **Fluid Grids**: Layouts that use relative units like percentages instead of fixed units like pixels.
- **Flexible Images**: Images that scale appropriately to fit within their container.
- **Media Queries**: CSS techniques that apply different styles based on the screen size or device characteristics.

\`\`\`css
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
\`\`\`
    `,
  },
  {
    title: 'Understanding JavaScript Promises',
    slug: 'understanding-javascript-promises',
    tag: 'javascript',
    content: `
# JavaScript Promises

Promises in JavaScript represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They are a powerful tool for managing asynchronous code, allowing for cleaner and more readable code.

## Promise States

- **Pending**: The initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

## Using Promises

\`\`\`javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data fetched successfully');
  }, 2000);
});

fetchData.then(data => {
  console.log(data);
}).catch(error => {
  console.error(error);
});
\`\`\`
    `,
  }
];


