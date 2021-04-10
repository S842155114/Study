import {Table,Tag,Space} from 'antd';
import {connect} from "dva";
import {Link} from "umi";
import { Button } from 'antd';
import {useEffect} from "react"

function commit(employee,dispatch){
  dispatch({
    type:'employee/postData',
    payload:{
      employee:employee
    }
  });
}

function EmployeeList({employee,dispatch}) {
  
  useEffect(()=>{
    if(employee.length==0){
      dispatch({
        type:'employee/getEmployee'
      });
    }
  },[])

    const columns = [
        {
          title: '角色id',
          dataIndex: 'key',
          key: 'key',
        },
        {
          title: '姓名',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: '姓氏',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '地址',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '标签',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Link to={`/employee/${record.key}`}>编辑</Link>
              <a style={{color:'red'}} onClick={()=> 
                  dispatch({
                      type: 'employee/delete',
                        payload: {
                          key: record.key,
                        },
                  })
              }>删除</a>
            </Space>
            
          ),
        },
      ];

    return (
      <div >
          <Table dataSource={employee} columns={columns}></Table>
          <div>
            <Button style={{left:'45%'}} type="primary" htmlType="submit" onClick={()=>commit(employee,dispatch)}>
              提交
            </Button>
          </div>
      </div>
    );
}

export default connect(({employee})=>({employee}))(EmployeeList)