exports.handler = async function (event) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    // body: "<p>Hello</p><p style=color:red;>World</p>",
    body: `Hello, CDK! You've hit ${event.path}\n`,
  };
};
