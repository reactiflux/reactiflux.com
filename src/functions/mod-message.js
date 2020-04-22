const fetch = require('node-fetch');

module.exports = {
  handler: (event, _, cb) => {
    const body = JSON.parse(event.body);
    if (!body.message) {
      cb(null, { statusCode: 202, body: 'ok' });
      return;
    }
    console.log('Submitting form submission…', body.message.length);
    fetch(process.env.MOD_MESSAGE_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `
      \`\`\`
      ${body.message.replace('```', '\\`\\`\\`')}
      \`\`\`
      `,
      }),
    });
    cb(null, { statusCode: 200, body: 'ok' });
  },
};
