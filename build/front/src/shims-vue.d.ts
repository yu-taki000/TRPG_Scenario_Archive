declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // const component: DefineComponent<{}, {}, any> // 元の型定義 念の為残す
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >;
  export default component;
}
