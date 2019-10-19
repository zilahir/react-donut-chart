# React Donut Chart

This is a dead simple donut chart component implemented in `React`. 

To use it simply install it via `npm`: 

`npm i --save react-donut-chart`

## demo

You can see this component in action [here](https://example.zilahir.now.sh/)

## props

| name          | isRequired | type     | default     | example                                                                            | description                                                                     |
|---------------|------------|----------|-------------|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| `percentage`  | yes        | `Number` | `0`         | `percentage={10}`                                                                  | the percentage the donut chart should show                                      |
| `colorOn`     | yes        | `String` | `null`      | `colorOn="#ff0000"`                                                                | the _color_ that matches with the `percentage` on the chart                     |
| `colorOff`    | yes        | `String` | `null`      | `colorOff="#ffff00"`                                                               | the _color_ that matches the _rest_ of the donut part on the chart              |
| `labelOn`     | yes        | `String` | `null`      | `labelOn="On"`                                                                     | the _text_ will be shown with the `percentage` on the chart                     |
| `labelOff`    | yes        | `String` | `null`      | `labelOff="Off"`                                                                   | the _text_ will be shown with the _rest_ of the donut part on the chart         |
| `circleColor` | yes        | `String` | `"#ffffff"` | `circleColor="#444444"`                                                            | the _color_ the _circle_ should have on the middle of the donut chart           |
| `labelStyle`  | no         | `Object` | `{}`        | ``` labelStyle={{    off: {,fontSize: '16px',},    on: {,fontSize: '18px',} }} ``` | `styleObject` passed to the labels  of the donut chart                          |
| `textStyle`   | no         | `Object` | `{}`        |  ``` textStyle={{    color: '#fff', }} ```                                         | `styleObject` passed to the explanation text of the donut chart                 |
| `baseClass`   | no         | `String` | `null`      | ``` baseClass={styles.chartBase} ```                                               | Providing a `baseClass` will be applied on every `domNode` the donut chart has. See more at the [`styleing`]() section |

## Styleing

By providing the `baseClass` props, you are able to customize the chart as you wish, with `CSS`. 

Here is a quick example how it works:

```javasscript
<DonoutChart
	percentage={30}
    ...
    baseClass="customize"
/>
```

Given the `customize` as the value of `baseClass` the following will happen. 

The `donutContainer` class will be assigned another class, which is the `baseClass` prop itself. 

```
<div class="donutContainer customize">
    ...
</div>
```

The rest of the `dom` will be suffixed with the `baseClass` prop's value. 

| className        | extended                                                 |
|------------------|----------------------------------------------------------|
| `donutContainer` | `className={`donutContainer ${baseClass}`}`              |
| `details`        | `className={`details details--${baseClass}`}`            |
| `indicator off`  | `className={`indicator off indicator-off-${baseClass}`}` |
| `indicator on`   | `className={`indicator on, indicator-on-${baseClass}`}`  |


## contribution

If you encountered an issue, or a bug, or want to request a feature, please use the [`issues`](https://github.com/zilahir/react-donut-chart/issues) section. 

## screenshots

## dependencies 

This package depends on [`styled-components`](https://github.com/styled-components)

## licence