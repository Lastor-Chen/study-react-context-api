# About

React Context API 研究。

[Preview on CodeSandbox](https://codesandbox.io/s/study-react-context-api-9xmspj?file=/src/main.tsx)

## Memo

- React.createContext 只是一種全域變數，本身不具有 setState 功能，需搭配 useState or useReducer 才能改值並響應。
- Context API 與 Vue3 的 Provide / Inject 概念類似，只是語法不同。
- useReducer 是仿照 Redux 概念的 Hook，用起來有點麻煩，用 useState 會簡單一些。
- Context.Provider 要往 root 組件放，至少要放在 Routes 外面，跳頁時才能維持數據。
- 操作起來有點麻煩，需要熟練度，尤其是搭配 useReducer 時，很多東西需要手刻。
- CodeSandbox 沒有 Vite 樣板，拿 React CRA 樣板改會有點問題，直接從 Github import Vite App 比較實在。
