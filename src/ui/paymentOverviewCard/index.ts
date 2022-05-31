import { createSender } from '../../channel';

export const add = createSender('uiPaymentOverviewCard');

/**
 * ?
 */
export type uiPaymentOverviewCard = {
  responseType: void,
  pluginName: string,
  component: string,
  paymentMethodHandlers: string[],
}
