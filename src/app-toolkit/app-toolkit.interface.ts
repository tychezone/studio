import { StaticJsonRpcProvider } from '@ethersproject/providers';

import { IContractFactory } from '~contract/contracts';
import { EthersMulticall } from '~multicall';
import { DefaultDataProps } from '~position/display.interface';
import { AppTokenPosition, ContractPosition } from '~position/position.interface';
import { AppGroupsDefinition } from '~position/position.service';
import { BaseToken } from '~position/token.interface';
import { Network } from '~types/network.interface';

import { AppToolkitHelperRegistry } from './app-toolkit.helpers';

export const APP_TOOLKIT = Symbol('APP_TOOLKIT');

export interface IAppToolkit {
  get globalContracts(): IContractFactory;

  get helpers(): AppToolkitHelperRegistry;

  getNetworkProvider(network: Network): StaticJsonRpcProvider;

  getMulticall(network: Network): EthersMulticall;

  // Base Tokens

  getBaseTokenPrices(network: Network): Promise<BaseToken[]>;

  getBaseTokenPrice(opts: { network: Network; address: string }): Promise<BaseToken | null>;

  // Positions

  getAppTokenPositions<T = DefaultDataProps>(
    ...appTokenDefinition: AppGroupsDefinition[]
  ): Promise<AppTokenPosition<T>[]>;

  getAppContractPositions<T = DefaultDataProps>(
    ...appTokenDefinition: AppGroupsDefinition[]
  ): Promise<ContractPosition<T>[]>;
}