// print node version
const nodeVersion = process.version;
console.log(`Node version: ${nodeVersion}`);

// print os and machine details
const os = require("os");
console.log(`OS: ${os.platform()} ${os.release()}`);
console.log(`CPU Details: ${os.cpus()[0].model}`)
