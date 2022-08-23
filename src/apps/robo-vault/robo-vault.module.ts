import { Register } from '~app-toolkit/decorators';
import { AbstractApp } from '~app/app.dynamic-module';

import { AvalancheRoboVaultVaultTokenFetcher } from './avalanche/robo-vault.vault.token-fetcher';
import { RoboVaultContractFactory } from './contracts';
import { FantomRoboVaultVaultTokenFetcher } from './fantom/robo-vault.vault.token-fetcher';
import { RoboVaultAppDefinition, ROBO_VAULT_DEFINITION } from './robo-vault.definition';

@Register.AppModule({
  appId: ROBO_VAULT_DEFINITION.id,
  providers: [
    AvalancheRoboVaultVaultTokenFetcher,
    FantomRoboVaultVaultTokenFetcher,
    RoboVaultAppDefinition,
    RoboVaultContractFactory,
  ],
})
export class RoboVaultAppModule extends AbstractApp() {}