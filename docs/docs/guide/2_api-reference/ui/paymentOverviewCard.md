# Payment Overview Card

### Add a custom payment method overview card in settings
TODO: write a short description

#### Usage:  
```ts
ui.paymentOverviewCard.add({
  pluginName: 'my-plugin-name',
  component: 'my-custom-payment-overview-card',
  paymentMethodHandlers: [
      'handler_my_custom_payment_method_one',
      'handler_my_custom_payment_method_two',
      // ...
  ],
});
```

#### Parameters
| Name                 | Required | Default        | Description                                                   |
| :------------------- | :------- | :------------- | :------------------------------------------------------------ |
| `pluginName`              | true     |                | The name of your plugin                               |
| `component`         | true     |                | The name of you custom payment overview card             |
| `paymentMethodHandlers`               | true     |                | A list of payment method handlers which are handeled by your component                    |



#### Example
![Payment overview card](./assets/todo-make-a-screen-shot.png)
```ts
import { ui } from '@shopware-ag/admin-extension-sdk';


// Example Payment Overview Card
Component.register('my-plugin-name', {
  template: `
      <sw-card
          class="sw-payment-card"
          title="My PluginName"
      >
      <div>
          <div class="payment-entry" v-for="paymentMethod in paymentMethods">
            <sw-media-preview-v2
                v-if="paymentMethod.mediaId"
                class="sw-payment-card__preview"
                :source="paymentMethod.mediaId"
            />

            <div class="sw-settings-payments-list__description sw-payment-card__payment-method-description">
                <span v-html="paymentMethod.translated.description"></span>
            </div>

            <sw-internal-link
                v-if="acl.can('payment_method:editor')"
                :router-link="{ name: 'sw.settings.payment.detail', params: { id: paymentMethod.id }}"
            >
                {{ $tc('sw-settings-payment.overview.editDetails') }}
            </sw-internal-link>
            <span
                v-else
                class="sw-internal-link sw-internal-link--disabled"
            >
            {{ $tc('sw-settings-payment.overview.editDetails') }}
            </span>

            <sw-switch-field
                :value="paymentMethod.active"
                :disabled="!acl.can('payment_method:editor')"
                @change="changePaymentMethodActive(paymentMethod)"
            />
          </div>
      </div>
      </sw-card>
`,

  inject: ['acl'],
  props: {
      paymentMethods: {
          type: Array,
          required: true,
      },
  },
  methods: {
      async changePaymentMethodActive(paymentMethod) {
          paymentMethod.active = !paymentMethod.active;

          this.$emit('set-payment-active', paymentMethod);
      },
  },
});

// Register your card
ui.paymentOverviewCard.add({
  pluginName: 'my-plugin-name',
  component: 'my-custom-payment-overview-card',
  paymentMethodHandlers: [
      'handler_my_custom_payment_method_one',
      'handler_my_custom_payment_method_two',
      // ...
  ],
});

```
