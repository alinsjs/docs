<!--
 * @Author: chenzhongsheng
 * @Date: 2023-10-10 07:45:01
 * @Description: Coding something
-->

# TODO-LIST Demo

The following is a todo list demo program, which fully demonstrates the core functions of Alins, which you can also freely use in [Playground] (https://alinsjs.github.io/playground/#56):

<CodeBox/>

```tsx
function List () {
    const list = ['todo1'];
    let value = '';
    return <div>
        <div>
            <input type="text" value={value}/>
            <button onclick={list.push(value)}>add</button>
        </div>
        <For data={list}>
            <Item item={$item} index={$index}>
                <button onclick={list.splice($index, 1)}>delete</button>
            </Item>
        </For>
    </div>;
}

function Item ({item, index}, children) {
    let done = false;
    return <div style={{
        textDecoration: done ? 'line-through' : 'none',
        color: done ? '#888' : 'inherit',
    }}>
        <span>{index + 1}: {item}</span>
        <button onclick={ done = !done }>{done ? 'undo' : 'done'}</button>
        {children}
    </div>;
}

<List $mount='#App'/>;
```