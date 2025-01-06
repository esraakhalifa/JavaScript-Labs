const OrderJson = [
    {
      orderId: 'ORD001',
      customer: 'John Doe',
      items: 'item1:2,item2:1,item3:5',
      orderDate: '2023-12-01',
      deliveryDate: '2023-12-05',
      deliveryAddress: '123, Main Street, Springfield, USA',
    },
    {
      orderId: 'ORD002',
      customer: 'Jane Smith',
      items: 'itemA:3,itemB:4',
      orderDate: '2023-11-15',
      deliveryDate: '2023-11-20',
      deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
    },
    {
      orderId: 'ORD003',
      customer: 'Alice Johnson',
      items: 'itemX:1',
      orderDate: '2023-10-10',
      deliveryDate: '2023-10-15',
      deliveryAddress: '456, Pine Lane, Denver, USA',
    }
  ];

var OrdersWithItemsFormatted = OrderJson.map(function(order)
{
  //return order.items.split(',').split(':');
  var items = order.items.split(",");
  var quantities = [];
  for (let i = 0; i < items.length; i++)
  {
    quantities.push(items[i].split(":")[1]) ;
  }
  var sum = 0;

  var quantities = quantities.map(function(quantity){
    sum+=parseInt(quantity);
    return sum;
  })
  console.log(quantities);
  

})

//console.log(OrdersWithItemsFormatted);

/**
 * 
 */

