[**reactlib**](../README.md)

***

[reactlib](../README.md) / Container

# Function: Container()

> **Container**(`props`): `any`

Defined in: Layout/Layout.jsx:25

Container component for page layout.

Provides a responsive max-width wrapper with optional centering and padding.
Commonly used as the top-level layout constraint.

## Parameters

### props

#### as?

`any` = `"div"`

Root element type.

#### center?

`boolean` = `true`

Horizontally center the container.

#### children

`ReactNode`

Inner content.

#### className?

`string` = `""`

Additional class names.

#### pad?

`boolean` = `true`

Apply horizontal padding.

#### size?

`"md"` \| `"sm"` \| `"lg"` \| `"xl"` \| `"full"` = `"lg"`

Max-width preset.

#### style?

`any`

Inline styles.

## Returns

`any`

## Example

```ts
<Container size="md">
  <p>Content</p>
</Container>
```
