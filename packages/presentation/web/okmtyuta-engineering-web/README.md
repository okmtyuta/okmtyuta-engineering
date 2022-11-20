# ディレクトリ構成

```
root/
　 ├ .storybook/: config of storybook
　 ├ node_modules/: node modules
　 ├ public/: public files, such as html, favicon, ...
　 ├ src/
　 │ 　 └ components/: universal components
　 │ 　　　 └ styled/: only-styled components, not having function
　 │ 　 └ config/: configure
　 │ 　　　 └ colors.ts: colors setting
　 │ 　　　 └ fonts.ts: fonts setting
　 │ 　　　 └ pallets.ts: pallets setting, pallets is color set
　 │ 　 └ entity/: model components
　 │ 　 └ hooks/: universal hooks
　 │ 　 └ route/: routing
　 │ 　 └ test/: testing
　 │ 　 └ types/: universal types
　 │ 　 └ utilities/: utility functions
　 │ 　 └ App.tsx: react root component
　 │ 　 └ index.tsx: react root file
　 │ 　 └ react-app-env.d.ts
　 │ 　 └ reportWebVital.ts
　 │ 　 └ setupTests.ts
　 ├ .gitignore
　 ├ package.json
　 ├ README.md
　 └ tsconfig.json
```
