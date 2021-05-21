import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('aybak')
    const [ispending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        const blog = {title, body, author}

        setIsPending(true)

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(_ => {
            setIsPending(false)
            history.push('/')
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text" 
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="aybak">Aybak3k</option>
                    <option value="jou">Jou</option>
                    <option value="gax">Gax</option>
                </select>
                {!ispending && <button>Add Blog</button>}
                {ispending && <button disapled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;

/*

# Is it any faster??

```js
<input type="text" oninput="updateUI(this.value)">
<h3></h3>
<script>
const h3 = document.querySelector('h3')
const input = document.querySelector('input')
const updateUI = val => {
  h3.innerHTML = input.value
}
</script>
```

*/