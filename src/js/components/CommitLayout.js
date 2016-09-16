import React from 'react'

const CommitLayout = React.createClass({
    render() {

        let commitData = this.props.commitData,
            defaultImg = 'img/person.png',
            img = (commitData.author) ? commitData.author.avatar_url : defaultImg,
            name = commitData.commit.author.name,
            userLink = (commitData.author) ? commitData.author.html_url : 'javascript:void(0)',
            commitLink = commitData.html_url,
            msg = commitData.commit.message

        return (
            <div className="commit">
				<img className="authorImg" src={img} />
				<a href={userLink}>
					<div className="authorUsername">
						{name}
					</div>
				</a>
				<a href={commitLink}>
					<div className="commitMessage">{msg}</div>
				</a>
			</div>
        )
    }
})

export default CommitLayout
