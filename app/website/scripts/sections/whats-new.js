
import { Card, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import { connect } from 'react-redux';
import moment from 'moment';
import React from 'react';

const style = {
    fontWeight: 'bold'
}

const Update = props => {
    return (
        <Card initiallyExpanded={props.index == 0}>
            <CardHeader
            style={style}
            title={props.update.title.S}
            subtitle={moment(Number(props.update.date.N)).format('DD/MM/YYYY')}
            actAsExpander={true}
            showExpandableButton={true}
            subtitleColor={'#7624ad'}
            />
            <CardText expandable={true}>
                <p className='justify'>{props.update.body.S}</p>
            </CardText>
        </Card>
    )
}

const sortByDate = (a, b) => {
    let date1 = Number(a.date.N);
    let date2 = Number(b.date.N);

    if (date1 < date2){
        return -1;
    } else if(date1 > date2) {
        return 1;
    } else {
        return 0;
    }
}

const WhatsNew = props => {
    const sortedNews = props.news.sort(sortByDate);

    return (
        <div className='container'>
            <div className="page-header">
                <h1>What's On?</h1>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                {
                    sortedNews.map((update, index) => {
                        return (
                            <div key={index}>
                                <Update index={index} update={update} />
                                <br/>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        </div>
    );
}

const stateToProps = state => { 
    return { news: state.whatsnew.news } 
};

export default connect(stateToProps)(WhatsNew)