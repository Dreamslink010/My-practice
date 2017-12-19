//存取localStorage中的数据
var store = {
  save(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  },
  fetch(key){
    return JSON.parse(localStorage.getItem(key)) || [];
  }
}

// var list = [
//   {
//     title:"吃饭睡觉打豆豆",
//     isChecked:false //状态是false,为未选中,任务未完成
//   },
//   {
//     title:"吃饭睡觉打豆豆",
//     isChecked:true //状态是true为选中
//   }
// ];

//取出所有的值
var list = store.fetch('cheshuang_data');
//过滤的时候有三种情况，all，finished，unfinished
var filter = {
  all(list){
    return list;
  },
  finished(list){
    return list.filter(function(items){
      return items.isChecked;
    })
  },
  unfinished(list){
    return list.filter(function(items){
      return !items.isChecked;
    })
  }
};
var vm = new Vue({ 
  el:".main",
  data:{
    newList:list,
    todo:"",
    edtorTodos:"", //记录正在编辑的数据
    beforeTitle:"",
    visibility:"all" //通过这个属性值的变化对数据进行筛选
  },
  watch:{
    // newList(){  //浅监控newList这个属性，当这个属性对应的值发生变化就会执行函数，他监控不到值里面的属性值发生变化
    //   store.save("cheshuang_data",this.newList)
    // }
    //以下是深监控
    newList:{
      handler(){
         store.save("cheshuang_data",this.newList);
      },
      deep:true //声明以下这是深度监控
    }
  },
  computed:{
    noLength(){
      return this.newList.filter(function(items){
        return !items.isChecked
      }).length
    },
    filteredList(){

      //找到了过滤函数，就返回过滤后的数据，如果没有，就返回全部数据
      return filter[this.visibility] ? filter[this.visibility](list) : list;
    }
  },
  methods:{
    addTodo(data,ev){ //添加任务
      //向list中添加一项任务，任务的格式是一个对象
      //事件处理函数中的this指向的是，当前这个根实例
      this.newList.push({
        title:this.todo,
        isChecked:false
      });
      this.todo = "";
    },
    deleteTodo(todo){
      var index = this.newList.indexOf(todo);
      this.newList.splice(index,1)
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
function watchHashChange(){
  var hash = window.location.hash.slice(1);
  vm.visibility = hash;
};
watchHashChange();
window.addEventListener("hashchange",watchHashChange)
