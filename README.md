# FE

프론트 리포지토리

개발 환경 세팅

git clone git@github.com:me-coldrain/FE.git

git remote set-url origin git@github.com:me-coldrain/FE.git

yarn

> node version 16.15.1 사용하세요 next.js 호환 문제

nvm use 16.15.1/
install 없으면 인스톨/
nvm install 16.15.1

yarn dev -> 개발환경

yarn build -> 빌드

yarn start

---

## PWA

적용 완료

---

## react.js

---

## typescript

---

## jest

https://haranglog.tistory.com/28

적용하고 폴더 하나씩 잡고 테스트 코드 작성하면 좋을 것 같습니다.

---

## lint

적용 완료
eslint.js example
https://github.com/saseungmin/yarn-berry-example/blob/main/.eslintrc.js

---

## github-actions

미적용

---

## Next.js

[Next.js](https://nextjs.org/)

---

---

errors

if not found module error,

try

yarn install --check-files

try

yarn cache clean

### header 관리

Header.component.tsx에서 backBtn 을 원치 않는 url path name을 추가하시면 됩니다.

ex) "/login" 에서는 backBtn이 없었으면 한다. STACKS에 추가

~~showHeader도 마찬가지로 같은 방식으로 적용됩니다.~~

~~Header의 스타일이나 컨텐츠를 바꾸고 싶을 때에는 \_app.tsx에서 제거하고 사용~~

### svg 색 변경 모듈

[svg 색 변경](https://codepen.io/sosuke/pen/Pjoqqp)

### question.component.tsx

기본 레이아웃 참고하시면 됩니다.

### 글자 레이아웃

main.scss 참고

title 메인 파란글씨 <h1> 태그 사용

주석 비슷한 grey <h5> 태그 사용

## SafeArea component

main 태그 밖에 헤더 부분을 구현할 때에 필요

<>
<SafeArea />
{children1} // this will be header

<main>
{children2}
</main>
</>
