## 요구 사항
1. 타이머

- [1, 6. 타이머]는 재활용이 가능한 Component로 구성합니다.
- [1. 타이머]는 “ko-KR” 지역시간 표기법으로 나타냅니다. (예> 2021년 7월 20일 화요일)
- [6. 타이머]는 “en-US” 지역시간 표기법으로 나타냅니다. (예> Tuesday July 20, 2021)
- 한국 표준시를 기준으로 나타냅니다.

2. 입력

- 사용자의 입력을 받습니다.
- 입력 데이터의 형식은 “숫자,숫자,숫자…” 입니다. (예> 1,2,3,4)
- 잘못된 형식의 입력데이터는 예외처리하여 사용합니다.

3. 시작

- 사용자가 버튼을 누르면 소팅이 시작됩니다.
- [4. 결과 필드]에 바로 노출 되고 3초 후에 [5. 결과 필드]에 결과가 노출 됩니다.

4. 결과

- 결과 데이터의 형식은 “숫자, 숫자, 숫자…” 입니다. (예> 1, 2, 3, 4)
- [4. 결과 필드]에서는 오름차순 결과를 나타냅니다.
- [5. 결과 필드]에서는 내림차순 결과를 나타냅니다.
- 알고리즘은 소팅알고리즘을 사용하지 않고, 본인이 구현할 수 있는 정렬 방법으로 직접 구현합니다.

5. 기타 조건

- ReactJS로 구현합니다.
- 과제를 위한 추가적인 패키지 설치는 자유입니다.
- 레이아웃은 그림을 참고하되, UI 및 UX는 작성자 편의에 맞게 구현합니다.
- 상기 조건을 제외한 모든 부분들은 작성자 편의에 맞게 구현합니다.
---
## 구현 목록
1. 정렬 기능 구현  
이승열, 노찬욱
   
2. 입력 폼 구현  
이승열

3. 예외 처리 구현  
이승열, 노찬욱
   
4. 타이머 컴포넌트 구현   
이승열
   
5. 국가 별 시간 표기법 포맷팅 구현  
이승열
6. 3초후 내림차순 렌더링 구현  
노찬욱
   
7. 스타일  
노찬욱
---
## 실행
```
    npm install
    npm start
```
[npm download](https://nodejs.org/en/)
---

## 배포

netlify 를 이용하여 배포

[solar - connect ](https://dazzling-pike-eca1ac.netlify.app/) https://dazzling-pike-eca1ac.netlify.app/

##시연

![정상작동](https://user-images.githubusercontent.com/70367265/129677940-7f0b2807-8c7a-4376-a0e6-88d56f1867e0.gif)

예외 처리
![예외](https://user-images.githubusercontent.com/70367265/129695092-cfcec4e0-1251-4f99-b7b0-92639284eb6a.gif)


## 참조
[기본 정렬 알고리즘](https://velog.io/@young_mason/Algorithm-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Sorting-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Basic%ED%8E%B8)

[퀵정렬](https://www.zerocho.com/category/Algorithm/post/57f72d415141fc5fe4f4ca8b)

[퀵 정렬 구현](https://im-developer.tistory.com/135)
