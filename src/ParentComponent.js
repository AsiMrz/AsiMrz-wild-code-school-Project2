//parrent:
import React from 'react';
import ChildComponent from 'ChildComponent';


class ParrentComponent extends component {
 constructer(props);
 super(props);

this.onChangeHandler = this.onChangeHandler.bind(this);
}
onChangeHandler(e) {
 console.log('on change' , e.currentTarget, e.Target, e);
this.setState({
location: e.currentTarget.value
})
}

OnClickHandler(event){
    event.preventDefault();

    this.setState({
        Location: event.currentTarget.event
    })
}

render() {
console.log('render ...');
return (
<div>
<h1>ChildComponenthhild Area</h1>
<ChildComponentonChange={this.onClickHandler}