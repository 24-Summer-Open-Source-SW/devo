import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from'react-markdown';


const Content=styled.div`
  padding: 25px;

  font-size: 35px;
  background-color: #F9FDFF;
  border-radius: 35px;
`;

function MemoIssue({issueContent}){
    const [data, setData]=useState(null);
    const [issueData,setIssueData]=useState<string>({issueContent})
    
    // useEffect(()=>{
    //     const storedData=localStorage.getItem('issue')
    //     if (storedData){
    //         setData(storedData);
    //     }
    // },[]);
    useEffect(()=>{
        const storedData=localStorage.getItem('issue')
        if (storedData){
            setIssueData(storedData);
        }
    },[]);

    return(
        <>
            <Content>
                <ReactMarkdown>
                    {issueContent}
                </ReactMarkdown>
            </Content>
        </>
    )
}

export default MemoIssue;