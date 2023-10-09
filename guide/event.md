# Event

## 1. Basic usage

In Alins JSX, we use the same event names as HTML and have the same event object

In addition, in addition to functions, you can also pass in js expressions as events in onclick. The incoming js expressions will not be executed immediately, but will be executed when the event is triggered.

Let's look at it through an example

<CodeBox/>

```jsx
function logClient(event){
     console.log('Position is', event.clientX, event.clientY);
}
<button $mount='#App'
     onclick={logClient}
     onmouseleave={console.log('Mouse Leave!')}
>Click Me</button>;
```

## 2. $e object

When using an expression as an event function, you can use the `$e` variable to use the event object, as follows:

<CodeBox/>

```jsx
<button $mount='#App'
     onclick={console.log('ClientX = ', $e.clientX)}
>Click Me</button>;
```

## 3. Event decorator

Event decorators are used to modify the behavior of events, including the following: `prevent, stop, capture, once, self, pure`.

### 3.1 prevent

prevent is used to prevent the default behavior of events, event.preventDefault is called internally

<CodeBox/>

```jsx
function click(){
     console.log('Prevent checkbox checked!');
}
<div $mount='#App'>
     Normal: <input type='checkbox'/><br/>
     Prevent And Log: <input onclick:prevent={click} type='checkbox'/><br/>
     Only Prevent: <input onclick:prevent type='checkbox'/>
</div>
```

### 3.2 stop

stop is used to prevent event bubbling, event.stopPropagation is called internally

<CodeBox/>

```jsx
function click(from: string){
     console.log(`Click from ${from}!`);
}
<div $mount='#App'>
     <div onclick={click('parent')}>
         Normal:
         <button onclick={click('child')}>Click Me!</button>
     </div>
     <div onclick={click('parent')}>
         StopPropagation With Log:
         <button onclick:stop={click('child')}>Click Me!</button>
     </div>
     <div onclick={click('parent')}>
         Only StopPropagation:
         <button onclick:stop>Click Me!</button>
     </div>
</div>
```

### 3.3 capture

capture is used to enable event capture. When carried, the useCapture of the event will be passed in true

<CodeBox/>

```jsx
function click(from: string){
     console.log(`Click from ${from}!`);
}
<div $mount='#App'>
     <div onclick={click('parent')}>
         Normal: <button onclick={click('child')}>Click Me!</button>
     </div>
     <div onclick:capture={click('parent')}>
         With Capture: <button onclick:capture={click('child')}>Click Me!</button>
     </div>
</div>
```

### 3.4 once

once means that the event is only triggered once

<CodeBox/>

```jsx
function click(){
     console.log('Clicked, try again!');
}
<div $mount='#App'>
     <div>
         Normal: <button onclick={click}>Click Me!</button>
     </div>
     <div>
         Only Once: <button onclick:once={click}>Click Me!</button>
     </div>
</div>
```

### 3.5 self

self means that it is only triggered when event.target is the current dom element

<CodeBox/>

```jsx
function click(from: string){
     console.log(`Click from ${from}!`);
}
<div $mount='#App'>
     <div onclick={click('parent')}>
         Normal:
         <button onclick={click('child')}>Click Me!</button>
     </div>
     <div onclick:self={click('parent')}>
         With Self:
         <button onclick={click('child')}>Click Me!</button>
     </div>
</div>

```

###pure

pure is a compile-time decorator that preserves the original value of an event and does not compile it.

<CodeBox/>

```jsx
function click(from: string){
     console.log(`Execute click from ${from}`)
     // The pure decorator is used to keep event expressions from being compiled
     return ()=>{
         console.log(`Click from ${from}!`);
     }
}
<div $mount='#App'>
     <div>
         Normal [Won't Log Click From]:
         <button onclick={click('child1')}>Click Me!</button>
     </div>
     <div>
         With Pure: <button onclick:pure={click('child2')}>Click Me!</button>
     </div>
</div>
```