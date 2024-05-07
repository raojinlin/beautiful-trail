// components/list/list.ts
Component({
  properties: {
    customers: {
      value: [],
      type: Array,
    }
  },
  data: {
    searchValue: '',
    filteredCustomers: [],
    visible: false,
    detailsCustomer: null,
  },
  methods: {
    handleAdd() {
      wx.navigateTo({url: "/pages/add-customer/add-customer"})
    },
    handleDetailCustomer(e) {
      this.setData({visible: true, detailsCustomer: this.data.filteredCustomers.find(it => it.name === e.target.dataset.customerName)});
    },
    onVisibleChange(e) {
      const { visible } = e.detail;
      this.setData({visible});
      if (!visible) {
        this.setData({detailsCustomer: null});
      }
    },
    onClose() {
      this.setData({visible: false, detailsCustomer: null});
    }
  },
  observers: {
    'customers': function(customers) {
      this.setData({filteredCustomers: customers});
    },
    'searchValue': function(searchValue) {
      if (!searchValue) {
        this.setData({filteredCustomers: this.properties.customers});
      } else {
        this.setData({filteredCustomers: this.properties.customers.filter(c => c.name.includes(searchValue))});
      }
    }
  }
});