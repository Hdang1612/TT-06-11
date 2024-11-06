import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchFilterChange } from '../../redux/action';
import { useSelector } from 'react-redux';
import { searchSelector } from '../../redux/selector';
import { searchPriorityChange } from '../../redux/action';
const { Search } = Input;

export default function Filters() {
    const [searchText,setSearchText] = useState('')
    const dispatch = useDispatch()
    const searchItem=useSelector(searchSelector)
    const [searchPriority,setSearchPriority]=useState([])

    const handleSearchPrioChange = (value)=>{
      setSearchPriority(value)
      dispatch(searchPriorityChange(value))
    }


    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value)
        dispatch(searchFilterChange(e.target.value))
    }


  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search onChange={handleSearchTextChange} placeholder='input search text'  />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          onChange={handleSearchPrioChange}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
