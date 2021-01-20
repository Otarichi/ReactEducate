import React from 'react';
import axios from "axios";
import Post from '../../components/post';

class BBC extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            offset: 0,
        }
        this.getNews = this.getNews.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }

    componentDidMount() {
        this.getNews();
    }

    nextPage(){
        let newOffset = this.state.offset + 10;
        this.setState({offset: newOffset});
    }

    prevPage(){
        if (this.state.offset - 10 >= 0) {
            let newOffset = this.state.offset - 10;
            this.setState({offset: newOffset});
        }
    }

    async getNews() {
        var self = this;
        axios.get("http://api.mediastack.com/v1/news", {params: { 
        'access_key': 'db24dfaa756b04499b490666cb7baffd',
        'country': 'us,en',
        'languages': 'en',
        'sources': this.props.source,
        'offset': self.state.offset,
        'limit': 10
    }} )
            .then(function(response) {
                self.setState({data: response.data})
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    render(){
        if (this.state.data != null) {
            return <div>
                <button onClick={this.prevPage}>Prev Page</button>
                <button onClick={this.nextPage}>Next Page</button>
            {
                this.state.data.data.map((post, index)=>{
                    return <Post title={post.title} url={post.url} description={post.description}></Post>
                })
            }
        </div>
        } else {
            return <div>
                <h3>Loading...</h3>
            </div>
        }
    }
}

export default BBC;