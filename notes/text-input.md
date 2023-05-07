# TextInput

- React Native에는 HTML과 다르게 input, textarea등 여러가지 타입의 input이 있지 않고 text input만 존재

```jsx
// app.js

import { TextInput } from "react-native";

<TextInput />;
```

## props

### placeholder

- HTML의 placeholder와 동일

### keyboardType

- 키보드 타입 선택

### returnKeyType

- 모바일 keyboard에서 enter를 선택할 수 있음 (e.g. done, go, next, search, send)

### secureTextEntry

- 비밀번호 형태(\*)로 입력됨

### multiline

- 텍스트처럼 줄바꿈이 일어나면 input창의 높이도 늘어남
