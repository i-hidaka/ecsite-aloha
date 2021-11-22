import { Item } from "./item";
import { OrderTopping } from "./orderTopping";

/**
 * 注文商品を表すクラスです.
 */
export class OrderItem {
  constructor(
    public _id: number, //ID
    public _itemId: number, //商品ID
    public _orderId: number, //注文ID
    public _quantity: number, //数量
    public _size: string, //サイズ
    public _item: Array<Item>, //商品
    public _orderToppingList: Array<OrderTopping> //注文トッピングリスト
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get itemId(): number {
    return this._itemId;
  }

  public set itemId(itemId: number) {
    this._itemId = itemId;
  }

  public get orderId(): number {
    return this._orderId;
  }

  public set orderId(orderId: number) {
    this._orderId = orderId;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public set quantity(quantity: number) {
    this._quantity = quantity;
  }

  public get size(): string {
    return this._size;
  }

  public set size(size: string) {
    this._size = size;
  }

  public get item(): Array<Item> {
    return this._item;
  }

  public set item(item: Array<Item>) {
    this._item = item;
  }

  public get orderToppingList(): Array<OrderTopping> {
    return this._orderToppingList;
  }

  public set orderToppingList(orderToppingList: Array<OrderTopping>) {
    this._orderToppingList = orderToppingList;
  }
}
