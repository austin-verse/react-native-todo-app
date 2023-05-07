# Touchables

## Touch관련 Components

- **터치 이벤트**를 listen할 준비가 된 view

### TouchableOpacity

- 터치를 하면 **opacity가 내려가는 애니메이션 효과** 작동

**_props_**

- **activeOpacity**: **opacity**를 **number**로 **조작** 가능

### TouchableHighlight

- TouchableOpacity보다 더 많은 속성을 가지고 있음
- 요소를 클릭하면 **배경색 변경 가능**

**_props_**

- **onPressIn**: 손가락이 그 영역안에 들어갈 때
- **onPressOut**: 손가락이 그 영역 안에서 벗어날 때
- **onLongPress**: 손가락이 영역에 들어가서 오랫동안 머무를 때
- **onPress**: 직접 in과 out을 특정지어줄 필요 없음; press만 특정해주면 됨
- **underlayColor**: 터치할 시 바뀌는 **배경색 지정**

### TouchableWithoutFeedback

- **시각적 피드백 없이** 반응함 (UI의 변경이 없음)

### Pressable

- 더욱 많은 props
- e.g. delayLongPress prop을 통해 longPress의 기간을 따로 설정할 수 있음
