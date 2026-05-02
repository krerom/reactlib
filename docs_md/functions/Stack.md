[**reactlib**](../README.md)

***

[reactlib](../README.md) / Stack

# Function: Stack()

> **Stack**(`props`): `any`

Defined in: Layout/Layout.jsx:264

Stack layout component for vertical spacing.

Arranges children vertically with configurable spacing and optional dividers.

## Parameters

### props

#### align?

`"start"` \| `"center"` \| `"end"` \| `"stretch"` = `"stretch"`

Horizontal alignment.

#### as?

`any` = `"div"`

Root element type.

#### children

`ReactNode`

Stack content.

#### className?

`string` = `""`

Additional class names.

#### dividers?

`boolean` = `false`

Show dividers between items.

#### gap?

`"md"` \| `"sm"` \| `"lg"` \| `"xl"` \| `"none"` \| `"xs"` = `"md"`

Spacing between items.

#### reverse?

`boolean` = `false`

Reverse order.

#### style?

`any`

Inline styles.

## Returns

`any`

## Example

```ts
<Stack gap="sm" dividers>
  <Item />
  <Item />
</Stack>
```
