export default async function TestPage() {
  await wait();
  return <div>Test page</div>;
}

async function wait() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("something"), 10000),
  );
}
