<template>
  <div>
    <h1>login</h1>
    <button @click="handleLogin">
      Log in
    </button>
    AuthInfo:{{ auth }}
    <button @click="handleLogout">
      Log out
    </button>
    Info:{{ auth.user.value }}
  </div>
</template>

<script lang="ts">
import { inject, defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  props: {
  },
  setup() {
    const auth = inject<any>('$auth');

    return {
      auth,
      handleLogin: () => {
        auth.loginWithRedirect();
      },
      handleLogout: () => {
        auth.logout({
          returnTo: window.location.origin,
        });
      },
    };
  },
}); </script>
