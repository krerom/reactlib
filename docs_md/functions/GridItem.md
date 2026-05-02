[**reactlib**](../README.md)

***

[reactlib](../README.md) / GridItem

# Function: GridItem()

> **GridItem**(`props`): `any`

Defined in: Layout/Layout.jsx:136

Grid item component for use inside Grid.

Controls column and row spanning across responsive breakpoints.

## Parameters

### props

#### as?

`any` = `"div"`

Root element type.

#### children

`ReactNode`

Item content.

#### className?

`string` = `""`

Additional class names.

#### rowSpan?

`1` \| `2` \| `3` \| `4` \| `5` \| `6`

Row span.

#### span?

`"full"` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` = `1`

Column span (desktop).

#### spanMd?

`"full"` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12`

Column span (tablet).

#### spanSm?

`"full"` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12`

Column span (mobile).

#### style?

`any`

Inline styles.

## Returns

`any`

## Example

```ts
<GridItem span={6} spanMd={12}>
  Content
</GridItem>
```
