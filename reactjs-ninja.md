# INDEX

- [Notes](#notes)
- [Setup](#Setup)
- [Start](#Start)
- [Components](#Components)
- [Inline style](#inline-style)
- [Handling Events](#handling-events)
- ["State" Component State](#states)
___
<br><br><br>

# Notes

- js turns it to string before output. and no obj or bool
___
<br><br><br>

# Setup

```bash
sudo npm i -g create-react-app
code --install-extension burkeholland.simple-react-snippets
code --install-extension esbenp.prettier-vscode
# geisslerh.ayu-mirage-bold-italic
```

- emmet js
- [ninja's repo](https://github.com/iamshaunjp/Complete-React-Tutorial.git)
___
<br><br><br>

# Start

```bash
# npx
create-react-app blog-app
cd blog-app
# from package.json scripts
# npm run start
npm start
```
___
<br><br><br>

# Components

## A component is a function that returns jsx template

- \<Component />
- sfc : staless function component
___
<br><br><br>

# <span id="inline-style">Inline Style</span>

```jsx
style = {{
    color: '#fff',
    backgroundColor: 'crimson'
}}
```
___
<br><br><br>

# <span id="handling-events">Handling Events</span>

```jsx
onClick = {handleClick /* function ref */}
    {/* _ => handleClick(para) */}
    {/* event obj as 1st para*/}
```
___
<br><br><br>

# <span id="states">"State" Component State</span>

## The data being used in the component at that point of time

