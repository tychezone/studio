import { Register } from '~app-toolkit/decorators';
import { Network } from '~types/network.interface';

import { UnagiiVaultTokenFetcher } from '../common/unagii.vault-token-fetcher';
import { UNAGII_DEFINITION } from '../unagii.definition';

const appId = UNAGII_DEFINITION.id;
const groupId = UNAGII_DEFINITION.groups.vault.id;
const network = Network.ETHEREUM_MAINNET;

@Register.TokenPositionFetcher({ appId, groupId, network })
export class EthereumUnagiiVaultTokenFetcher extends UnagiiVaultTokenFetcher {
  appId = appId;
  groupId = groupId;
  network = network;
  groupLabel = 'Vaults';
  vaultManagerAddresses = [
    '0x7f75d72886d6a8677321e5602d18948abcb4281a',
    '0xb088d7c71ea9ebaed981c103fc3019b59950d2c9',
    '0x8ef11c51a666c53aeeec504f120cd1435e451342',
  ];
}
