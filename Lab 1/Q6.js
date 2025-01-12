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

function CopyOrderJson(orderJSON) // two other ways
{
  var CopiedOrderJSON = [];
  for (var i = 0; i < orderJSON.length; i++)
  {
    var copiedObject = JSON.parse(JSON.stringify(orderJSON[i]));
    CopiedOrderJSON.push(copiedObject);
  }
  return CopiedOrderJSON;
}

var CopiedOrderJSON = CopyOrderJson(OrderJson);

function FormattingItems(Items)
{
  var ItemsAndQuantities =  Items.split(',');
  var sum = 0;
  for(var i = 0; i < ItemsAndQuantities.length; i++)
  {

      var quantityPerItem = ItemsAndQuantities[i].split(':')[1];
      sum+= Number(quantityPerItem);

  }
  return sum;
}

var OrderJsonFormattedItems = CopiedOrderJSON.map( // reduce badal map, search
  function(order){
    order.items = FormattingItems(order.items);
    return order;
  }
)
//console.log(OrderJsonFormattedItems);

function FormattingDeliveryDuration(orderDate,deliveryDate) // 
{
  var OrderDate = new Date(orderDate);
  var DeliveryDate = new Date(deliveryDate);
  var deliveryDuration = (DeliveryDate-OrderDate)/(1000*60*60*24);

  return deliveryDuration;

}
var OrderJSONFormattedDeliveryDuration = CopiedOrderJSON.map(
  function(order)
  {
    order.deliveryDuration = FormattingDeliveryDuration(order.orderDate,order.deliveryDate) + " days";
    delete order.orderDate;
    delete order.deliveryDate;
    return order;
  }
)
//console.log(OrderJSONFormattedDeliveryDuration);
//console.log(OrderJson);

function FormattingAddress(deliveryAddress)
{
  var AddressSpecifications = deliveryAddress.split(',');
  var buildingNumberAsString = AddressSpecifications[0];
  if (Number(AddressSpecifications[0])) 
  {
    AddressSpecifications[0] = Number(AddressSpecifications[0]);
  }
  else{
    AddressSpecifications[0] = buildingNumberAsString;
  } 
 
  //if(AddressSpecifications)
  return AddressSpecifications;
}
var OrderJsonFormattedItemsDeliveryAndAddress = CopiedOrderJSON.map(
  function(order)
  {
    var formattedDeliveryAddress = FormattingAddress(order.deliveryAddress);
    order.deliveryCountry = formattedDeliveryAddress[3];
    order.deliveryCity = formattedDeliveryAddress[2];
    order.deliveryStreet = formattedDeliveryAddress[1];
    order.buildingNumber = formattedDeliveryAddress[0];
    delete order.deliveryAddress;
    return order;
  }
)

console.log(OrderJson);
console.log(OrderJsonFormattedItemsDeliveryAndAddress);





