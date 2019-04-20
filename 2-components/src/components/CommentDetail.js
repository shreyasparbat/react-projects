import faker from 'faker'
import React from 'react'

const CommentDetail = (props) => (
    <div className={'comment'}>
        <a href={'/'} className={'avatar'}>
            <img alt={'avatar'} src={faker.image.avatar()}/>
        </a>
        <div className={'content'}>
            <a href={'/'} className={'author'}>
                {props.author}
            </a>
            <div className={'metadata'}>
                <span className={'timestamp'}>
                    {props.timestamp}
                </span>
            </div>
            <div className={'text'}>
                {props.text}
             </div>
        </div>
    </div>
)

export default CommentDetail
