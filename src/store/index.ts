class Store {
  data: any = []

  setData(newData: any) {
    this.data = [...this.data, ...newData]
    return this.data
  }

  getData() {
    return this.data
  }

  count() {
    return this.data.length
  }
}

export default Store
