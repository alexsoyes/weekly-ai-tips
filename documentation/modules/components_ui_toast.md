[Weekly AI Tips](../README.md) / [Modules](../modules.md) / components/ui/toast

# Module: components/ui/toast

## Table of contents

### Type Aliases

- [ToastActionElement](components_ui_toast.md#toastactionelement)
- [ToastProps](components_ui_toast.md#toastprops)

### Functions

- [Toast](components_ui_toast.md#toast)
- [ToastAction](components_ui_toast.md#toastaction)
- [ToastClose](components_ui_toast.md#toastclose)
- [ToastDescription](components_ui_toast.md#toastdescription)
- [ToastProvider](components_ui_toast.md#toastprovider)
- [ToastTitle](components_ui_toast.md#toasttitle)
- [ToastViewport](components_ui_toast.md#toastviewport)

## Type Aliases

### ToastActionElement

Ƭ **ToastActionElement**: `React.ReactElement`\<typeof [`ToastAction`](components_ui_toast.md#toastaction)\>

#### Defined in

[components/ui/toast.tsx:114](https://github.com/alexsoyes/weekly-ai-tips/blob/b51216ee36bb903ccd72a472afbc8e01da2cc631/components/ui/toast.tsx#L114)

___

### ToastProps

Ƭ **ToastProps**: `React.ComponentPropsWithoutRef`\<typeof [`Toast`](components_ui_toast.md#toast)\>

#### Defined in

[components/ui/toast.tsx:112](https://github.com/alexsoyes/weekly-ai-tips/blob/b51216ee36bb903ccd72a472afbc8e01da2cc631/components/ui/toast.tsx#L112)

## Functions

### Toast

▸ **Toast**(`props`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Omit`\<`ToastProps` & `RefAttributes`\<`HTMLLIElement`\>, ``"ref"``\> & `VariantProps`\<(`props?`: ConfigVariants\<\{ variant: \{ default: string; destructive: string; }; }\> & ClassProp) => `string`\> & `RefAttributes`\<`HTMLLIElement`\> |

#### Returns

`ReactNode`

#### Defined in

[components/ui/toast.tsx:40](https://github.com/alexsoyes/weekly-ai-tips/blob/b51216ee36bb903ccd72a472afbc8e01da2cc631/components/ui/toast.tsx#L40)

___

### ToastAction

▸ **ToastAction**(`props`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Omit`\<`ToastActionProps` & `RefAttributes`\<`HTMLButtonElement`\>, ``"ref"``\> & `RefAttributes`\<`HTMLButtonElement`\> |

#### Returns

`ReactNode`

#### Defined in

[components/ui/toast.tsx:55](https://github.com/alexsoyes/weekly-ai-tips/blob/b51216ee36bb903ccd72a472afbc8e01da2cc631/components/ui/toast.tsx#L55)

___

### ToastClose

▸ **ToastClose**(`props`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Omit`\<`ToastCloseProps` & `RefAttributes`\<`HTMLButtonElement`\>, ``"ref"``\> & `RefAttributes`\<`HTMLButtonElement`\> |

#### Returns

`ReactNode`

#### Defined in

[components/ui/toast.tsx:70](https://github.com/alexsoyes/weekly-ai-tips/blob/b51216ee36bb903ccd72a472afbc8e01da2cc631/components/ui/toast.tsx#L70)

___

### ToastDescription

▸ **ToastDescription**(`props`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Omit`\<`ToastDescriptionProps` & `RefAttributes`\<`HTMLDivElement`\>, ``"ref"``\> & `RefAttributes`\<`HTMLDivElement`\> |

#### Returns

`ReactNode`

#### Defined in

[components/ui/toast.tsx:100](https://github.com/alexsoyes/weekly-ai-tips/blob/b51216ee36bb903ccd72a472afbc8e01da2cc631/components/ui/toast.tsx#L100)

___

### ToastProvider

▸ **ToastProvider**(`props`, `context?`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ToastProviderProps` |
| `context?` | `any` |

#### Returns

`ReactNode`

#### Defined in

[components/ui/toast.tsx:7](https://github.com/alexsoyes/weekly-ai-tips/blob/b51216ee36bb903ccd72a472afbc8e01da2cc631/components/ui/toast.tsx#L7)

___

### ToastTitle

▸ **ToastTitle**(`props`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Omit`\<`ToastTitleProps` & `RefAttributes`\<`HTMLDivElement`\>, ``"ref"``\> & `RefAttributes`\<`HTMLDivElement`\> |

#### Returns

`ReactNode`

#### Defined in

[components/ui/toast.tsx:88](https://github.com/alexsoyes/weekly-ai-tips/blob/b51216ee36bb903ccd72a472afbc8e01da2cc631/components/ui/toast.tsx#L88)

___

### ToastViewport

▸ **ToastViewport**(`props`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Omit`\<`ToastViewportProps` & `RefAttributes`\<`HTMLOListElement`\>, ``"ref"``\> & `RefAttributes`\<`HTMLOListElement`\> |

#### Returns

`ReactNode`

#### Defined in

[components/ui/toast.tsx:9](https://github.com/alexsoyes/weekly-ai-tips/blob/b51216ee36bb903ccd72a472afbc8e01da2cc631/components/ui/toast.tsx#L9)
