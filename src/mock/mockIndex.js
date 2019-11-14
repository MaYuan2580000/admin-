import Mock from 'mockjs'

function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

let List = []
const count = 8

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: i,
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    phone:Mock.Random.string('number',11),
    sex: Mock.Random.integer(0, 1)
  }))
}

export default {
  /**
   * 获取列表
   * 要带参数 name, page, limt; name可以不填, page,limit有默认值。
   * @param name, page, limit
   * @return {{code: number, count: number, data: *[]}}
   */
  getUserList: config => {
    const { name, page = 1, limit = 1000 } = param2Obj(config.url)
    const mockList = List.filter(user => {
      if (name && user.name.indexOf(name) === -1) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 20000,
      count: mockList.length,
      data: pageList
    }
  },
  /**
   * 增加用户
   * @param name, addr, age, birth, sex
   * @return {{code: number, data: {message: string}}}
   */
  createUser: config => {
    var config = JSON.parse(config.body)
    console.log(config)
    // const { name, addr, age, birth } = param2Obj(config.url)
    List.push({
      id: Mock.Random.guid(),
      name: config.name,
      addr: config.addr,
      age: config.age,
      phone: config.phone
    })
    console.log(List,'--------')
    return {
      code: 200,
      data: {
        message: '添加成功'
      }
    }
  },
  /**
   * 删除用户
   * @param id
   * @return {*}
   */
  deleteUser: config => {
    
    const { id } = param2Obj(config.url)
    if (!id) {
      return {
        code: -999,
        message: '参数不正确'
      }
    } else {
      // console.log(id)
       List.splice(id,1)
      // console.log(List)
      return {
        code: 200,
        data: {
          message: '删除成功',
          // data:Lists
        }
      }
    }
  },
  /**
   * 批量删除
   * @param config
   * @return {{code: number, data: {message: string}}}
   */

  /**
   * 修改用户
   * @param id, name, addr, age, birth, sex
   * @return {{code: number, data: {message: string}}}
   */
  updateUser: config => {
    var config = JSON.parse(config.body)
    // const { id, name, addr, age, phone} = param2Obj(config.url)
    // const sex_num = parseInt(sex)
    List.some(u => {
      if (u.id === id) {
        u.name = name
        u.addr = addr
        u.age = age
        u.phone = phone
        return true
      }
    })
    return {
      code: 200,
      data: {
        message: '编辑成功'
      }
    }
  }
}