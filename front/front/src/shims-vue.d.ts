declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // const component: DefineComponent<{}, {}, any>
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >
  export default component
}
