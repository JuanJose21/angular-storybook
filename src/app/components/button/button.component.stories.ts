import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  argTypes: {
    text: {
      description: 'Texto para mostrar en el botón',
      defaultValue: { summary: 'Hola' },
      type: 'string',
    },
    color: {
      description: 'Color del botón en formato hexadecimal',
      defaultValue: { summary: '0068B4' },
      control: {
        type: 'color',
      },
    },
    type: {
      description: 'Tipo de botón',
      defaultValue: { summary: 'button' },
      type: 'string',
    },
    isDisabled: {
      description: 'Indica si el botón está deshabilitado',
      defaultValue: { summary: false },
      type: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
  }),
};
