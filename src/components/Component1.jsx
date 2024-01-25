import React from 'react';
import {useSelector} from "react-redux";

const Component1 = () => {
    const cash = useSelector(state => state.cash)
    return (
        <div>
           Другая компонента {cash}
        </div>
    );
};

export default Component1;