function bestCharge(selectedItems) {
  let discount=0
  let total=0
  let result=`
  ============= 订餐明细 =============
  `
  selectedItems.forEach(element=>{
    let list =element.split(' x ')
    loadAllItems().forEach(item => {
      if (list[0]===item.id) {
        result+=`${item.name}  x ${list[1]} = ${item.price*Number(list[1])}元\n`
        if(element.id=='ITEM0001'||element.id=='ITEM0022'){
          
        }
      }
    })
    result+=`-----------------------------------
    使用优惠:
    ${}，省${}元
    -----------------------------------
    总计：${}元
    ===================================`
  })
  return result/*TODO*/
}
