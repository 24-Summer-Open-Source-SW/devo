import { useState,useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header";

import MemoIcon from "../../components/MemoIcon";

const Container=styled.div``;

function Memo(){    
    const [data,setData]=useState(null);
    const memoName=localStorage.getItem('memoTitle');

    useEffect(()=>{
        const storedNameData=localStorage.getItem('memoTitle');
        if (storedNameData){
            setData(storedNameData);
        }
    })
    return(
        <>
            <Container>
                <Header/>
                {data && (
                    <MemoIcon testName={memoName} />
                )}
            </Container>

        </>
    )
}

export default Memo;