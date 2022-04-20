
![Logo](https://i.imgur.com/9DNMBWf.png)


# vue-ask

A simple, light and fully customizable confirmation-modal component for Vue and Nuxt.
Just use it whenever you want to prevent deleting, adding or updating something by mistake.

It's very simple to use and fully customizable with your own css styles!
## Installation

Install vue-ask plugin with npm

```bash
  npm install vue-ask
```

## Features

- Vue 3 and Nuxt 3 supported
- Light style included
- Fully customizable styles


## Demo

![App Screenshot](https://i.imgur.com/rubX5J9.png)


*Keep in mind that this component is fully customizable with your own CSS!*


## Usage/Examples

## Vue 3

```javascript
//main.js

import { createApp } from 'vue'
import App from './App.vue'
import VueAsk from "vue-ask";

const app = createApp(App);

app.use(VueAsk);
app.mount('#app');

```

```javascript
//App.vue

<template>
    <VueAsk
        @accepted="deleteItem()"
        @canceled="showAlert()" //this event is additional
        :title="Custom title" //this prop is not required
        :content="Custom content of modal" //this prop is not required
        :buttonCancel="Custom text for cancel button" //this prop is not required
        :buttonAccept="Custom text for accept button" //this prop is not required
    >
        <a href="#" @click.prevent>
            <i class="fa-solid fa-question"></i>
        </a>
    </VueAsk>
</template>

<script setup>
    const deleteItem = () => {
        // some code
    }

    const showAlert = () => {
        alert("You have to accept to delete this item!")
    }

</script>

```

## Nuxt 3

```javascript
// /plugins/vue-ask-plugin.js

import { VueAsk } from 'vue-ask'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAsk)
})


```

```javascript
//App.vue

<template>
    <VueAsk
        @accepted="deleteItem()"
        @canceled="showAlert()" //this event is additional
        :title="Custom title" //this prop is not required
        :content="Custom content of modal" //this prop is not required
        :buttonCancel="Custom text for cancel button" //this prop is not required
        :buttonAccept="Custom text for accept button" //this prop is not required
    >
        <a href="#" @click.prevent>
            <i class="fa-solid fa-question"></i>
        </a>
    </VueAsk>
</template>

<script setup>
    const deleteItem = () => {
        // some code
    }

    const showAlert = () => {
        alert("You have to accept to delete this item!")
    }

</script>

```



## Custom CSS styles
```css
// styles.css

// Style these classes to get your own theme
// Light style version from demo you can find here:
// https://github.com/PatrykBielanin/vue-ask/blob/main/example/styles.css

.vue-ask-modal {}

.vue-ask-body {}

.vue-ask-title {}

.vue-ask-buttons {}

.vue-ask-buttons button {}

.vue-ask-button-cancel {}

.vue-ask-button-confirm {}

```


## Feedback/Support

If you have any feedback or you need some help, please reach out to me at patrykbielanin@gmail.com or at discord **bielak#2500**
