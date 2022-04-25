# @devClub/ds

Colman Dev Club Design System
---

[NPM Package](https://www.npmjs.com/package/@dev-club/ds)

## Installation

```
npm install @dev-club/ds
```

## Usage
```js
// import a component
import { Example } from '@dev-club/ds';

function foo() {
    return (
        // use the imported component
        <Example />
    )
};
```

## Components
You can see the components and test their different options using [Storybook](https://6256f0c55149c8003a14e401-xjbjxabejy.chromatic.com/
).

### Button
##### Attributes:

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| label | String | - | - | True |
| variant | String | "regular", "outlined", "text" | "regular" | False |
| size | String | "small", "medium", "large", "extraLarge" | "medium" | False |
| background | String | - | - | False |
| color | String | - | - | False |

##### Example:
```js
import { Button } from '@dev-club/ds';

function foo() {
    return (
        <Button variant="outlined" label="Click Here!" />
    )
};
```

### ButtonCTA
##### Attributes:

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| label | String | - | - | True |
| size | String | "regular", "mobile" | "regular" | False |

##### Example:
```js
import { ButtonCTA } from '@dev-club/ds';

function foo() {
    return (
        <Button label="Click Here!" size="mobile" />
    )
};
```

### Typography
##### Attributes:

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| label | String | - | - | True |
| variant | String | "p", "h1"-"h6" | - | True |
| color | String | - | - | True |
| weight | Number | - | - | False |
| size | Number | - | - | False |

##### Example:
```js
import { Typography } from '@dev-club/ds';

function foo() {
    return (
        <Typography variant="h1" label="Topography is the study of the land surface" color="black" />
    )
};
```

### Navbar
##### Attributes:

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| items | Array | - | - | True |
| direction | String | "row", "column" | "row" | False |
| gap | Number | - | 1 | False |

##### Example:
```js
import { Navbar } from '@dev-club/ds';

function foo() {
    const arr = [
        {label: 'Home', url: 'https://www.npmjs.com/package/@dev-club/ds'},
        {label: 'About Us', url: 'https://www.npmjs.com/package/@dev-club/ds'}
    ];
    return (
        <Navbar items={arr} gap={2} />
    )
};
```
### Card
#### Attributes:
| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| width | String | - | 12.222 | False |
| height | String | - | 14.222 | False |
| color | String | - | Theme.background.yellow | False |
| border | String | - | Theme.background.light | False |

##### Example:
```js
import { Card } from "@dev-club/ds";

function foo() {
   return (
      <Card width="12.222" height="14.222" color="#000000" border="#FFFFFF">
         <Typography variant="h1" label="Topography is the study of the land surface" color="black" />
      </Card>
   );
}
```
### Theme
##### Options:

| Option | hex |
| ------ | --- |
| Theme.background.dark | #040413 |
| Theme.background.light | #0A0A1B |
| Theme.background.yellow | #F6C927 |
| Theme.typography.white | #FFFFFF | 
| Theme.typography.yellow | #F6C927 |
| Theme.typography.dark | #0A0A1B |
| Theme.typography.darker | #0E0E28 |

##### Example:
```js
import { Theme } from '@dev-club/ds';

function foo() {
    return (
        <Button label="Click Here!" color={Theme.background.yellow}/>
    )
};
```

### GlobalStyles
This component includes CSS that should be used in all components.

##### Example:
```js
import { Button, GlobalStyles } from '@dev-club/ds';

function foo() {
    return (
        <>
            <GlobalStyles />
            <Button variant="outlined" label="Click Here!" />
        <>
    )
};
```

---

## License
[MIT](https://choosealicense.com/licenses/mit/)