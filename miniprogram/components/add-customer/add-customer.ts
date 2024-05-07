import Message from 'tdesign-miniprogram/message/index';
import { CustomerStorage } from '../../utils/storage';

Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    name: '',
    weixin: '',
    phone: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleAdd() {
      let errMsg = '';
      if (!this.data.name || !this.data.name.trim()) {
        errMsg = "请填写顾客名称";
      } else if (!this.data.phone || !this.data.phone.trim()) {
        errMsg = "请填写顾客手机号码";
      }

      if (errMsg !== '') {
        Message.info({
          context: this,
          offset: [20, 32],
          duration: 3000,
          content: errMsg,
        });
        return;
      }

      CustomerStorage.addCustomer({name: this.data.name, weixin: this.data.weixin, phone: this.data.phone, status: []});
      Message.info({
        context: this,
        offset: [20, 32],
        duration: 3000,
        icon: false,
        content: '添加成功',
      });

      wx.navigateBack({delta: 1});
    }
  }
})