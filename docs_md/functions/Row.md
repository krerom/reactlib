[**reactlib**](../README.md)

***

[reactlib](../README.md) / Row

# Function: Row()

> **Row**(`props`): `any`

Defined in: Layout/Layout.jsx:189

Row layout component using Flexbox.

Provides horizontal alignment with optional wrapping and responsive stacking.

## Parameters

### props

#### align?

`"start"` \| `"center"` \| `"end"` \| `"stretch"` \| `"baseline"` = `"center"`

Cross-axis alignment.

#### as?

`any` = `"div"`

Root element type.

#### children

`ReactNode`

Row content.

#### className?

`string` = `""`

Additional class names.

#### collapseAt?

`"md"` \| `"sm"`

Stack vertically below breakpoint.

#### gap?

`"md"` \| `"sm"` \| `"lg"` \| `"xl"` \| `"none"` \| `"xs"` = `"md"`

Spacing between items.

#### justify?

`"start"` \| `"center"` \| `"end"` \| `"between"` \| `"around"` \| `"evenly"` = `"start"`

Main-axis alignment.

#### reverse?

`boolean` = `false`

Reverse direction.

#### style?

`any`

Inline styles.

#### wrap?

`boolean` = `true`

Allow wrapping.

## Returns

`any`

## Example

```ts
<Row justify="between" collapseAt="sm">
  <Logo />
  <Nav />
</Row>
```
