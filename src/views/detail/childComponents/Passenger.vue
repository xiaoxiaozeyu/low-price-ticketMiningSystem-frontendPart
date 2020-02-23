<template>
  <div id="passenger">
    <!-- 乘客卡片 -->
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      add-text="选择乘客"
      @click="showList = true"
    />

    <!-- 乘客列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-contact-list
        v-model="chosenContactId"
        add-text="添加乘客信息"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"

      />
    </van-popup>

    <!-- 乘客信息编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { ContactCard, ContactList, ContactEdit } from 'vant';
  import { Popup } from 'vant';

  Vue.use(Popup);
  Vue.use(ContactCard);
  Vue.use(ContactList);
  Vue.use(ContactEdit);

  export default {
    name: "Passenger",
    data() {
      return {
        chosenContactId: null,
        editingContact: {},
        showList: false,
        showEdit: false,
        isEdit: false,
        list: [{
          name: '蔡嘉诚',
          tel: '18260069008',
          id: 0
        },{
          name: '唐爱全',
          tel: '13773329218',
          id: 1
        }]
      };
    },

    computed: {
      cardType() {
        return this.chosenContactId !== null ? 'edit' : 'add';
      },

      currentContact() {
        const id = this.chosenContactId;
        return id !== null ? this.list.filter(item => item.id === id)[0] : {};
      }
    },

    methods: {
      // 添加联系人
      onAdd() {
        this.editingContact = { id: this.list.length };
        this.isEdit = false;
        this.showEdit = true;
      },

      // 编辑联系人
      onEdit(item) {
        this.isEdit = true;
        this.showEdit = true;
        this.editingContact = item;
      },

      // 选中联系人
      onSelect() {
        this.showList = false;
      },

      // 保存联系人
      onSave(info) {
        this.showEdit = false;
        this.showList = false;

        if (this.isEdit) {
          this.list = this.list.map(item => item.id === info.id ? info : item);
        } else {
          this.list.push(info);
        }
        this.chosenContactId = info.id;
      },

      // 删除联系人
      onDelete(info) {
        this.showEdit = false;
        this.list = this.list.filter(item => item.id !== info.id);
        if (this.chosenContactId === info.id) {
          this.chosenContactId = null;
        }
      }
    }
  }
</script>

<style scoped>
 #passenger {
   margin: 5px;
   border-radius: 5px;
 }
</style>
