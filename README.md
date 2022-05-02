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
You can see the components and test their different options using [Storybook](https://6256f0c55149c8003a14e401-cvzgvhtjyd.chromatic.com/
).

### Button
##### Attributes:

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| as | String | "regular", "outlined", "text" | "regular" | False |
| width | Number | - | 10 | False |
| height | Number | - | 3 | False |
| padding | Number | - | 0.2 | False |
| background | String | - | Theme.background.dark | False |
| color | String | - | "none" | False |
| onclick | Function | - | - | False |

##### Example:
```js
import { Button, Typography, Theme } from '@dev-club/ds';

function foo() {
    const log = () => {
        console.log('clicked!');
    };
    
    return (
        <Button as="outlined" onclick={log}>
            <Typography as='p' color={Theme.typograpghy.yellow}>
                Click Here!
            </Typography>
        </Button>
    )
};
```

### ButtonCTA
##### Attributes:

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| size | String | "regular", "mobile" | "regular" | False |

##### Example:
```js
import { ButtonCTA, Typograpghy } from '@dev-club/ds';

function foo() {
    return (
        <Button size="mobile">
            <Typograpghy as={p}>
                Click Here!
            </Typograpghy>
        </Button>
    )
};
```

### Typography
##### Attributes:

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| as | String | "p", "h1"-"h6" | - | True |
| color | String | - | - | True |
| weight | Number | - | - | False |
| size | Number | - | - | False |

##### Example:
```js
import { Typography, Theme } from '@dev-club/ds';

function foo() {
    return (
        <Typography as="h1"  color={Theme.typography.dark}>
            Topography is the study of the land surface.
        <Typography />
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
        {text: 'Home', url: 'https://www.npmjs.com/package/@dev-club/ds'},
        {text: 'About Us', url: 'https://www.npmjs.com/package/@dev-club/ds'}
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
| width | Number | - | 12.222 | False |
| height | Number | - | 14.222 | False |
| color | String | - | Theme.background.yellow | False |
| border | String | - | Theme.background.light | False |

##### Example:
```js
import { Card } from "@dev-club/ds";

function foo() {
   return (
      <Card width={12.222} height={14.222} color="#000000" border="#FFFFFF">
        <Typography as="h1"  color="black">
            Topography is the study of the land surface
        <Typography />
      </Card>
   );
}
```
### Tabs
#### Attributes:
| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| tabs | Array | - | - | True |
| width | Number | - | - | True |
| height | Number | - | - | True |
| background | String | - | Theme.background.light | False |
| selectedbackground | String | - | Theme.background.yellow | False |
| border | String | - | "none" | False |
| color (font) | String | - | Theme.typography.white | False |
| selectedcolor (font) | String | - | Theme.typograpghy.dark | False | 
| gap | Number | - | 1(rem) | False |
| direction | String | "row", "column" | "row" | False |
| space | Boolean | true, false | true | False |
| fontsize | Number | - | 1 (rem) | False |

##### Example:
```js
import { Tabs, ButtonCTA } from "@dev-club/ds";
    
function foo() {
    const arr = [
        {text: 'Tab 1', content: 'content 1'},
        {text: 'Tab 2', content: <ButtonCTA text="Click Here"/>}
    ]
    return (
        <Tabs tabs={arr} width={10} height={6} />
   );
}
```

### Theme
##### Options:
###### Background
- ![#040413](https://via.placeholder.com/15/040413/000000?text=+) `Theme.background.dark - #040413`
- ![#0A0A1B](https://via.placeholder.com/15/0A0A1B/000000?text=+) `Theme.background.light - #0A0A1B`
- ![#F6C927](https://via.placeholder.com/15/F6C927/000000?text=+) `Theme.background.yellow - #F6C927`
###### Typography
- ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) `Theme.typography.white - #FFFFFF`
- ![#F6C927](https://via.placeholder.com/15/F6C927/000000?text=+) `Theme.typography.yellow - #F6C927`
- ![#0A0A1B](https://via.placeholder.com/15/0A0A1B/000000?text=+) `Theme.typography.dark - #0A0A1B`
- ![#0E0E28](https://via.placeholder.com/15/0E0E28/000000?text=+) `Theme.typography.darker - #0E0E28`
###### Border
- ![#1F1F53](https://via.placeholder.com/15/1F1F53/000000?text=+) `Theme.border.blue - #1F1F53`

##### Example:
```js
import { Theme, Typography } from '@dev-club/ds';

function foo() {
    return (
        <Typography as="h1"  color={Theme.typography.dark}>
            Topography is the study of the land surface.
        <Typography />
};
```

### GlobalStyles
This component includes CSS that should be used inside App.css.

---

## License
[MIT](https://choosealicense.com/licenses/mit/)
