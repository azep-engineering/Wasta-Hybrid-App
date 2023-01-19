class ComputerPcService {
  static getAll() {
    throw new Error('Method not implemented.');
  }
  getAll() {
    return [
      {
        title: 'Dev Bee',
        createdDate: '18 Jan 2023',
        updatedDate: '19 Jan 2023'
      },
      {
        title: 'QuinBay',
        createdDate: '18 Jan 2023',
        updatedDate: '19 Jan 2023'
      }
    ]
  }
}

export default ComputerPcService;
