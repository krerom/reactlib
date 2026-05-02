[**reactlib**](../README.md)

***

[reactlib](../README.md) / CardHeader

# Function: CardHeader()

> **CardHeader**(`props`): `any`

Defined in: Card/Card.jsx:68

Card header section.

Displays title, subtitle, and optional extra content (e.g., actions).

## Parameters

### props

#### className?

`string` = `""`

Additional class names.

#### extra?

`any`

Right-aligned content (e.g., buttons, badges).

#### subtitle?

`any`

Secondary text below title.

#### title?

`any`

Main heading.

## Returns

`any`

## Example

```ts
<CardHeader
  title="Project Oasis"
  subtitle="Luxury Travel"
  extra={<Badge>New</Badge>}
/>
```
