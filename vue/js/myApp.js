var list = [
  {
    title:"吃饭睡觉打豆豆",
    isChecked:false //状态是false,为未选中,任务未完成
  },
  {
    title:"吃饭睡觉打豆豆",
    isChecked:true //状态是true为选中
  }
];
new Vue({
  el:".main",
  data:{
    list:list,
    todo:"",
    edtorTodos:"", //记录正在编辑的数据
    beforeTitle:""
  },
  computed:{
    noLength(){
      return this.list.filter(function(items){
        return !items.isChecked
      }).length
    }
  },
  methods:{
    addTodo(data,ev){ //添加任务
      //向list中添加一项任务，任务的格式是一个对象
      //事件处理函数中的this指向的是，当前这个根实例
      console.log(ev);
      this.list.push({
        title:this.todo,
        isChecked:false
      });
      this.todo = "";
    },
    deleteTodo(todo){
      var index = this.list.indexOf(todo);
      this.list.splice(index,1)
    },
    edtorTodo(todo){  //编辑任务
      //编辑任务的时候，记录一下编辑这条任务的title，方便在取消编辑的时候重新给
      this.beforeTitle = todo.title;
      this.edtorTodos = todo;

    },
    edtorTodoed(todo){ //编辑任务成功
      this.edtorTodos = "";
    },
    cancelTodo(todo){ //取消编辑任务
      todo.title = this.beforeTitle;
      this.beforeTitle = "";
      //让div显示，input隐藏
      this.edtorTodos = "";
    }
  },
  directives:{ //自定义指令（自动获取焦点指令）
    "focus":{
      update(el,binding){
        if( binding.value ){
          el.focus();
        }
      }
    }
  }
});
