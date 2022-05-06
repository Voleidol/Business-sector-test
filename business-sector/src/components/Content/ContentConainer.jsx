import React from "react"
import Content from "./Content";
import { userId, id, title, body, pageSize } from '../../redux/main-reducer'
import { connect } from 'react-redux';

class ContentContainer extends React.Component {
    componentDidMount() {
        this.props.getContent(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getContent(pageNumber, this.props.pageSize);
    }

    render() {
        return(
            <Content 
                userId={this.props.userId}
                id={this.props.id}
                title={this.props.title}
                body={this.props.body}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return{
        userId: state.mainPage.userId,
        id: state.mainPage.id,
        title: state.mainPage.title,
        body: state.mainPage.body,
        pageSize: state.mainPage.pageSize,
        currentPage: state.mainPage.currentPage
    }
}

export default connect(mapStateToProps, {
    userId,
    id,
    title,
    body,
    pageSize,
})(ContentContainer)