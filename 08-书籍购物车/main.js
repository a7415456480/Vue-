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
    increment(index){
      this.books[index].count += 1;
      console.log(index);
    },
    decrement(index){
      if(this.books[index].count > 1){
        this.books[index].count -= 1;
      }
      console.log(index);
    },
    getFinalPrice(price){
      return '￥' + price.toFixed(2);
    },
    removeHandler(index){
      this.books.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      let total_price= 0
      for(let i= 0; i < this.books.length; i++){
        total_price += this.books[i].price * this.books[i].count;
      }
      return total_price;
    }
  }
  ,
  filters: {
    showPrice(price){
      return '￥' + price.toFixed(2);
    }
  }
})