# INDEX

1) [Notes](#notes)
1) [Setup](#Setup)
1) [Start](#Start)
1) [Components](#Components)
1) [Inline style](#inline-style)
1) [Handling Events](#handling-events)
1) ["State" Component State](#states)
1) [Lists (Arrays) mapping (outputting) XD (LOL)](#lists-mapping)
1) [Props](#props)
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
- [react-dev tools](https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/)
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

- the var isn reactive meaning
- react doesn't watch it for changes
- that's where we use 'useState' hook
- Hooks are special functions that do a ceratin job
- notice 'use' and 'set'

<br>

### demo

```js
import {useState} from 'react'
...
const [count, setCount] = useState(0)
...
<button onClick={_ => setCount(count + 1)}>click me</button>
```
___
<br><br><br>

# <span id="lists-mapping">Lists (Arrays) mapping (outputting) XD (LOL)</span>

```jsx
{blogs.map((blog) => (
    <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>written by {blog.author}</p>
    </div>
))}
```
___
<br><br><br>

# Props

- (props) == ({ blogs, title })
    - const varUsed = props.propUsed
- property name on the tag
___
<br><br><br>
