import React,{Component} from "react";
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';

let SwitchExample = (props) => {
    const { getFieldProps } = props.form;
    return (
        <List.Item
          extra={<Switch
            {...getFieldProps('Switch1', {
              initialValue: true,
              valuePropName: 'checked',
            })}
            onClick={(checked) => { console.log(checked); }}
          />}
        ></List.Item> 
    );
  };
  SwitchExample = createForm()(SwitchExample);

  export default SwitchExample