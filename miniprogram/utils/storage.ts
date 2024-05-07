export type Customer = {
  name: string;
  phone: string;
  weixin: string;
  status: CustomerDayStatus[];
}

export type CustomerDayStatus = string;

export const StatusCalled = "C";
export const StatusInformation = "D";
export const StatusReservation = "Y";
export const StatusPeriod = "M";
export const StatusArrival = "H";
export const StatusReturn = "F";
export const StatusProductionReturn = "A";


export const status: Record<CustomerDayStatus, string> = {
  [StatusCalled]: '打电话',
  [StatusInformation]: '信息',
  [StatusPeriod]: '月经',
  [StatusReservation]: '预约',
  [StatusArrival]: '到店',
  [StatusReturn]: '回访',
  [StatusProductionReturn]: '产品回访',
};

const storeKey = "customer_list"

export class CustomerStorage {
  static addCustomer(customer: Customer) {
    const customerList = this.getCustomerList() || [];
    if (!customerList.find(it => it.name === customer.name)) {
      customerList.push(customer);
    }
    wx.setStorageSync(storeKey, customerList);
  }

  static getCustomerList(): Customer[] {
    return wx.getStorageSync(storeKey);
  }
}