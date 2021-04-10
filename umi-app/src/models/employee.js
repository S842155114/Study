import request from "umi-request"

export default{
    namespace:'employee',

    state: [],
      reducers:{
        getAll(_,{payload}){
          const { employee } = payload;
          // console.log(employee);
          return employee
        },
        
        update(state, { payload }) {
          const { employee } = payload;
          let index = state.findIndex(item=>item.key == employee.key)
          let next = state
          next[index] = employee
          return next;
        },

        add(state,{payload}){
          let { employee } = payload;
          employee.key = String(state.length + 1)
          employee.tags = []
          let next = state
          next.push(employee)
          return next;
        },
      
        delete(state, { payload }) {
        const { key: targetKey } = payload;
    
        return state.filter((e) => e.key !== targetKey);
        },
      },
      effects:{
        *getEmployee(_,{call,put}){
          const response = yield call(request.get,"/api/data")
          // console.log(response)
          yield put({
            type:'getAll',
            payload:{
              employee: response
            }
          })
        },
        *postData({payload:{employee}},{call,put}){
          const response = yield call(request.post,"/api/data",{data: employee})
          // console.log(employee,call)
        }
      }
}