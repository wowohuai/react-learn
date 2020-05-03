import React from 'react'
import { Input, Button, List } from 'antd'
import PropTypes from 'prop-types'
/**
 * 
 * UI组件
 */
const UI = ({ handleChange, value, handleClick, list, handleDelete}) => (
  <div style={{ marginTop: "10px" }}>
    <div>
      <label htmlFor="input">输入内容</label>
      <Input
        placeholder="todo item"
        onChange={handleChange}
        value={value}
        id="input"
        style={{ width: '200px', marginLeft: '10px', marginRight: '10px' }}
      />
      <Button type="primary" onClick={handleClick}>add</Button>
    </div>
    <List
      style={{ width: '300px' }}
      bordered
      dataSource={list}
      renderItem={(item, index) => (
        <List.Item onClick={() => handleDelete(index)}>
          {item}
        </List.Item>
      )} />
  </div>
)

UI.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), 
  list: PropTypes.array,
  handleClick: PropTypes.func.isRequired, 
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default UI