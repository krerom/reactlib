[**reactlib**](../README.md)

***

[reactlib](../README.md) / NavLink

# Function: NavLink()

> **NavLink**(`props`): `any`

Defined in: NavHeader/NavHeader.jsx:217

Navigation link used inside NavHeader.

Supports:
- Active state styling
- External links (opens in new tab)
- Mobile variant styling
- Custom element rendering (e.g., React Router Link)

## Parameters

### props

#### active?

`boolean` = `false`

Whether the link is active.

#### as?

`any` = `"a"`

Custom component (e.g., Link).

#### external?

`boolean` = `false`

Opens in new tab with indicator icon.

#### href

`string`

Target URL or hash.

#### label

`ReactNode`

Link text/content.

#### mobile?

`boolean` = `false`

Applies mobile-specific styles.

#### onClick?

(`event`) => `void`

Click handler.

#### props?

`Object`

Additional props forwarded to the element.

## Returns

`any`

## Examples

```ts
<NavLink label="Home" href="#" active />
```

```ts
<NavLink
  as={Link}
  to="/dashboard"
  label="Dashboard"
/>
```
