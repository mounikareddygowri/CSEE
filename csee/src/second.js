import React from "react";

import {Components} from 'react';
class ExpenseEntryItem extends React.Component{
    render(){
        return(
            <div>
            <div><b>Item:</b><em>mango juice</em></div>
            <div><b>Amount:</b><em>38:00</em></div>
            <div><b>spend date:</b><em>2024-07-01</em></div>
            <div><b>category:</b><em>food</em></div>
            </div>
        );
        
    }

}
export default ExpenseEntryItem;
