# 습관 추적앱

배포 주소: [Deployment]()

## 구현 사항

- [] 새로운 습관 추가: 사용자들이 습관 이름과 빈도(예: 매일, 매주, 맞춤 날짜)를 지정할 수 있습니다.
- [] 진행 상황 추적: 진행 상황 막대 또는 체크리스트를 표시해 사용자가 해당 습관을 하루/주 단위로 완료했는지 체크할 수 있습니다.
- [] 습관 스트릭 확인: 사용자가 습관을 연속으로 완료한 일수를 표시합니다.
- [] 습관 추가/수정:
  - 습관 이름과 빈도를 입력하는 화면을 제공하여 새로운 습관을 추가할 수 있습니다.
  - 기존의 습관을 수정할 수 있도록 합니다.
- [] 습관 완료 표시:
  - 오늘의 모든 습관을 보여주는 홈 화면을 제공합니다.
  - 사용자가 습관을 완료했을 때 탭하여 "완료" 상태로 표시할 수 있습니다.
- [] 습관 스트릭 및 진행 상황:
  - 각 습관에 대해 연속으로 완료한 일수를 표시합니다.
  - 사용자가 일정 기간 동안 얼마나 자주 습관을 완료했는지에 따라 진행 상황 막대를 표시합니다. (예: 한 주 동안 매일)

## 버전

- Node >= 20 (20.3.0)
- Npm >= 9 (9.6.7)

## 설치방법

```javascript
// 패키지 파일 다운로드
npm i
// 설치되지 않는 경우
npm install --legacy-peer-deps
// 실행
npm start
// 혹은
npm run start
```

## CI / CD 배포방법

- main 브랜치 머지시 자동 배포

## 폴더구조

```

```

## Eslint

- VsCode 확장 탭 내 Prettier ESLint 설치
- 작동되지 않는다면 User setting.json에 다음을 설정

```json
{
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  "editor.formatOnType": false,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnSaveMode": "file",
  "files.autoSave": "onFocusChange",
  "vs-code-prettier-eslint.prettierLast": false
}
```

## 코드스니펫 설정 (선택)

### 설정방법

- 상단 애플로고 옆 Code 클릭 (Mac 기준 VsCode)
- 기본설정 내 사용자 코드 조각 구성 선택
- typescript.json / typescriptreact.json 내 아래 코드를 추가 혹은 설정

```
{
  "web-ui text component": {
			"prefix": "wtext",
			"body": [
				"<Text",
				"  fontSize=$1",
				"  fontWeight=$2",
				"  color={COLORS.$3}",
				">",
				"  $4",
				"</Text>"
			]
		},
  "web-ui divider component": {
			"prefix": "wdivider",
			"body": [
				"<Divider",
				"  horizontal={$1}",
				"  vertical={$2}",
				"  backgroundColor={$3}",
				"/>",
			]
		},
}
```

### 사용법

- 필요한 컴포넌트의 prefix를 입력

```
// ex text component
wtext
```

- 아래와 같이 자동완성 되며 import 하여 사용

```
    <Text
      fontSize=
      fontWeight=
      color={COLORS.}
    >

    </Text>
```
