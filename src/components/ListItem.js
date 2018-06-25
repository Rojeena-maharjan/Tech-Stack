import React, { Component } from 'react';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View , LayoutAnimation} from 'react-native';
import * as actions from '../actions';

class ListItem extends Component {

    componentDidUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription(){
        // console.log(this.props.selectLibraryId);
        const {library, expanded} = this.props;
        if(expanded){
            return(
                <Text>{library.description}</Text>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const {id, title} = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    <CardSection>
                            {this.renderDescription()}                       
                    </CardSection>
                </View>

            </TouchableWithoutFeedback>

        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        color:'black'
    }
};

const mapStateToProps = (state, ownProps) =>{
    // console.log(state.selectedLibraryId);
    const expanded = state.selectedLibraryId===ownProps.library.id;

    return { expanded};
}

export default connect(mapStateToProps, actions)(ListItem);