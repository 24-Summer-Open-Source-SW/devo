# Related works

- Find related works on this topic
    - topic
        - 메모장 리팩토링 ⇒ 개발자를 위한 개발 일지
    - related works
        - 회원가입
        - 로그인
        - 회원 정보 수정
        - 메모 생성
            - 깃허브 이슈 가져오기
            - 메모 내용: 이슈에 관한 느낀점 , 자아성찰..? 등
        - 생성된 메모 확인
        - 메모 수정
        - 메모 삭제
    
- Each member commits one related work (with link) and its summary
    - 김예지 -BE
        - 회원가입 (ID, Repository URL)
            - getter, setter method
                - https://blog.naver.com/gateway4211/223192683157
            
            getter와 setter 메서드를 사용하여 ID와 URL 값을 필드로부터 받습니다. getter와 setter는 클래스의 필드(멤버 변수)에 대한 접근을 제어하는 메서드입니다. 이를 통해 데이터 캡슐화(encapsulation)를 구현할 수 있습니다. getter 메서드는 필드의 값을 반환하고, setter 메서드는 필드의 값을 설정합니다.
            
            - mysql DB 연동
                - https://blog.naver.com/ksseo63/222499599113
            
            자바 프로그램에서 MySQL 데이터베이스에 있는 데이터를 가져오는 방법
            
            ```java
            import java.sql.Connection;
            import java.sql.DriverManager;
            import java.sql.ResultSet;
            import java.sql.SQLException;
            import java.sql.Statement;
            
            public class MySQLExample {
                public static void main(String[] args) {
                    // 데이터베이스 연결 설정
                    String url = "jdbc:mysql://localhost:3306/your_database_name";
                    String user = "your_username";
                    String password = "your_password";
            
                    // 데이터베이스 연결을 위한 객체 선언
                    Connection connection = null;
                    Statement statement = null;
                    ResultSet resultSet = null;
            
                    try {
                        // 데이터베이스 연결
                        connection = DriverManager.getConnection(url, user, password);
                        // 쿼리 실행을 위한 Statement 객체 생성
                        statement = connection.createStatement();
                        // SQL 쿼리
                        String query = "SELECT * FROM your_table_name";
                        // 쿼리 실행 및 결과 가져오기
                        resultSet = statement.executeQuery(query);
            
                        // 결과 처리
                        while (resultSet.next()) {
                            // 예시: 'id'와 'name' 열의 값을 가져오기
                            int id = resultSet.getInt("id");
                            String name = resultSet.getString("name");
                            System.out.println("ID: " + id + ", Name: " + name);
                        }
                    } catch (SQLException e) {
                        e.printStackTrace();
                    } finally {
                        // 자원 해제
                        try {
                            if (resultSet != null) resultSet.close();
                            if (statement != null) statement.close();
                            if (connection != null) connection.close();
                        } catch (SQLException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }
            
            ```
            
        - 로그인 (ID)
            - Java에서 MySQL 데이터베이스를 조회
                - https://blog.naver.com/wusemr2/222205479918
            
            ```java
            import java.sql.Connection;
            import java.sql.DriverManager;
            import java.sql.ResultSet;
            import java.sql.SQLException;
            import java.sql.Statement;
            
            public class DatabaseQueryExample {
            
                public static void main(String[] args) {
                    // 데이터베이스 연결 설정
                    String url = "jdbc:mysql://localhost:3306/your_database_name";
                    String user = "your_username";
                    String password = "your_password";
            
                    // 데이터베이스 연결을 위한 객체 선언
                    Connection connection = null;
                    Statement statement = null;
                    ResultSet resultSet = null;
            
                    try {
                        // 데이터베이스 연결
                        connection = DriverManager.getConnection(url, user, password);
            
                        // 쿼리 실행을 위한 Statement 객체 생성
                        statement = connection.createStatement();
            
                        // SQL 쿼리
                        String query = "SELECT * FROM your_table_name";
            
                        // 쿼리 실행 및 결과 가져오기
                        resultSet = statement.executeQuery(query);
            
                        // 결과 처리
                        while (resultSet.next()) {
                            // 예시: 'id'와 'name' 열의 값을 가져오기
                            int id = resultSet.getInt("id");
                            String name = resultSet.getString("name");
            
                            // 결과 출력
                            System.out.println("ID: " + id + ", Name: " + name);
                        }
                    } catch (SQLException e) {
                        e.printStackTrace();
                    } finally {
                        // 자원 해제
                        try {
                            if (resultSet != null) resultSet.close();
                            if (statement != null) statement.close();
                            if (connection != null) connection.close();
                        } catch (SQLException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }
            
            ```
            
        - githib 이슈 받아오기 - BE
            
            ```python
            import requests
            import os
            
            # GitHub 토큰 및 저장소 정보 설정
            GITHUB_TOKEN = 'your_github_token'
            REPO_OWNER = 'repo_owner'
            REPO_NAME = 'repo_name'
            
            # GitHub API 엔드포인트 설정
            GITHUB_API_URL = f'https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues'
            
            # 요청 헤더 설정
            headers = {
                'Authorization': f'token {GITHUB_TOKEN}',
                'Accept': 'application/vnd.github.v3+json'
            }
            
            # GitHub 이슈 가져오기
            response = requests.get(GITHUB_API_URL, headers=headers)
            
            if response.status_code == 200:
                issues = response.json()
            
                # 일기장 디렉토리 생성
                if not os.path.exists('journal'):
                    os.makedirs('journal')
            
                # 이슈를 파일로 저장
                for issue in issues:
                    issue_number = issue['number']
                    issue_title = issue['title']
                    issue_body = issue['body']
                    issue_created_at = issue['created_at']
                    
                    # 파일명 설정
                    filename = f'journal/issue_{issue_number}.md'
                    
                    # 파일에 이슈 내용 저장
                    with open(filename, 'w', encoding='utf-8') as f:
                        f.write(f'# {issue_title}\n')
                        f.write(f'### Created at: {issue_created_at}\n\n')
                        f.write(issue_body)
            else:
                print(f'Failed to fetch issues: {response.status_code}')
            
            ```
            
        
    - 김정주
        - github 이슈 받아오기
            - axios의 get방식을 사용하여 깃허브 이슈 api를 받아와서 모달창을 띄운다.
            - **related work**
            - [https://www.codeit.kr/tutorials/47/Axios-사용법](https://www.codeit.kr/tutorials/47/Axios-%EC%82%AC%EC%9A%A9%EB%B2%95)
            - [https://velog.io/@dusunax/AXIOS란-feat.-React](https://velog.io/@dusunax/AXIOS%EB%9E%80-feat.-React)
            
            axios란 서버에 request를 보내고 response를 받을 수 있는 라이브러리이다. 
            
            axios의 방식은 post, get, patch& put, delete가 있다.
            
            get 방식은 서버에서 어떠한 데이터를 받아서 보여줄 때 사용하며 response는 json의 형태이다. 
            
            post 방식은 새로운 리소스를 생성할 때 사용하며 로그인, 글 작성 등에 주로 사용된다.
            
            **axios get방식 사용법**✅
            
            1. 먼저 axios 패키지를 설치한다 - npm install axios
            
            ```jsx
            async function getData() {
              const res = await axios.get('apiURL');
              const data= res.data;
              return data;
            }
            ```
            
        - 메모장 쓰기
            - useNavigate를 사용하여 메모장 쓰기 완료 버튼을 누르면 메인 페이지(메모장 보기)로 이동
            - **related work**
            - router
            - https://reactrouter.com/en/main
                - **react-router는** React 어플리케이션에서 클라이언트 측 라우팅을 구현하는 핵심 라이브러리이다.✅
                    - 주요기능
                        - **Route** : 경로와 일치하는 컴포넌트를 렌더링
                        - **Switch** : 첫 번째로 일치하는 경로를 랜더링
                        - **Redirect** : 특정 경로로 리다이렉션
                        - **Link** : 네비게이션을 위한 링크
                            - 페이지를 다시 로드하지 않고 이동 → 좀 더 쉬운 상태관리 가능
                                
                                **useNavigate** : 페이지 다시 로드하며 이동 → 상태 변경사항 있을때 사용
                                
                - **react-router-dom은** ‘react-router’를 기반으로 브라우저 환경에서 사용하기 위해 추가 기능을 제공하는 라이브러리이다.
                    - 추가 기능
                        - **BrowserRouter** : HTML5의 ‘history’API를 사용하여 브라우저에서 라우팅 관리
                        - **HashRouter** : URL 해시를 사용하여 라우팅 관리
                        - **Link** : 네비게이션을 위한 링크
                        - **NavLink** : 활성화된 링크에 스타일을 추가하기 위한 컴포넌트
                        - **useParams / useLocations / useHistory / useRouteMatch**
                            
                            : 훅(Hook)을 사용하여 라우팅 관련 정보를 쉽게 접근하고 관리
                            
                
                ### 🌐 react-router / react-router-dom
                
                - **react-router 설명 / 공식 홈페이지**
                    
                    [**🔗 공식홈페이지**](https://reactrouter.com/en/main)
                    
                    > React 어플리케이션에서
                    클라이언트 측 라우팅을 구현하는 핵심 라이브러리.
                    
                    URL 경로를 기반으로 컴포넌트를 렌더링하는 기능을 제공
                    기본적인 라우팅 기능을 제공하며, 플랫폼에 종속되지 않음
                    ’ react-router ‘ 자체는 브라우저, 네이티브 그리고 다른 환경에서도 작동될 수 있게 설계됨
                    > 
                    
                    🔧 **주요 기능**
                    
                    - **Route** : 경로와 일치하는 컴포넌트를 렌더링
                    - **Switch** : 첫 번째로 일치하는 경로를 랜더링
                    - **Redirect** : 특정 경로로 리다이렉션
                    - **Link** : 네비게이션을 위한 링크
                        - 페이지를 다시 로드하지 않고 이동 → 좀 더 쉬운 상태관리 가능
                        - **useNavigate** : 페이지 다시 로드하며 이동 → 상태 변경사항 있을때 사용
                    
                    > router 세팅은 제가 다 해놓을 예정이지만 학습차원에서 한번씩 읽어주세요!!
                    > 
                - **react-router-dom 설명  / 공식 홈페이지**
                    
                    [**🔗 npm 홈페이지**](https://www.npmjs.com/package/react-router-dom)
                    
                    > ‘react-router’를 기반으로
                    브라우저 환경에서 사용하기 위해 추가 기능을 제공하는 라이브러리
                    
                    브라우저의 ‘history’API를 사용하여 URL을 관리하며, 브라우저에서 동작하는 React 어플리케이션에 적합한 기능 추가함
                    > 
                    
                    **🛠️ 추가 기능**
                    
                    - **BrowserRouter** : HTML5의 ‘history’API를 사용하여 브라우저에서 라우팅 관리
                    - **HashRouter** : URL 해시를 사용하여 라우팅 관리
                    - **Link** : 네비게이션을 위한 링크
                    - **NavLink** : 활성화된 링크에 스타일을 추가하기 위한 컴포넌트
                    - **useParams / useLocations / useHistory / useRouteMatch**
                        
                        : 훅(Hook)을 사용하여 라우팅 관련 정보를 쉽게 접근하고 관리
                        
                
                <aside>
                ❓ **react-router와 react-router-dom의 차이점**
                
                - **사용 환경**
                    - **react-router** : 플랫폼에 종속되지 않은 라우팅 라이브러리 ⇒ 다양한 환경에서 사용가능
                    - **react-router-dom** : 브라우저 환경에서 사용하기 위한 추가 기능 제공 라이브러리
                - **기능**
                    - **react-router** : 기본적인 라우팅 기능 제공 ⇒ 플랫폼에 종속적
                    - **react-router-dom** : ‘react-router’의 기능 포함. 브라우저에서 라우팅에 필요한 추가 기능 제공
                
                🌐 **react-router**
                
                > 라우팅의 기본 기능 제공 라이브러리
                > 
                
                🌏 **react-router-dom**
                
                > 브라우저 환경에서 ‘react-router-dom’을 사용하기 위한 추가 기능 제공.
                브라우저 기반 React어플리케이션에 적합
                > 
                
                🌟 브라우저에서 React 어플리케이션 개발시에는 
                      **‘react-router-dom’**을 사용하는 것이 일반적.
                
                </aside>
                
            - https://tthinks.tistory.com/entry/React-리액트에서-페이지-이동하기-Link와-useNavigate
            
            react router는 react에서 브라우저 라우팅을 관리하는 라이브러리로 이것에 Link와 useNavigate가 속한다.
            
            <Link> 컴포넌트를 사용하면 링크 태그를 클릭시 다른 페이지로 이동이 가능하며 이 때 주소 표시줄의 url이 변경된다. 
            
            **Link의 사용법**✅
            
            ```jsx
            <Link to='/something'> Click me! <Link>
            ```
            
            useNavigate는 react router 버전 6에 새롭게 추가된 hook이며 useNavigate를 사용하면 javascript 함수 내에서 다른 페이지로 이동이 가능하다.
            
            useNavigate는 주소 표시줄의  url이 변경되지 않으며 페이지만 이동한다
            
            **useNavigate 사용법**✅
            
            ```jsx
            const navigate = useNavigate();
            function handleNavi() {
            	navigate('/something');
            }
            return(
            	<button onClick={handleNavi}>go to Something Page</button>
            )
            ```
            
            - axios를 사용하여 작성한 메모글을 서버에 전송한다.
            
            **axios Post 방식 사용법**✅
            
            ```jsx
            async function postData(requestbody) {
              const res = await axios.post(
                'https://learn.codeit.kr/api/codeitmall/size-reviews/',
                requestbody
              );
            
              const reponseBody = res.data;
              return reponseBody;
            }
            ```
            
        
    - ✅유지희 - 메모장 열기 / 삭제
        - ✅**Link / react-router**
            - **Link / react-router**
                - 참고 : [https://velog.io/@jin_h2_/React-링크-연결하기-Router-Link-useNavigate-hook](https://velog.io/@jin_h2_/React-%EB%A7%81%ED%81%AC-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0-Router-Link-useNavigate-hook)
            
            ### 먼저, Routing이란
            
            > 경로를 찾는 행위
            웹 프론트에서 라우팅은 url 주소에 따라 다른 화면을 보여주는 것을 의미
            > 
            
            > html : a 태그를 통해 링크를 걸고 이동했다면
            react : 다른 방식으로 라우팅을 구현
            
            React 자체에 라우팅 기능이 없어 별도의 라이브러리를 설치하여 라우팅을 구현하고, 
            CRA 통해 만들 웹 애플리케이션은 SPA이기에 기존의 라우팅 방식과는 다르게 라우팅을 구현해야함
            > 
            
            ### React Router
            
            - Router 컴포넌트
                1. Router.js 파일을 src폴더 안 index.js 와 같은 위치에 생성 후 
                App.js , App.css 파일은 제거한다.
                2. BrowserRouter, Routes, Route 컴포넌트를 import 하고 
                import 한 3개의 컴포넌트를 이용해서 Router 컴포넌트를 구현합니다.
                    1. BrowserRouter 컴포넌트로 전체를 감싸주기
                    2. BrowserRouter 컴포넌트의 자식 요소로 Router 컴포넌트 넣기
                    3. Routes 컴포넌트의 자식 요소로 Route 컴포너느 넣기
                    
                    - BrowserRouter : 주소 변경에 대해 다양한 편의 기능을 제공해줌
                    ( ex. 페이지가 새로고침 되지 않아도 주소 변경이 가능한 기능 )
                    - Routes : 여러 Route를 감싸 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링 시켜줍니다.
                    - Route : 규칙을 설정할 수 있습니다. path에 경로를 설정하고 element는 path 속성에서 설정한 경로로 이동할 때, 어떤 컴포넌트를 보여줄 지 결정하는 속성
                    
                    ```jsx
                    // Router.js
                    
                    import React from 'react';
                    import { BrowserRouter, Routes, Route } from 'react-router-dom';
                    
                    const Router = () => {
                    	return (
                    		<BrowserRouter>                                    // 1
                          <Routes>                                             // 2
                            <Route path='/' element={<Components />} />        // 3
                          </Routes>
                        </BrowserRouter>
                    	);
                    };
                    
                    export default Router;
                    ```
                    
                    if, nav , footer처럼 경로와 상관 없이 모든 화면에 표시되어여 하는 컴포넌트가 있다면 Router 밖에 위치시켜 주세요.
                    
                    ( 우리 플젝에서 이렇게 적용해야함 )
                    
                
            - 라우팅 구현하기
                - Link 컴포넌트
                    
                    a 태그는 페이지 이동 시 매번 새로운 페이지를 요청해서 받아와 약간의 변동 사항이 있더라도 전체 화면을 매번 다시 렌더링 하여 비효율 적
                    
                    Link태그는 실제 서버에 요청을 보내지 않고 url만 변경되기에
                    실제 화면에서 바뀌어야 하는 부분만 새로 렌더링 되기 때문에 효율적임
                    
                    ⇒ 어플리케이션 내부에서 페이지를 전환 시 Link 사용, 외부 사이트로 이동시에는 a 태그 사용
                    
                    ```jsx
                    // Login.js
                    
                    import React from 'react';
                    import { Link } from 'react-router-dom';
                    
                    const Login = () => {
                      return <Link to='/signup'>회원가입</Link>;
                    };
                    
                    export default Login;
                    ```
                    
        - ✅**axios delete**
            - DELETE : 데이터 제거 / axios.delete(url, [ , config])
            - **axios 사용법**
                - axios(config)
                    - config 설정을 axios()에 전달하여 요청
                    - url 속성만 필수, 나머지 속성은 옵션
                    - method가 지정되지 않으면 GET 기본 설정
                - 기본 Params
                    - Methodes
                    - Url
                    - Data(optional)
                    - Params(optional)
                
                - **axios.delete()**
                    - delete method에는 일반적으로 body가 비어있음
                    - 그래서 형태는 get과 비슷한 형태를 띄지만 
                    한 번 delete method가 서버에 들어가게 된다면, 서버 내에서 삭제 process를 진행하게 된다.
                    
                    ```jsx
                    axios.delete('/user?ID=12345')
                      .then(response => {
                          // handle success
                          console.log(response);
                      })
                      .catch(error => {
                          // handle error
                          console.log(error);
                      })
                      .then(() => {
                          // always executed
                      });
                     
                    
                    // async await 함수를 사용할 때, 
                    try {
                    	const data = await axios.delete("url");
                    } catch {
                    	// 오류 발생시 실행
                    }
                    ```
                    
                - **React에서 Axios 사용하기**
                    - API의 스펙, 서버의 주소, credential 설정을 담당하는 API.js 파일 생성
                    - → axios의 기본 설정에 대해서 지정
                    - ⇒ 각각의 서비스에서 가져가 사용하는 형태로 구현
                    
                    1. axios의 인스턴스 생성 / async await 통신
                        
                        ```jsx
                        // API.js
                        // axios 의 인스턴스를 생성
                        import axios from 'axios';
                        
                        const API = axios.create({
                        	BASE_URL: '',
                            headers: {
                              	'Content-Type': 'application/json',
                            },
                            withCredentials: true,
                        });
                        
                        export default API;
                        ```
                        
                    2. 각각 파일에서 axyn await으로 콜백을 처리하여 통신
                        
                        ```jsx
                        import API from '../utils/API';
                        
                        export const login = async (code) => {
                            const { data } = await API.post('url',
                                  JSON.stringify(code)
                            );
                            return data;
                        }
                        ```
                        
                    3. Error Handling 을 위한 try-catch 문 사용
                        
                        ```jsx
                        import API from '../utils/API';
                        
                        export const refresh = async () => {
                            try {
                                const { data } = await API.get('url');
                            	return data;
                            } catch {
                            	// Error Handling
                            }
                        };
                        ```
                        
                    
                - **useState로 요청 관리하기**
                    - 요청에 대한 상태를 관리하기 위해서는 3가지 상태를 관리해줘야함
                    1. 요청의 결과 ( data )
                    2. 로딩 상태 ( loading )
                    3. 에러 ( error )
                    
                    ```jsx
                    import React, { useState, useEffect } from 'react';
                    import axios from 'axios';
                    
                    function Users() {
                      const [users, setUsers] = useState(null);
                      const [loading, setLoading] = useState(false);
                      const [error, setError] = useState(null);
                    
                      const fetchUsers = async () => {
                        try {
                          // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                          setError(null);
                          setUsers(null);
                          // loading 상태를 true 로 바꿉니다.
                          setLoading(true);
                          const response = await axios.get(
                            'https://jsonplaceholder.typicode.com/users'
                          );
                          setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
                        } catch (e) {
                          setError(e);
                        }
                        setLoading(false);
                      };
                    
                      useEffect(() => {
                        fetchUsers();
                      }, []);
                    
                      if (loading) return <div>로딩중..</div>; 
                      if (error) return <div>에러가 발생했습니다</div>;
                    
                    	// 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
                      if (!users) return null;
                    
                    	// 드디어 users가 성공적으로 받아와 진 상태입니다.
                      return (
                    		<>
                    	    <ul>
                    	      {users.map(user => (
                    	        <li key={user.id}>
                    	          {user.username} ({user.name})
                    	        </li>
                    	      ))}
                    	    </ul>
                    			// button을 클릭하면 API를 다시 불러와줍니다.
                    			<button onClick={ fetchUsers }>다시 불러오기<button>
                    		</>
                      );
                    }
                    
                    export default Users;
                    ```
                    
                - useReducer로 요청 관리하기
                    - useReducer로 관리할 때의 장점
                        - 로직의 재사용이 가능하다.
                        - 컴포넌트 내부의 코드가 짧아진다.
                        (but, reducer 함수의 추가로 전체적인 코드의 길이는 늘어남.)
                    
                    - reducer 작성하기
                        
                        ```jsx
                        function reducer(state, action) {
                          switch (action.type) {
                        		// 발생할 수 있는 상황 LOADING, SUCCESS, ERROR에 대한 case를 만들어 줍니다.
                        		// 로딩중 상태 업데이트
                            case 'LOADING':
                              return {
                                loading: true,
                                data: null,
                                error: null
                              };
                        		// 불러오는데에 성공했을 때는 action.data를 저장해줍니다.
                            case 'SUCCESS':
                              return {
                                loading: false,
                                data: action.data,
                                error: null
                              };
                        		// 에러가 발생하면 action.error를 전달해주겠습니다.
                            case 'ERROR':
                              return {
                                loading: false,
                                data: null,
                                error: action.error
                              };
                            default:
                              throw new Error(`Unhandled action type: ${action.type}`);
                          }
                        ```
                        
                    - useReducer 사용하기
                        
                        ```jsx
                        function Users() {
                        	// reducer 함수의 전달과 초기상태를 정의합니다.
                          const [state, dispatch] = useReducer(reducer, {
                            loading: false,
                            data: null,
                            error: null
                          });
                        
                          const fetchUsers = async () => {
                        		//시작할 때 로딩중인 상태를 만들어줍니다.
                            dispatch({ type: 'LOADING' });
                            try {
                              const response = await axios.get(
                                'https://jsonplaceholder.typicode.com/users'
                              );
                              dispatch({ type: 'SUCCESS', data: response.data });
                            } catch (e) {
                              dispatch({ type: 'ERROR', error: e });
                            }
                          };
                        
                          useEffect(() => {
                            fetchUsers();
                          }, []);
                        
                          // state.data 를 users 키워드로 조회
                          const { loading, data: users, error } = state;
                        
                          if (loading) return <div>로딩중..</div>;
                          if (error) return <div>에러가 발생했습니다</div>;
                          if (!users) return null;
                          return (
                            <>
                              <ul>
                                {users.map(user => (
                                  <li key={user.id}>
                                    {user.username} ({user.name})
                                  </li>
                                ))}
                              </ul>
                              <button onClick={fetchUsers}>다시 불러오기</button>
                            </>
                          );
                        }
                        ```
                        
                    - axios Interceptors
                        - axios 라이브러리 이용해서 서버에서 Rest API 요청을 보내거나 응답을 받는 과정에서 가로채어 일을 처리할 수 있게 해줌
                        
                        ```jsx
                        import axios from 'axios';
                        
                        const onFulfilled = (response) => {
                            // HTTP status가 2XX일 때 처리하고 싶은 로직이 있다면 여기에서 처리함
                        		// 데이터 받기에 성공했으므로 받은 response를 그대로 return 해준다.
                        		// 물론 따로 가공해도 됩니다.
                            return response;
                        };
                        const onRejected = (error) => {
                            // HTTP status가 2XX이 아닐 때 여기를 통과하게 됨
                            // return은 항상 Promise.reject(error)로 해야함
                            return Promise.reject(error);
                        };
                        axios.interceptors.response.use(onFulfilled, onRejected);
                        import axios from 'axios';
                        const customAxiosInstance = () => {
                            const axiosInstance = axios.create();
                            const onFulfilled = (response) => response;
                            const retry = (errorConfig) => {
                                return new Promise((resolve) => {
                                    setTimeout(() => {
                                        console.log('retry');
                                        resolve(axiosInstance.request(errorConfig));
                                    }, 5000);
                                });
                            }
                            const onRejected = (error) => {
                                if (error.config) {
                                    return retry(error.config);
                                }
                                
                                return Promise.reject(error);
                            };
                            axiosInstance.interceptors.response.use(
                                onFulfilled,
                                onRejected,
                            );
                            return axiosInstance;
                        };
                        try {
                            const apiRequest = customAxiosInstance();
                            const response = await apiRequest.get(API_URL);
                        } catch {
                        }
                        ```
                        
                        참고 문헌 
                        
                        [https://velog.io/@w0_0727/React-Axios-사용하기](https://velog.io/@w0_0727/React-Axios-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
                        
    - 홍수지
        - 로그인 / 회원가입
            - React icon✅
                
                [GitHub - react-icons/react-icons: svg react icons of popular icon packs](https://github.com/react-icons/react-icons)
                
                [React-icons 사용법](https://tae-jun.tistory.com/3)
                
                **React-Icons의 주요 특징**
                
                - 다양한 아이콘 세트를 제공하여, 개발자가 프로젝트에 맞는 아이콘 세트를 선택할 수 있다.
                - React 컴포넌트 형태로 아이콘을 제공하여, 기존 React 프로젝트에 쉽게 통합할 수 있다.
                - CSS를 통해 아이콘의 크기와 색상을 쉽게 조절할 수 있다.
                - Tree Shaking을 지원하므로, 사용하지 않는 아이콘은 번들에 포함되지 않아 애플리케이션의 크기를 줄일 수 있다.
                
                **React-Icons 사용 방법**
                
                1. npm install react-icons --save로 라이브러리를 설치
                2. 사용하고자 하는 아이콘 세트를 import. 예를 들어 Material Design 아이콘을 사용하려면 `import { MdHome } from 'react-icons/md';`와 같이 import한다
                3. 컴포넌트에서 아이콘을 사용, `<MdHome />`와 같이 사용할 수 있다.
        - styled-components vs emotion✅
            
            <aside>
            ❓ **성능**
            
            - emotion : 컴파일 타임에 css 생성 → 성능 최적화 ⇒ 필요한 css만 포함하여 버들 크기가 작아질 수 있음
            - styled-components : 런타임에 스타일 생성. 스타일 시트를 한번만 생성하여 재사용하여 성능 향상될 수도 있지만, 큰 규모의 어플리케이션에서는 런타임 오버헤드 발생 위험 있음
            
            ⇒ 플젝 규모를 보고 선택.
            
            하지만, 저희는 규모가 작진 않을거라 예상되기에 emotion으로 갑니다~
            
            **사용법 및 문법**
            
            - emotion : 2가지 API 제공. styled-component와 비슷한 컴포넌트 API와 CSS  객체 스타일링 제공
                - ‘@emotion/styled’
                - ‘@emotion/css’
            - styled-components : 주로 하나의 API 사용하여 컴포넌트 생성. 탬플릿 리터럴을 사용하여 스타일 정의
                - ‘styled’
            
            **기능**
            
            - emotion : ‘css’prop과 ‘ClassNames’컴포넌트 제공하여 인라인 스타일링과 CSS클래스 이름 쉽게 적용
            - styled-components : 태그된 템플릿 리터럴을 사용하여 스타일 작성. 자동으로 유일한 클래스 이름 생성하여 스타일 충돌 방지
            
            **현재 사용 현황**
            
            - emotion : 비교적 최신 라이브러리 → 빠르게 성장. / ‘styled-components’보다 더 많은 커스텀 설정과 유연성 제공
            - styled-components : 널리 사용중. 안정적, 성숙한 생태계 가짐. 널리 채택 됨
            
            ✨ **emotion과 styled-component 선택시 고려 사항**
            1️⃣ **if, 성능 최적화가 중요한 경우 ⇒ emotion**
            : emotion이 컴파일 타임 CSS생성을 통해 성능을 최적화 할 수 있으므로
            큰 규모의 어플리케이션에서 유리
            **2️⃣ 사용의 직관성 ⇒ styled-components**
            : 문법이 간단하고 이해하기 쉬움. 템플릿 리터럴을 사용하여 CSS 작성이 편리
            
            **3️⃣ 유연성과 커스터마이징 : ⇒ emotion**
            : 2가지 API와 다양한 기능 제공. 더 많은 커스터마이징이 필요한 프로젝트에 적합
            **4️⃣ 커뮤니티와 생태계(예제와 활용 정보가 많은 것) ⇒ styled-components**
            : 널리 사용되며, 많은 리소스와 예제, 플러그인을 제공. 안정적 선택지
            
            👩‍🎤 **Emotion**
            
            > 성능 최적화와 유연성이 필요하고, 다양한 스타일링 방법을 원할 경우
            > 
            
            🎨 **Styled-components**
            
            > 직관적인 문법과 널리 사용되는 안정적인 라이브러리를 원하는 경우
            > 
            
            </aside>
            

# 2.Proposals

> Comparing with the related works, discuss and finalize your proposal
> 

- proposal
    - 회원가입/로그인-BE
        - mysql사용하여 DB연동
        - 로그아웃은 FE에서 캐쉬삭제
    - 로그인/회원가입 - FE
        - 아이콘 사용- React-icons 사용하기
            
            효율성을 위해 React-icons를 이용하여 화면에 사용되는 icon import하기
            
        - styled-components 사용
            
            안정적인 화면 UI 구성을 위해 emotion 대신 styled-components 사용
            
    - 메모 생성
        - 깃허브 이슈 가져오기
            
            코드의 가독성을 위해서 fetch api가 아니라 aixos를 사용하는게 좋을 것 같다.
            
        - 메모 생성하기 버튼 누르면 메모 생성 띄우기
            - api 통신을 하며 데이터 전송시 페이지가 다시 로드가 되어야하기 때문에 페이지를 다시 로드하는 useNavigate를 선택하였다.
            - useNavigate 사용할 예정이기 때문에 react-router-dom은 설치하지 않아도 될 것 같다.
    - 생성된 메모 확인
        - 생성된 메모 클릭 시 Link 컴포넌트를 사용하여 해당 메모 디테일 페이지로 이동
        - 어플리케이션 내부에서만 페이지를 전환하는 것이라서 a태그를 사용하지 않고 react-router의 Link 컴포넌트를 통해 메모 디테일 페이지로 이동
    - 메모 디테일 확인
        - 코드의 가독성을 위해 fetch api가 아닌 axios를 사용하는 게 좋을 것 같다.
    - 메모 삭제
        - 생성했던 메모의 데이터 삭제 요청을 위해 axios.delete를 사용한다.
