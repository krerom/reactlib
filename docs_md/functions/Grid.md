[**reactlib**](../README.md)

***

[reactlib](../README.md) / Grid

# Function: Grid()

> **Grid**(`props`): `any`

Defined in: Layout/Layout.jsx:78

Grid layout component using CSS Grid.

Supports responsive column definitions and flexible gap control.

## Parameters

### props

#### align?

`"start"` \| `"center"` \| `"end"` \| `"stretch"`

Align items vertically.

#### as?

`any` = `"div"`

Root element type.

#### children

`ReactNode`

Grid items.

#### className?

`string` = `""`

Additional class names.

#### colGap?

`"md"` \| `"sm"` \| `"lg"` \| `"xl"` \| `"none"` \| `"xs"`

Column gap override.

#### cols?

`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` \| `"auto"` = `12`

Column count for desktop.

#### colsMd?

`"full"` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12`

Column count for tablet (≤768px).

#### colsSm?

`"full"` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12`

Column count for mobile (≤480px).

#### gap?

`"md"` \| `"sm"` \| `"lg"` \| `"xl"` \| `"none"` \| `"xs"` = `"md"`

Gap between items.

#### justify?

`"start"` \| `"center"` \| `"end"` \| `"stretch"`

Justify items horizontally.

#### rowGap?

`"md"` \| `"sm"` \| `"lg"` \| `"xl"` \| `"none"` \| `"xs"`

Row gap override.

#### style?

`any`

Inline styles.

## Returns

`any`

## Example

```ts
<Grid cols={3} colsMd={2} colsSm={1} gap="lg">
  <GridItem span={1}>A</GridItem>
  <GridItem span={1}>B</GridItem>
</Grid>
```
