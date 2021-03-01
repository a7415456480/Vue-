const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id:1,
        name: '算法导论',
        data: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id:2,
        name: 'UNIX编程艺术',
        data: '2006-9',
        price: 88.00,
        count: 1
      },
      {
        id:1,
        name: '编程珠玑',
        data: '2006-9',
        price: 77.00,
        count: 1
      },      {
        id:1,
        name: '代码大全',
        data: '2006-9',
        price: 128.00,
        count: 1
      }
    ]
  },
  methods: {
    add(index){
      console.log(index);
    },
    sub(index){
      console.log(index);
    }
  }
})