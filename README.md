# Ch 08. Next.js

## 03. Next.js 기본 1-1

### next/link vs a

next/link 는 필요한 데이터만 fetch 해온다. 그리고 미리 그 페이지에 대한 데이터를 fetch 해 와서 빠른 전환을 보여준다.

a 는 화면 전체를 새로 로드한다.

## 03. Next.js 기본 1-2

### next/image vs img

next/image 는 사이즈 조절 및 최적화를 자동으로 해준다.

<!--  -->

img 는 리소스 파일 그대로를 보여준다.

## 04. Next.js 기본 2-1

### [Pre-rendering](https://nextjs.org/learn/basics/data-fetching)

hydration: 페이지가 브라우저에 로드되고 자바스크립트 코드가 실행되면서 페이지가 인터렉티브하게 동작할 상태가 되는 과정

Next.js 는 기본적으로 모든 페이지가 pre-rendering 한다. 단, env=development 인 경우 무조건 each request 마다 빌드한다.

## 04. Next.js 기본 2-2

### SSG

Build time 에 서버에서만 동작

### SSR

Request time 에 동작 / TTFB Slow

### CSR

Request time 이후 동작 SWR
