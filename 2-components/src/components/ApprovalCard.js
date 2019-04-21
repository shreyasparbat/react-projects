import React from 'react'

const content = ['Approve', 'Reject']

const ApprovalCard = (props) => (
    <div className={'ui card'}>
        <div className={'content'}>
            {props.children}
        </div>
        <div className={'ui two buttons'}>
            <div className={'ui basic green button'}>{content[0]}</div>
            <div className={'ui basic red button'}>{content[1]}</div>
        </div>
    </div>
)

export default ApprovalCard
