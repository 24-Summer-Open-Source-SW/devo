import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from'react-markdown';
import remarkGfm from "remark-gfm";


const Content=styled.div`
  padding: 25px;

  font-size: 35px;
  background-color: #F9FDFF;
  border-radius: 35px;
`;

function MemoIssue({issueContent}){
    const [data, setData]=useState(null);
    
    useEffect(()=>{
        const storedData=localStorage.getItem('issue')
        if (storedData){
            setData(storedData);
        }
    },[]);


    return(
        <>
            <Content>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {issueContent}
                </ReactMarkdown>
            </Content>
        </>
    )
}

export default MemoIssue;