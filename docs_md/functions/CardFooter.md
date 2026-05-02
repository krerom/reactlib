[**reactlib**](../README.md)

***

[reactlib](../README.md) / CardFooter

# Function: CardFooter()

> **CardFooter**(`props`): `any`

Defined in: Card/Card.jsx:116

Card footer section.

Typically used for actions such as buttons or links.

## Parameters

### props

#### align?

`"start"` \| `"center"` \| `"end"` \| `"between"` = `"end"`

Horizontal alignment of content.

#### children

`ReactNode`

Footer content.

#### className?

`string` = `""`

Additional class names.

## Returns

`any`

## Example

```ts
<CardFooter align="between">
  <Button size="sm">Cancel</Button>
  <Button size="sm" variant="primary">Save</Button>
</CardFooter>
```
