import React from 'react';
import classes from './NewsPage.module.css'
import NewsPostsContainer from './NewsPosts/NewsPostsContainer';
import AddNews from './AddNews/AddNews';
import AddNewsContainer from './AddNews/AddNewsContainer';

class NewsPage extends React.Component {

    state = {
        isAddNewsOpen: false
    }
    render() {

        let newsElements = this.props.newsData.map((news) => <NewsPostsContainer id={news.id} message={news.message} likeCount={news.likeCount} author={news.author} wasLiked={news.wasLiked} header={news.header}/>);

        return (
            <div>
                <div>                    
                    <button onClick={(e) => this.setState({ isOpen: true })}>Add news post</button>
                    <AddNewsContainer isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })} />
                    {newsElements}
                </div>

            </div>
        )
    }
}

export default NewsPage;