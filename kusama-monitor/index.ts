import { ApiPromise, WsProvider } from '@polkadot/api';
import { AccountInfo } from '@polkadot/types/interfaces';

// Read environment variables
const WS_ENDPOINT = process.env.WS_ENDPOINT || 'wss://kusama-rpc.polkadot.io/';
const THRESHOLD = parseFloat(process.env.THRESHOLD || '0.1');

// Connect to the Kusama network
const wsProvider = new WsProvider(WS_ENDPOINT);
ApiPromise.create({ provider: wsProvider }).then(async api => {
  console.log(`Connected to ${WS_ENDPOINT}`);

  // List of accounts to monitor
  const accounts = process.env.ACCOUNTS ? process.env.ACCOUNTS.split(',') : [];

  // Monitor accounts
  setInterval(async () => {
    for (const account of accounts) {
      const accountInfo = await api.query.system.account(account);
      const freeBalance = (accountInfo as AccountInfo).data.free;
      const freeBalanceHuman = freeBalance.toHuman();

      console.log(`Balance of ${account}: ${freeBalanceHuman}`);

      if (parseFloat(freeBalance.toString()) / Math.pow(10, api.registry.chainDecimals[0]) < THRESHOLD) {
        console.warn(`ALERT: Account ${account} has balance below threshold!`);
      }
    }
  }, 60000); // Check every minute
});
