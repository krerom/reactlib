[**reactlib**](../README.md)

***

[reactlib](../README.md) / Toast

# Function: Toast()

> **Toast**(`props`): `any`

Defined in: Toast/Toast.jsx:29

Toast notification component.

Displays temporary feedback messages with auto-dismiss support,
manual close control, and simple success/error styling.

Includes built-in exit animation handling before unmounting.

## Parameters

### props

#### duration?

`number` = `4000`

Auto-dismiss duration in milliseconds.

#### message

`string`

Text content displayed in the toast.

#### onClose?

() => `void`

Callback fired after toast exit animation completes.

#### position?

`"top"` \| `"bottom"` = `"top"`

Screen position of the toast container.

#### type?

`"success"` \| `"error"` = `"success"`

Visual state of the toast.

## Returns

`any`

## Example

```ts
<Toast
  message="Saved successfully"
  type="success"
  duration={3000}
  position="top"
  onClose={() => setToast(null)}
/>
```
