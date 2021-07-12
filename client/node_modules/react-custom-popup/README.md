# react-custom-popup

react-custom-popup is a fully customizable React library for dealing with popups such as input-dialogs, modals, alerts, toasts.

[LIVE DEMO](https://stackblitz.com/edit/react-ts-tdf5kx?file=index.tsx)

![DEMO GIF](https://drive.google.com/uc?export=view&id=1iH2sbIVo3_tPWBQiCH6bbdMrs8i1UUO0 "Title")

## Installation

```bash
npm i react-custom-popup
```

## Usage

```jsx padded
// root component file

import {PopupProvider} from "react-custom-popup";

const App = (props) => {
    return (
        <PopupProvider>
            <App {...props}/>
        </PopupProvider>
    );
}
export default App;
```

```jsx padded
// in any other component

import {usePopup, DialogType} from "react-custom-popup";

const MyComponent = (props) => {

    const {showAlert} = usePopup();

    const buttonPressed = () => {

        showAlert({
            title: "Error",
            type: DialogType.WARNING,
            text: "A simple error alert"
        });

    }

    return (
        <button onClick={buttonPressed}></button>
    );
}
export default MyComponent;
```

```jsx padded
// outside of a component

import {PopupActions, DialogType} from "react-custom-popup";

const myFunction = () => {
    PopupActions.showToast({text: 'This is a toast', type: DialogType.WARNING})
}
```

## Available Popups

usePopup() / PopupActions expose:

*   showAlert(options:AlertOptions)
*   hideAlert()
*   showModal(component: JSX.Element, animationType: AnimationType)
*   hideModal()
*   showOptionDialog(options: OptionDialogOptions)
*   showInputDialog(options: InputDialogOptions)
*   showToast(options: ToastOptions)

### Alert Options

```typescript
interface AlertOptions {
    animationType?: AnimationType;
    outAnimationType?: OutAnimationType;
    confirmText?: string;
    containerStyle?: React.CSSProperties;
    footerStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    headerTextStyle?: React.CSSProperties;
    showCloseButton?: boolean;
    text?: string;
    textStyle?: React.CSSProperties;
    title?: string;
    type?: DialogType;
    bodyComponent?: JSX.Element;
    allowOutsideClick?: boolean;
}
```

### Option Dialog Options

```typescript
interface OptionDialogOptions {
    animationType?: AnimationType;
    outAnimationType?: OutAnimationType;
    cancelText?: string;
    confirmText?: string;
    containerStyle?: React.CSSProperties;
    footerStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    headerTextStyle?: React.CSSProperties;
    onCancel?: () => void;
    onConfirm?: () => void;
    optionButtons?: Array<OptionDialogButton>;
    showCloseButton?: boolean;
    text?: string;
    textStyle?: React.CSSProperties;
    title?: string,
    type?: DialogType;
    bodyComponent?: JSX.Element;
    allowOutsideClick?: boolean;
}

interface OptionDialogButton {
    name: string;
    onClick: () => void;
    color?: string;
}
```

### Input Dialog Options

```typescript
interface InputDialogOptions {
    animationType?: AnimationType;
    outAnimationType?: OutAnimationType;
    cancelText?: string;
    confirmText?: string;
    containerStyle?: React.CSSProperties;
    footerStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    headerTextStyle?: React.CSSProperties;
    input?: InputProps;
    inputs?: Array<InputProps>;
    onCancel?: () => void;
    onConfirm?: (result?: { [key: string]: any }) => void;
    onDismissed?: () => void;
    options?: Array<OptionDialogButton>;
    showCloseButton?: boolean;
    text?: string;
    textStyle?: React.CSSProperties;
    title?: string;
    type?: DialogType;
    allowOutsideClick?: boolean;
}

interface InputProps {
    placeholder?: string;
    label?: string;
    inputType: 'text' | 'file' | 'number' | 'image' | 'textarea' | 'date';
    name: string;
    default?: string;
    multiple?: boolean;
}
```

### Toast Options

```typescript
interface ToastOptions {
    containerStyle?: React.CSSProperties;
    customComponent?: JSX.Element;
    position?: ToastPosition;
    text: string;
    textStyle?: React.CSSProperties,
    timeoutDuration?: number;
    type: DialogType;
}
```

### Animation Options (For Dialogs Only)

```typescript
enum AnimationType {
    ZOOM_IN = 'ZOOM_IN',
    FADE_IN = 'FADE_IN',
    FLASH = 'FLASH',
    SWING = 'SWING',
    HEART_BEAT = 'HEART_BEAT',
    SLIDE_IN_LEFT = 'SLIDE_IN_LEFT',
    SLIDE_IN_RIGHT = 'SLIDE_IN_RIGHT'
}
````

### Type Options (For Both Dialogs & Toasts)
```typescript
enum DialogType {
    WARNING = 'warning',
    INFO = 'info',
    DANGER = 'danger',
    SUCCESS = 'success'
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)