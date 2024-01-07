Component({
  properties: {
    selected: {
      type: Number,
      value: 0
    },
    color: {
      type: String,
      value: '#7A7E83'
    },
    selectedColor: {
      type: String,
      value: '#b4282d'
    },
    fontSize: {
      type: Number,
      value: 26
    },
    borderStyle: {
      type: String,
      value: '#f6f6f6'
    },
    backgroundColor: {
      type: String,
      value: '#fff'
    },
    list: {
      type: Array,
      value: [
        {
          "pagePath": "/pages/aichat/index",
          "iconPath": "/images/icon/chat.png",
          "selectedIconPath": "/images/icon/sel_chat.png",
          "text": "AI聊"
        },
        {
          "pagePath": "/pages/prods/index",
          "iconPath": "/images/icon/prod.png",
          "selectedIconPath": "/images/icon/sel_prod.png",
          "text": "物品"
        },
        {
          "pagePath": "/pages/movies/index",
          "iconPath": "/images/icon/movie.png",
          "selectedIconPath": "/images/icon/sel_movie.png",
          "text": "电影"
        },
        {
          "pagePath": "/pages/books/index",
          "iconPath": "/images/icon/book.png",
          "selectedIconPath": "/images/icon/sel_book.png",
          "text": "书籍"
        },
        {
          "pagePath": "/pages/friends/index",
          "iconPath": "/images/icon/friend.png",
          "selectedIconPath": "/images/icon/sel_friend.png",
          "text": "朋友"
        }
      ]
    }
  },
  methods: {
    switchTab(e) {
      const { index, path } = e.currentTarget.dataset
      if (index === this.properties.selected) return
      wx.switchTab({ url: path })
      this.showItem(index, path)
    },
    showItem(idx, path) {
      this.setData({
        selected: idx
      });
      const detail = { idx, path };
      const option = { bubbles: true, composed: true };
      this.triggerEvent('onTap', detail, option);
    }
  }
})
