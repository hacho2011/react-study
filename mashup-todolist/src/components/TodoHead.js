import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
 padding: 48px 32px 24px 32px; 
 border-bottom: 1px solid #ddd; 
 
 h1 {
    margin: 0 ; 
    font-size: 36px; 
    color:  #333;
 }

 .day {
    margin-top: 4px; 
    color: #888;
    font-size: 21px;
 }

 .tasks-left {
    color: #20c997;
    font-size: 18px; 
    margin-top: 40px; 
 }
`
function TodoTemplate() {
    return (
        <TodoHeadBlock>
            <h1>2021-08-17</h1>
            <div className="day">화요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoTemplate; 