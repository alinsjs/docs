<!--
 * @Author: chenzhongsheng
 * @Date: 2023-10-09 20:05:08
 * @Description: Coding something
-->
# Typescript usage practices

At present, because the IDE plugin is being planned, the temporary support for typescript types mainly depends on the IDE's support for tsx files, so some custom syntax in Alins is not well supported, but we can have some practices to avoid static checking errors of ts

## JSX. Props

When using a custom property such as '$for', '$if' on a component, typescript throws an exception that the property does not exist, we can use JSX. Props attribute to circumvent. You can also use JSX. Children to specify the parameter type of the child element

```tsx
let arr = [1,2,3];

<div $mount='#App'>
    <Component $for={arr} item={$item}>
        <span>{$index}</span>
    </Component>
</div>

function Component({item}: JSX. Props<{item: number}>, children: JSX. Children){
    return <div>{item} {children}</div>;
}
```

## JS Label defines variables

When using '$:', '_:', 'shallow:' to define variables, since ts is not recognized, you need to manually declare the variables in the tsx file, as follows

```tsx
declare let aaaa: number;
$: aaaa = 1;
```

## ts-ignore

For other scan errors in some TS code, you can skip them with the '// @ts-ignore' comment

```tsx
 @ts-ignore
mount: <div></div>, '#App';
```