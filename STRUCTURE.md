### 1. 프로그램 간략한 구조 스케치 - 피그잼 워크플로우

![워크플로우.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/2559a45c-8974-4d28-968f-5f65fa216b81/8732fbe8-e062-4f08-837c-26d272acb8e4/%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.png)

### 2. 객체, 절차, 함수의 이름 나열 + 간단한 설명

### 김예지 - BE

- 회원가입시 클라이언트에게서 ID와 URL 받아서 데이터베이스에 저장

```java
public static MemberDTO toMemberDTO(MemberEntity memberEntity) {
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setId(memberEntity.getId());
        memberDTO.setMemberURL(memberEntity.getMemberURL());

        return memberDTO;
    }
```

- 로그인시 데이터베이스에 있는 ID인지 확인 후 결과 리턴

```java
public String login(@ModelAttribute MemberDTO memberDTO, HttpSession session) {
        MemberDTO loginResult = memberService.login(memberDTO);
        if (loginResult != null) {
            // login 성공
            session.setAttribute("loginId", loginResult.getId());
            return "main";
        } else {
            // login 실패
            return "login";
        }
    }
```

### 김정주 - 메모장 쓰기 / 보내기

- 깃허브 이슈 데이터 가져옴

```jsx
async function getData() {
}
```

- Add Memo 버튼 누르면 메모 생성 페이지로 이동

```jsx
function handleAddMemo(){
}
```

### 유지희 - 메모장 열기 / 삭제

- 메모장 열기 : 생성된 메모장 내용 가져오기 (POST)

```jsx
async function openMemo(){}
```

- 메모장 삭제 : 생성된 메모장 삭제 요청 보내기 (DELETE)

```jsx
async function deleteMemo(){}
```

### 홍수지 - 회원가입 / 로그인

- 로그인: Login 버튼 누르면 ID 맞으면 memo 페이지로 이동, 틀리면 alert
    
    ```jsx
    function Login(){
    }
    ```
    
- 회원가입: ID와 git repository URL 입력 받고 post, 그리고 Login 창으로 이동,
칸이 다 안채워져있으면 alert 뜸
    
    ```jsx
    function Register(){
    }
    ```
    

### 3. 뼈대 코드 개발 이슈 생성

- 1. ✅ui - 피그마 ui 이미지
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2559a45c-8974-4d28-968f-5f65fa216b81/ef731a5a-8e14-4e78-9515-67173a107120/Untitled.png)
    
- 2. ✅작업 분배
    
    ### FE
    
    수지 : 회원가입/로그인
    정주 : 메모장 쓰기 / 메모장 POST
    지희 : 메모장 열기 / 메모장 DELETE
    
    ### BE - 예지
    
    회원가입/로그인 데이터베이스 구축
    깃허브 이슈 받아오기
