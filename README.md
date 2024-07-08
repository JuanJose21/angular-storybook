# Angular Storybook

Este repositorio contiene un ejemplo de cómo integrar Storybook en una aplicación de Angular. A través de este ejemplo, aprenderás cómo instalar, configurar y utilizar Storybook para desarrollar y documentar componentes de manera aislada.

## Tabla de Contenidos

- [Introducción](#introducción)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración de Storybook](#configuración-de-storybook)
- [Creación de Componentes y Historias](#creación-de-componentes-y-historias)
- [Ejecutar Storybook](#ejecutar-storybook)
- [Verificación y Pruebas](#verificación-y-pruebas)
- [Ejemplo de Componente](#ejemplo-de-componente)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Introducción

Storybook es una herramienta poderosa para desarrollar componentes de manera aislada. Facilita la documentación y pruebas de los componentes, mejorando la eficiencia y la calidad del desarrollo de frontend. Este repositorio muestra cómo integrar Storybook con Angular paso a paso.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Angular CLI](https://cli.angular.io/) (versión 12 o superior)

## Instalación

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/JuanJose21/angular-storybook.git
   cd angular-storybook
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

## Creación de Componentes y Historias

1. **Crea un archivo de historia para tu componente.** Por ejemplo, para un componente de botón:

   ```typescript
   // src/app/button/button.component.stories.ts

   import type { Meta, StoryObj } from '@storybook/angular';
   import { ButtonComponent } from './button.component';

   const meta: Meta<ButtonComponent> = {
     component: ButtonComponent,
   };

   export default meta;
   type Story = StoryObj<ButtonComponent>;

   export const Primary: Story = {
     render: () => ({
       props: {},
     }),
   };
   ```

2. **Configura los `@Inputs` utilizando `argTypes`.**

   ```typescript
   // src/app/button/button.component.stories.ts

   const meta: Meta<ButtonComponent> = {
     component: ButtonComponent,
     argTypes: {
       text: { control: 'text', defaultValue: 'Default Button Text' },
       disabled: { control: 'boolean', defaultValue: false },
     },
   };
   ```

## Ejecutar Storybook

Para iniciar Storybook, ejecuta:

```bash
npm run storybook
```

## Verificación y Pruebas

Puedes verificar que todo funcione correctamente viendo los componentes renderizados en Storybook y ajustando sus propiedades en la sección de controles.

## Ejemplo de Componente

Aquí tienes un ejemplo de un componente `ButtonComponent`:

```typescript
// src/app/button/button.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [disabled]="disabled">{{ text }}</button>`,
})
export class ButtonComponent {
  @Input() text = 'Click me!';
  @Input() disabled = false;
}
```
