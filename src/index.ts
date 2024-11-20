import { Server, EVENTS, IoRedisKvStore, Upload } from '@tus/server';
import { AzureStore } from '@tus/azure-store';
// Cannot find module '@tus/azure-store' or its corresponding type declarations.

const datastore = new AzureStore({
  account: 'foo',
  accountKey: 'bar',
  containerName: 'baz'
});
