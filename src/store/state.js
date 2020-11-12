/*
* state状态仓库，存储着所有的状态
* */
export default {
  inputMsg: true,  // 等待用户输入时的显示文字
  searchMsg: false,   // 正在搜索时显示的搜索中
  users: [],   //  搜索完成需加载的用户信息
  errMsg: ''  //  加载失败的错误提示信息
}