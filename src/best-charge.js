function bestCharge(selectedItems) {
  let discount = 0
  let promotionNames = []
  let total = 0
  let result = `\n============= 订餐明细 =============\n`
  selectedItems.forEach(element => {
    let list = element.split(' x ')
    loadAllItems().forEach(item => {
      if (list[0] === item.id) {
        result += `${item.name} x ${list[1]} = ${item.price * Number(list[1])}元\n`
        total += item.price * Number(list[1])
        if (loadPromotions()[1].items.includes(list[0])) {
          discount += item.price * Number(list[1]) / 2
          promotionNames.push(item.name)
        }
      }
    })
  })
  if ((total >= 30 && discount > 6) || (total < 30 && discount > 0)) {
    let promotionItem = promotionNames.reduce((acc, cur, index) => {
      acc += index === 0 ? cur : '，' + cur
      return acc
    }, '')
    var promotionType = loadPromotions()[1].type
    var promotionStr = `使用优惠:\n${promotionType}(${promotionItem})，省${discount}元\n-----------------------------------\n`
  }
  else if (total >= 30 && discount <= 6) {
    discount = 6
    var promotionType = loadPromotions()[0].type
    var promotionStr = `使用优惠:\n${promotionType}，省${discount}元\n-----------------------------------\n`
  }
  else if (total < 30 && discount === 0) {
    discount = 0
    var promotionStr = ``
  }
  result += `-----------------------------------\n` + promotionStr +`总计：${total-discount}元\n===================================`
  return result/*TODO*/
}
