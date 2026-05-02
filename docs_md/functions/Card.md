[**reactlib**](../README.md)

***

[reactlib](../README.md) / Card

# Function: Card()

> **Card**(`props`): `any`

Defined in: Card/Card.jsx:24

Card container component for grouping related content.

Supports visual variants, padding control, and optional hover interaction.
Typically used together with CardHeader, CardBody, and CardFooter.

## Parameters

### props

#### as?

`any` = `"div"`

Root element type.

#### children

`ReactNode`

Card content.

#### className?

`string` = `""`

Additional class names.

#### hover?

`boolean` = `false`

Enables hover elevation effect.

#### padding?

`"md"` \| `"sm"` \| `"lg"` \| `"none"` = `"md"`

Internal spacing.

#### variant?

`"flat"` \| `"elevated"` \| `"outline"` = `"elevated"`

Visual style of the card.

## Returns

`any`

## Example

```ts
<Card hover variant="elevated">
  <CardBody>Content</CardBody>
</Card>
```
