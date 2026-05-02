[**reactlib**](../README.md)

***

[reactlib](../README.md) / NavHeader

# Function: NavHeader()

> **NavHeader**(`props`): `any`

Defined in: NavHeader/NavHeader.jsx:42

Responsive navigation header with desktop links and mobile drawer.

Handles:
- Sticky positioning
- Scroll-based styling
- Mobile menu (overlay + drawer)
- Active link state (internal + URL sync)

Supports both controlled (`links[].active`) and automatic active state
via URL hash/path detection.

## Parameters

### props

#### links

`Object`[] = `[]`

Navigation items.

#### logo

`ReactNode`

Brand element rendered on the left.

## Returns

`any`

## Example

```ts
<NavHeader
  logo={<strong>MyLib</strong>}
  defaultActive="#components"
  links={[
    { label: "Home", href: "#" },
    { label: "Components", href: "#components" },
    { label: "GitHub", href: "https://github.com", external: true }
  ]}
  actions={<Button size="sm">Download</Button>}
/>
```
