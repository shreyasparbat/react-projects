import React from 'react';
import './App.css';
import CommentDetail from './components/CommentDetail'
import ApprovalCard from './components/ApprovalCard'

const App = () => {
  return (
      <div className={'ui container comments'}>
        <ApprovalCard>
          <CommentDetail author={'Bhumika'} timestamp={Date.now()} text={'Good Blog!'}/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author={'Shreyas'} timestamp={Date.now()} text={'Show something new'}/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author={'Monkey'} timestamp={Date.now()} text={'Can I borrow Banan'}/>
        </ApprovalCard>
      </div>
  )

}

export default App;
