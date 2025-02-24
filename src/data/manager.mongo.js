class Manager {
  constructor(model) {
    this.model = model;
  }
  create = async (data) => {
    try {
      const one = await this.model.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  read = async (filter) => {
    try {
      const all = await this.model.find(filter).lean();
      return all;
    } catch (error) {
      throw error;
    }
  };
  readById = async (id) => {
    try {
      const one = await this.model.findById(id).lean();

      return one;
    } catch (error) {
      throw error;
    }
  };
  updateById = async (id, data) => {
    try {
      const opts = { new: true };
      const one = await this.model.findByIdAndUpdate(id, data, opts);
      return one;
    } catch (error) {
      throw error;
    }
  };
  destroyById = async (id) => {
    try {
      const one = await this.model.findByIdAndDelete(id);
      return one;
    } catch (error) {
      throw error;
    }
  };
}

export default Manager;
