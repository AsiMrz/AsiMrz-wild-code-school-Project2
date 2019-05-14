//child
import react from 'react';
const childcomponent = () => {
    return <div>
     <h2>child area</h2>
<input type="text" name="location' value='ee' placeholder='berlin' onChange={props.onChangeHandler}
/>
<button onClick={props.onClickHandler}>Find</button>

     </div>

};

const Title = 'myTitle';

export { Title, childComponent};